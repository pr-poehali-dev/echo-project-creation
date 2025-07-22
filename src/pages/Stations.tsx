import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

interface StationData {
  id: string
  name: string
  line: string
  lineColor: string
  status: 'operational' | 'maintenance' | 'closed' | 'emergency'
  passengerFlow: number
  temperature: number
  humidity: number
  ventilation: 'normal' | 'high' | 'maintenance'
  lighting: 'normal' | 'emergency' | 'maintenance'
  escalators: number
  escalatorsWorking: number
  lastInspection: string
}

export function Stations() {
  const stations: StationData[] = [
    {
      id: '1',
      name: 'Площадь Революции',
      line: 'Сокольническая',
      lineColor: 'metro-red',
      status: 'operational',
      passengerFlow: 15420,
      temperature: 22,
      humidity: 65,
      ventilation: 'normal',
      lighting: 'normal',
      escalators: 4,
      escalatorsWorking: 4,
      lastInspection: '2024-01-15'
    },
    {
      id: '2',
      name: 'Театральная',
      line: 'Замоскворецкая',
      lineColor: 'metro-green',
      status: 'operational',
      passengerFlow: 18750,
      temperature: 24,
      humidity: 58,
      ventilation: 'high',
      lighting: 'normal',
      escalators: 3,
      escalatorsWorking: 3,
      lastInspection: '2024-01-12'
    },
    {
      id: '3',
      name: 'Курская',
      line: 'Арбатско-Покровская',
      lineColor: 'metro-blue',
      status: 'maintenance',
      passengerFlow: 8940,
      temperature: 19,
      humidity: 72,
      ventilation: 'maintenance',
      lighting: 'emergency',
      escalators: 6,
      escalatorsWorking: 4,
      lastInspection: '2024-01-20'
    },
    {
      id: '4',
      name: 'Комсомольская',
      line: 'Кольцевая',
      lineColor: 'terminal-lighter',
      status: 'operational',
      passengerFlow: 22340,
      temperature: 23,
      humidity: 61,
      ventilation: 'normal',
      lighting: 'normal',
      escalators: 8,
      escalatorsWorking: 7,
      lastInspection: '2024-01-18'
    },
    {
      id: '5',
      name: 'Арбатская',
      line: 'Филевская',
      lineColor: 'metro-blue',
      status: 'emergency',
      passengerFlow: 0,
      temperature: 16,
      humidity: 85,
      ventilation: 'maintenance',
      lighting: 'emergency',
      escalators: 2,
      escalatorsWorking: 0,
      lastInspection: '2024-01-22'
    },
    {
      id: '6',
      name: 'Маяковская',
      line: 'Замоскворецкая',
      lineColor: 'metro-green',
      status: 'operational',
      passengerFlow: 19850,
      temperature: 21,
      humidity: 63,
      ventilation: 'normal',
      lighting: 'normal',
      escalators: 4,
      escalatorsWorking: 4,
      lastInspection: '2024-01-16'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'status-active'
      case 'maintenance': return 'status-warning'
      case 'emergency': return 'status-error'
      case 'closed': return 'status-offline'
      default: return 'status-offline'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational': return 'РАБОТАЕТ'
      case 'maintenance': return 'РЕМОНТ'
      case 'emergency': return 'АВАРИЯ'
      case 'closed': return 'ЗАКРЫТА'
      default: return 'НЕИЗВ.'
    }
  }

  const getSystemStatusColor = (system: string) => {
    switch (system) {
      case 'normal': return 'status-active'
      case 'high': return 'status-warning'
      case 'emergency': return 'status-error'
      case 'maintenance': return 'status-offline'
      default: return 'status-offline'
    }
  }

  const getSystemStatusText = (system: string) => {
    switch (system) {
      case 'normal': return 'НОРМА'
      case 'high': return 'МАКС'
      case 'emergency': return 'АВАР'
      case 'maintenance': return 'ТО'
      default: return 'НЕИЗВ'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-status-active">МОНИТОРИНГ СТАНЦИЙ</h1>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-status-active rounded-full animate-pulse-green"></div>
          <span className="text-status-active text-sm font-mono">СИСТЕМА АКТИВНА</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {stations.map((station) => (
          <Card key={station.id} className="p-6 bg-terminal-light border-terminal-lighter">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full bg-${station.lineColor}`}></div>
                <div>
                  <h3 className="text-lg font-bold text-status-active">{station.name}</h3>
                  <p className="text-status-offline text-xs font-mono">{station.line}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-${getStatusColor(station.status)} animate-pulse`}></div>
                <span className={`text-${getStatusColor(station.status)} font-mono text-xs`}>
                  {getStatusText(station.status)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-terminal p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Users" size={12} className="text-status-active" />
                    <span className="text-status-offline">ПАСС/ДЕНЬ</span>
                  </div>
                  <div className="text-status-active font-bold">{station.passengerFlow.toLocaleString()}</div>
                </div>
                <div className="bg-terminal p-3 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Thermometer" size={12} className="text-status-active" />
                    <span className="text-status-offline">ТЕМП</span>
                  </div>
                  <div className="text-status-active font-bold">{station.temperature}°C</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-terminal p-3 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-status-offline">ВЛАЖНОСТЬ</span>
                    <span className="text-status-active font-bold">{station.humidity}%</span>
                  </div>
                  <div className="w-full bg-terminal-lighter h-1 rounded">
                    <div 
                      className="h-1 bg-status-active rounded" 
                      style={{width: `${Math.min(station.humidity, 100)}%`}}
                    ></div>
                  </div>
                </div>
                <div className="bg-terminal p-3 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-status-offline">ЭСКАЛАТОРЫ</span>
                    <span className="text-status-active font-bold">{station.escalatorsWorking}/{station.escalators}</span>
                  </div>
                  <div className="w-full bg-terminal-lighter h-1 rounded">
                    <div 
                      className="h-1 bg-status-active rounded" 
                      style={{width: `${(station.escalatorsWorking / station.escalators) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-terminal p-3 rounded">
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-status-offline">ВЕНТИЛЯЦИЯ:</span>
                    <span className={`text-${getSystemStatusColor(station.ventilation)}`}>
                      {getSystemStatusText(station.ventilation)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-status-offline">ОСВЕЩЕНИЕ:</span>
                    <span className={`text-${getSystemStatusColor(station.lighting)}`}>
                      {getSystemStatusText(station.lighting)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-terminal p-3 rounded">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-status-offline">ПОСЛ. ПРОВЕРКА:</span>
                  <span className="text-status-active">{new Date(station.lastInspection).toLocaleDateString('ru-RU')}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-terminal-light border-terminal-lighter">
        <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
          <Icon name="BarChart3" size={20} />
          ОБЩАЯ СТАТИСТИКА
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-status-active mb-1">
              {stations.filter(s => s.status === 'operational').length}
            </div>
            <div className="text-status-active text-sm font-mono">РАБОТАЮТ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-status-warning mb-1">
              {stations.filter(s => s.status === 'maintenance').length}
            </div>
            <div className="text-status-warning text-sm font-mono">НА РЕМОНТЕ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-status-error mb-1">
              {stations.filter(s => s.status === 'emergency').length}
            </div>
            <div className="text-status-error text-sm font-mono">АВАРИИ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-status-active mb-1">
              {stations.reduce((sum, s) => sum + s.passengerFlow, 0).toLocaleString()}
            </div>
            <div className="text-status-active text-sm font-mono">ПАСС/ДЕНЬ</div>
          </div>
        </div>
      </Card>
    </div>
  )
}