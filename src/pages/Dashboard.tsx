import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

export function Dashboard() {
  const systemStatus = [
    { name: 'Центральный диспетчерский пункт', status: 'active', uptime: '99.8%' },
    { name: 'Система связи', status: 'active', uptime: '100%' },
    { name: 'Автоблокировка', status: 'warning', uptime: '97.2%' },
    { name: 'Электроснабжение', status: 'active', uptime: '99.9%' },
  ]

  const linesStatus = [
    { name: 'Сокольническая', color: 'metro-red', trains: 24, interval: 90, status: 'active' },
    { name: 'Замоскворецкая', color: 'metro-green', trains: 28, interval: 85, status: 'active' },
    { name: 'Арбатско-Покровская', color: 'metro-blue', trains: 32, interval: 95, status: 'warning' },
    { name: 'Кольцевая', color: 'terminal-lighter', trains: 18, interval: 180, status: 'active' },
  ]

  const alerts = [
    { time: '14:32', type: 'warning', message: 'Задержка на ст. Площадь Революции - технические работы' },
    { time: '14:15', type: 'info', message: 'Плановое обслуживание завершено на Арбатско-Покровской линии' },
    { time: '13:45', type: 'error', message: 'Критическая ошибка системы на ст. Курская' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-status-active">ЦЕНТРАЛЬНЫЙ ДИСПЕТЧЕРСКИЙ ПУНКТ</h1>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-terminal-light border border-status-active/20 rounded-lg">
            <span className="text-status-active text-sm font-mono">СМЕНА: ДЕНЬ</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-status-active/10 rounded-lg">
              <Icon name="Train" size={24} className="text-status-active" />
            </div>
            <div>
              <p className="text-status-offline text-sm">Поездов в работе</p>
              <p className="text-2xl font-bold text-status-active">142</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-status-warning/10 rounded-lg">
              <Icon name="MapPin" size={24} className="text-status-warning" />
            </div>
            <div>
              <p className="text-status-offline text-sm">Активных станций</p>
              <p className="text-2xl font-bold text-status-active">278</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-status-error/10 rounded-lg">
              <Icon name="AlertTriangle" size={24} className="text-status-error" />
            </div>
            <div>
              <p className="text-status-offline text-sm">Активных инцидентов</p>
              <p className="text-2xl font-bold text-status-error">3</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-status-active/10 rounded-lg">
              <Icon name="Users" size={24} className="text-status-active" />
            </div>
            <div>
              <p className="text-status-offline text-sm">Пассажиропоток/час</p>
              <p className="text-2xl font-bold text-status-active">45.2K</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
            <Icon name="Activity" size={20} />
            СОСТОЯНИЕ СИСТЕМ
          </h3>
          <div className="space-y-4">
            {systemStatus.map((system, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-terminal rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    system.status === 'active' ? 'bg-status-active' :
                    system.status === 'warning' ? 'bg-status-warning' : 'bg-status-error'
                  } animate-pulse`}></div>
                  <span className="text-status-active font-mono text-sm">{system.name}</span>
                </div>
                <div className="text-status-offline text-xs font-mono">
                  UPTIME: {system.uptime}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
            <Icon name="Route" size={20} />
            СОСТОЯНИЕ ЛИНИЙ
          </h3>
          <div className="space-y-4">
            {linesStatus.map((line, index) => (
              <div key={index} className="p-3 bg-terminal rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full bg-${line.color}`}></div>
                    <span className="text-status-active font-mono text-sm">{line.name}</span>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    line.status === 'active' ? 'bg-status-active' : 'bg-status-warning'
                  } animate-pulse`}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-status-offline">
                  <div>ПОЕЗДОВ: {line.trains}</div>
                  <div>ИНТЕРВАЛ: {line.interval}с</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-terminal-light border-terminal-lighter">
        <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
          <Icon name="Bell" size={20} />
          ОПЕРАТИВНЫЕ СООБЩЕНИЯ
        </h3>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-terminal rounded-lg">
              <div className="text-status-offline text-xs font-mono pt-1 min-w-[40px]">
                {alert.time}
              </div>
              <div className="flex items-start gap-2">
                <Icon 
                  name={
                    alert.type === 'error' ? 'AlertCircle' :
                    alert.type === 'warning' ? 'AlertTriangle' : 'Info'
                  } 
                  size={16} 
                  className={
                    alert.type === 'error' ? 'text-status-error' :
                    alert.type === 'warning' ? 'text-status-warning' : 'text-status-active'
                  }
                />
                <span className="text-status-active text-sm font-mono">{alert.message}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}