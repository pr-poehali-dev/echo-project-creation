import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

interface Train {
  id: string
  number: string
  line: string
  currentStation: string
  nextStation: string
  speed: number
  passengers: number
  status: 'moving' | 'station' | 'delayed' | 'maintenance'
  delay: number
}

interface Station {
  id: string
  name: string
  line: string
  platformStatus: 'clear' | 'occupied' | 'maintenance'
  waitingPassengers: number
  temperature: number
  ventilation: 'normal' | 'high' | 'maintenance'
}

export function Dispatch() {
  const [trains, setTrains] = useState<Train[]>([
    {
      id: '1',
      number: '0142',
      line: 'Сокольническая',
      currentStation: 'Сокольники',
      nextStation: 'Красносельская',
      speed: 65,
      passengers: 847,
      status: 'moving',
      delay: 0
    },
    {
      id: '2',
      number: '0387',
      line: 'Замоскворецкая',
      currentStation: 'Автозаводская',
      nextStation: 'Павелецкая',
      speed: 0,
      passengers: 1203,
      status: 'station',
      delay: 0
    },
    {
      id: '3',
      number: '0521',
      line: 'Арбатско-Покровская',
      currentStation: 'Арбатская',
      nextStation: 'Смоленская',
      speed: 32,
      passengers: 654,
      status: 'delayed',
      delay: 180
    },
  ])

  const [stations, setStations] = useState<Station[]>([
    {
      id: '1',
      name: 'Площадь Революции',
      line: 'Сокольническая',
      platformStatus: 'occupied',
      waitingPassengers: 342,
      temperature: 22,
      ventilation: 'normal'
    },
    {
      id: '2',
      name: 'Театральная',
      line: 'Замоскворецкая',
      platformStatus: 'clear',
      waitingPassengers: 186,
      temperature: 24,
      ventilation: 'high'
    },
    {
      id: '3',
      name: 'Курская',
      line: 'Арбатско-Покровская',
      platformStatus: 'maintenance',
      waitingPassengers: 89,
      temperature: 19,
      ventilation: 'maintenance'
    },
  ])

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      
      // Симуляция обновления данных поездов
      setTrains(prevTrains => 
        prevTrains.map(train => ({
          ...train,
          speed: Math.max(0, train.speed + (Math.random() - 0.5) * 10),
          passengers: Math.max(0, train.passengers + Math.floor((Math.random() - 0.5) * 50)),
          delay: train.status === 'delayed' ? Math.max(0, train.delay - 1) : train.delay
        }))
      )
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'moving': return 'status-active'
      case 'station': return 'status-warning'
      case 'delayed': return 'status-error'
      case 'maintenance': return 'status-offline'
      default: return 'status-offline'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'moving': return 'В ПУТИ'
      case 'station': return 'НА СТАНЦИИ'
      case 'delayed': return 'ЗАДЕРЖКА'
      case 'maintenance': return 'ТО'
      default: return 'НЕИЗВ.'
    }
  }

  const getPlatformStatusColor = (status: string) => {
    switch (status) {
      case 'clear': return 'status-active'
      case 'occupied': return 'status-warning'
      case 'maintenance': return 'status-error'
      default: return 'status-offline'
    }
  }

  const getPlatformStatusText = (status: string) => {
    switch (status) {
      case 'clear': return 'СВОБОДНА'
      case 'occupied': return 'ЗАНЯТА'
      case 'maintenance': return 'РЕМОНТ'
      default: return 'НЕИЗВ.'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-status-active">ОПЕРАТИВНАЯ ДИСПЕТЧЕРСКАЯ</h1>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-terminal-light border border-status-active/20 rounded-lg">
            <span className="text-status-active text-sm font-mono">
              {currentTime.toLocaleTimeString('ru-RU')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-status-active rounded-full animate-pulse-green"></div>
            <span className="text-status-active text-sm font-mono">МОНИТОРИНГ АКТИВЕН</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6 bg-terminal-light border-terminal-lighter">
            <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
              <Icon name="Train" size={20} />
              СОСТОЯНИЕ ПОЕЗДОВ
            </h3>
            
            <div className="space-y-4">
              {trains.map((train) => (
                <div key={train.id} className="p-4 bg-terminal rounded-lg border border-terminal-lighter">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 bg-terminal-lighter rounded font-mono text-xs text-status-active">
                        №{train.number}
                      </div>
                      <div className="text-status-active font-mono text-sm">{train.line}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${getStatusColor(train.status)} animate-pulse`}></div>
                      <span className={`text-${getStatusColor(train.status)} font-mono text-xs`}>
                        {getStatusText(train.status)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                    <div>
                      <div className="text-status-offline">ТЕКУЩАЯ</div>
                      <div className="text-status-active">{train.currentStation}</div>
                    </div>
                    <div>
                      <div className="text-status-offline">СЛЕДУЮЩАЯ</div>
                      <div className="text-status-active">{train.nextStation}</div>
                    </div>
                    <div>
                      <div className="text-status-offline">СКОРОСТЬ</div>
                      <div className="text-status-active">{Math.round(train.speed)} км/ч</div>
                    </div>
                    <div>
                      <div className="text-status-offline">ПАССАЖИРЫ</div>
                      <div className="text-status-active">{train.passengers}</div>
                    </div>
                  </div>
                  
                  {train.status === 'delayed' && train.delay > 0 && (
                    <div className="mt-3 p-2 bg-status-error/10 border border-status-error/20 rounded">
                      <div className="text-status-error font-mono text-xs">
                        ЗАДЕРЖКА: {Math.floor(train.delay / 60)}:{String(train.delay % 60).padStart(2, '0')}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-terminal-light border-terminal-lighter">
            <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              СТАНЦИИ
            </h3>
            
            <div className="space-y-4">
              {stations.map((station) => (
                <div key={station.id} className="p-4 bg-terminal rounded-lg border border-terminal-lighter">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-status-active font-mono text-sm">{station.name}</div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${getPlatformStatusColor(station.platformStatus)} animate-pulse`}></div>
                      <span className={`text-${getPlatformStatusColor(station.platformStatus)} font-mono text-xs`}>
                        {getPlatformStatusText(station.platformStatus)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-status-offline">ОЖИДАЮТ:</span>
                      <span className="text-status-active">{station.waitingPassengers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-status-offline">ТЕМП:</span>
                      <span className="text-status-active">{station.temperature}°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-status-offline">ВЕНТИЛЯЦИЯ:</span>
                      <span className={`text-${
                        station.ventilation === 'maintenance' ? 'status-error' :
                        station.ventilation === 'high' ? 'status-warning' : 'status-active'
                      }`}>
                        {station.ventilation === 'maintenance' ? 'РЕМОНТ' :
                         station.ventilation === 'high' ? 'МАКС' : 'НОРМА'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-terminal-light border-terminal-lighter">
        <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
          <Icon name="Radio" size={20} />
          ПАНЕЛЬ УПРАВЛЕНИЯ
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="bg-status-active text-terminal hover:bg-status-active/80 font-mono">
            <Icon name="Play" size={16} className="mr-2" />
            ЗАПУСК
          </Button>
          <Button className="bg-status-warning text-terminal hover:bg-status-warning/80 font-mono">
            <Icon name="Pause" size={16} className="mr-2" />
            ПАУЗА
          </Button>
          <Button className="bg-status-error text-terminal hover:bg-status-error/80 font-mono">
            <Icon name="Square" size={16} className="mr-2" />
            СТОП
          </Button>
          <Button className="bg-status-offline text-terminal hover:bg-status-offline/80 font-mono">
            <Icon name="AlertTriangle" size={16} className="mr-2" />
            АВАРИЯ
          </Button>
        </div>
      </Card>
    </div>
  )
}