import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Icon from '@/components/ui/icon'

export function Reports() {
  const reports = [
    {
      id: 1,
      name: 'Ежедневная сводка',
      description: 'Общая статистика работы системы за день',
      type: 'daily',
      lastGenerated: '2025-01-22 08:00',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Анализ пассажиропотока',
      description: 'Детальный анализ движения пассажиров по станциям',
      type: 'analytics',
      lastGenerated: '2025-01-22 07:30',
      status: 'completed'
    },
    {
      id: 3,
      name: 'Отчет по инцидентам',
      description: 'Сводка всех зарегистрированных нарушений и сбоев',
      type: 'incidents',
      lastGenerated: '2025-01-22 06:00',
      status: 'completed'
    },
    {
      id: 4,
      name: 'Техническое состояние',
      description: 'Мониторинг работоспособности оборудования',
      type: 'technical',
      lastGenerated: '2025-01-22 05:00',
      status: 'completed'
    },
    {
      id: 5,
      name: 'Финансовые показатели',
      description: 'Анализ экономической эффективности',
      type: 'financial',
      lastGenerated: 'Генерируется...',
      status: 'generating'
    }
  ]

  const quickStats = [
    { label: 'Поездов в работе', value: '142', trend: '+3' },
    { label: 'Общий пассажиропоток', value: '1.2M', trend: '+15%' },
    { label: 'Средняя задержка', value: '0.8 мин', trend: '-12%' },
    { label: 'Эффективность системы', value: '98.7%', trend: '+0.2%' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'status-active'
      case 'generating': return 'status-warning'
      case 'failed': return 'status-error'
      default: return 'status-offline'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'ГОТОВ'
      case 'generating': return 'ГЕНЕРАЦИЯ'
      case 'failed': return 'ОШИБКА'
      default: return 'НЕИЗВ.'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'daily': return 'Calendar'
      case 'analytics': return 'BarChart3'
      case 'incidents': return 'AlertTriangle'
      case 'technical': return 'Wrench'
      case 'financial': return 'DollarSign'
      default: return 'FileText'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-status-active">ОТЧЕТЫ И АНАЛИТИКА</h1>
        <div className="flex items-center gap-2">
          <Icon name="FileText" size={20} className="text-status-active" />
          <span className="text-status-active text-sm font-mono">СИСТЕМА ОТЧЕТНОСТИ</span>
        </div>
      </div>

      <Card className="p-6 bg-terminal-light border-terminal-lighter">
        <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
          <Icon name="TrendingUp" size={20} />
          БЫСТРАЯ СТАТИСТИКА
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-status-active mb-1">{stat.value}</div>
              <div className="text-status-offline text-sm font-mono mb-1">{stat.label}</div>
              <div className={`text-xs font-mono ${
                stat.trend.startsWith('+') ? 'text-status-active' : 
                stat.trend.startsWith('-') ? 'text-status-warning' : 'text-status-offline'
              }`}>
                {stat.trend}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6 bg-terminal-light border-terminal-lighter">
            <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
              <Icon name="FileText" size={20} />
              ДОСТУПНЫЕ ОТЧЕТЫ
            </h3>
            
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="p-4 bg-terminal rounded-lg border border-terminal-lighter">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Icon name={getTypeIcon(report.type) as any} size={20} className="text-status-active" />
                      <div>
                        <h4 className="text-status-active font-mono text-sm font-bold">{report.name}</h4>
                        <p className="text-status-offline text-xs font-mono">{report.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-${getStatusColor(report.status)} animate-pulse`}></div>
                      <span className={`text-${getStatusColor(report.status)} font-mono text-xs`}>
                        {getStatusText(report.status)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-status-offline text-xs font-mono">
                      Последний: {report.lastGenerated}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        disabled={report.status === 'generating'}
                        className="bg-terminal border-terminal-lighter text-status-active hover:bg-terminal-lighter font-mono"
                      >
                        <Icon name="Download" size={12} className="mr-1" />
                        СКАЧАТЬ
                      </Button>
                      <Button 
                        size="sm" 
                        disabled={report.status === 'generating'}
                        className="bg-status-active text-terminal hover:bg-status-active/80 font-mono"
                      >
                        <Icon name="RefreshCw" size={12} className="mr-1" />
                        ОБНОВИТЬ
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-terminal-light border-terminal-lighter mb-6">
            <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
              <Icon name="Plus" size={20} />
              СОЗДАТЬ ОТЧЕТ
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-status-active font-mono text-xs mb-2 block">ТИП ОТЧЕТА</label>
                <Select>
                  <SelectTrigger className="bg-terminal border-terminal-lighter text-status-active font-mono">
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent className="bg-terminal border-terminal-lighter">
                    <SelectItem value="daily">Ежедневный</SelectItem>
                    <SelectItem value="weekly">Еженедельный</SelectItem>
                    <SelectItem value="monthly">Ежемесячный</SelectItem>
                    <SelectItem value="custom">Пользовательский</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-status-active font-mono text-xs mb-2 block">ПЕРИОД</label>
                <Select>
                  <SelectTrigger className="bg-terminal border-terminal-lighter text-status-active font-mono">
                    <SelectValue placeholder="Выберите период" />
                  </SelectTrigger>
                  <SelectContent className="bg-terminal border-terminal-lighter">
                    <SelectItem value="today">Сегодня</SelectItem>
                    <SelectItem value="yesterday">Вчера</SelectItem>
                    <SelectItem value="week">Эта неделя</SelectItem>
                    <SelectItem value="month">Этот месяц</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-status-active font-mono text-xs mb-2 block">ФОРМАТ</label>
                <Select defaultValue="pdf">
                  <SelectTrigger className="bg-terminal border-terminal-lighter text-status-active font-mono">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-terminal border-terminal-lighter">
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full bg-status-active text-terminal hover:bg-status-active/80 font-mono">
                <Icon name="FileText" size={16} className="mr-2" />
                СГЕНЕРИРОВАТЬ
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-terminal-light border-terminal-lighter">
            <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
              <Icon name="Clock" size={20} />
              РАСПИСАНИЕ ОТЧЕТОВ
            </h3>
            
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between p-2 bg-terminal rounded">
                <span className="text-status-offline">Ежедневный</span>
                <span className="text-status-active">08:00</span>
              </div>
              <div className="flex justify-between p-2 bg-terminal rounded">
                <span className="text-status-offline">Еженедельный</span>
                <span className="text-status-active">ПН 06:00</span>
              </div>
              <div className="flex justify-between p-2 bg-terminal rounded">
                <span className="text-status-offline">Ежемесячный</span>
                <span className="text-status-active">1 число</span>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4 bg-terminal border-terminal-lighter text-status-active hover:bg-terminal-lighter font-mono">
              <Icon name="Settings" size={16} className="mr-2" />
              НАСТРОИТЬ
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}