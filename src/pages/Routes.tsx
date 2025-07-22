import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

interface Route {
  id: string
  name: string
  color: string
  stations: string[]
  length: number
  averageTime: number
  status: 'active' | 'maintenance' | 'closed'
}

export function Routes() {
  const routes: Route[] = [
    {
      id: '1',
      name: 'Сокольническая линия',
      color: 'metro-red',
      stations: [
        'Бульвар Рокоссовского', 'Черкизовская', 'Преображенская площадь',
        'Сокольники', 'Красносельская', 'Комсомольская', 'Красные ворота',
        'Чистые пруды', 'Лубянка', 'Охотный ряд', 'Библиотека имени Ленина',
        'Кропоткинская', 'Парк культуры', 'Фрунзенская', 'Спортивная',
        'Воробьёвы горы', 'Университет', 'Проспект Вернадского',
        'Юго-Западная', 'Тропарёво', 'Румянцево', 'Саларьево'
      ],
      length: 44.2,
      averageTime: 52,
      status: 'active'
    },
    {
      id: '2',
      name: 'Замоскворецкая линия',
      color: 'metro-green',
      stations: [
        'Ховрино', 'Беломорская', 'Речной вокзал', 'Водный стадион',
        'Войковская', 'Сокол', 'Аэропорт', 'Динамо', 'Белорусская',
        'Маяковская', 'Тверская', 'Театральная', 'Новокузнецкая',
        'Павелецкая', 'Автозаводская', 'Технопарк', 'Коломенская',
        'Каширская', 'Кантемировская', 'Царицыно', 'Орехово',
        'Домодедовская', 'Красногвардейская', 'Алма-Атинская'
      ],
      length: 42.9,
      averageTime: 48,
      status: 'active'
    },
    {
      id: '3',
      name: 'Арбатско-Покровская линия',
      color: 'metro-blue',
      stations: [
        'Пятницкое шоссе', 'Митино', 'Волоколамская', 'Мякинино',
        'Строгино', 'Крылатское', 'Молодёжная', 'Кунцевская',
        'Славянский бульвар', 'Парк Победы', 'Киевская', 'Смоленская',
        'Арбатская', 'Площадь Революции', 'Курская', 'Бауманская',
        'Электрозаводская', 'Семёновская', 'Партизанская',
        'Измайловская', 'Первомайская', 'Щёлковская'
      ],
      length: 45.1,
      averageTime: 55,
      status: 'maintenance'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'status-active'
      case 'maintenance': return 'status-warning'
      case 'closed': return 'status-error'
      default: return 'status-offline'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'АКТИВНА'
      case 'maintenance': return 'ТО'
      case 'closed': return 'ЗАКРЫТА'
      default: return 'НЕИЗВ.'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-status-active">МАРШРУТЫ МЕТРО</h1>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-status-active rounded-full animate-pulse-green"></div>
          <span className="text-status-active text-sm font-mono">СИСТЕМА АКТИВНА</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {routes.map((route) => (
          <Card key={route.id} className="p-6 bg-terminal-light border-terminal-lighter">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full bg-${route.color}`}></div>
                <h3 className="text-xl font-bold text-status-active">{route.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-${getStatusColor(route.status)} animate-pulse`}></div>
                <span className={`text-${getStatusColor(route.status)} font-mono text-sm`}>
                  {getStatusText(route.status)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon name="MapPin" size={16} className="text-status-active" />
                  <span className="text-status-active font-mono text-sm">СТАНЦИЙ</span>
                </div>
                <div className="text-2xl font-bold text-status-active">{route.stations.length}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon name="Route" size={16} className="text-status-active" />
                  <span className="text-status-active font-mono text-sm">ДЛИНА</span>
                </div>
                <div className="text-2xl font-bold text-status-active">{route.length} км</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon name="Clock" size={16} className="text-status-active" />
                  <span className="text-status-active font-mono text-sm">ВРЕМЯ</span>
                </div>
                <div className="text-2xl font-bold text-status-active">{route.averageTime} мин</div>
              </div>
            </div>

            <div>
              <h4 className="text-status-active font-mono text-sm mb-3 flex items-center gap-2">
                <Icon name="List" size={14} />
                СТАНЦИИ МАРШРУТА:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {route.stations.map((station, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-terminal rounded text-xs">
                    <span className="text-status-offline font-mono">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-status-active font-mono">{station}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}