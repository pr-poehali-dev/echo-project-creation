import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

export function Help() {
  const sections = [
    {
      title: 'Основные функции',
      items: [
        { icon: 'Home', title: 'Панель управления', description: 'Отображение общей статистики системы' },
        { icon: 'Clock', title: 'Управление расписаниями', description: 'Создание и редактирование расписаний поездов' },
        { icon: 'Route', title: 'Мониторинг маршрутов', description: 'Отслеживание состояния линий метро' },
        { icon: 'MapPin', title: 'Мониторинг станций', description: 'Контроль состояния станций и оборудования' },
        { icon: 'Radio', title: 'Оперативная диспетчерская', description: 'Мониторинг поездов в реальном времени' }
      ]
    },
    {
      title: 'Индикаторы состояния',
      items: [
        { icon: 'Circle', color: 'status-active', title: 'АКТИВНО', description: 'Нормальное функционирование системы' },
        { icon: 'Circle', color: 'status-warning', title: 'ПРЕДУПРЕЖДЕНИЕ', description: 'Режим обслуживания или некритичные нарушения' },
        { icon: 'Circle', color: 'status-error', title: 'АВАРИЯ', description: 'Критическая ошибка, требующая немедленного вмешательства' },
        { icon: 'Circle', color: 'status-offline', title: 'ОТКЛЮЧЕНО', description: 'Оборудование или система отключены' }
      ]
    },
    {
      title: 'Горячие клавиши',
      items: [
        { icon: 'Keyboard', title: 'F1', description: 'Вызов этого окна справки' },
        { icon: 'Keyboard', title: 'F2', description: 'Переход к управлению расписаниями' },
        { icon: 'Keyboard', title: 'F3', description: 'Переход к оперативной диспетчерской' },
        { icon: 'Keyboard', title: 'Ctrl+R', description: 'Обновление данных в реальном времени' },
        { icon: 'Keyboard', title: 'Esc', description: 'Отмена текущей операции' }
      ]
    }
  ]

  const emergencyContacts = [
    { title: 'Аварийная служба', phone: '8 (495) 123-45-67' },
    { title: 'Техническая поддержка', phone: '8 (495) 123-45-68' },
    { title: 'Начальник смены', phone: '8 (495) 123-45-69' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-status-active">СПРАВОЧНОЕ РУКОВОДСТВО</h1>
        <div className="flex items-center gap-2">
          <Icon name="HelpCircle" size={20} className="text-status-active" />
          <span className="text-status-active text-sm font-mono">v2.1.4</span>
        </div>
      </div>

      {sections.map((section, index) => (
        <Card key={index} className="p-6 bg-terminal-light border-terminal-lighter">
          <h3 className="text-lg font-bold text-status-active mb-4">{section.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-start gap-3 p-3 bg-terminal rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  <Icon 
                    name={item.icon as any} 
                    size={16} 
                    className={item.color ? `text-${item.color}` : 'text-status-active'} 
                  />
                </div>
                <div>
                  <h4 className="font-mono text-sm text-status-active mb-1">{item.title}</h4>
                  <p className="text-status-offline text-xs font-mono leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}

      <Card className="p-6 bg-terminal-light border-terminal-lighter">
        <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
          <Icon name="Phone" size={20} />
          КОНТАКТЫ АВАРИЙНЫХ СЛУЖБ
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="p-4 bg-terminal rounded-lg border border-status-error/20">
              <div className="text-status-active font-mono text-sm mb-2">{contact.title}</div>
              <div className="text-status-error font-mono text-lg font-bold">{contact.phone}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-terminal-light border-terminal-lighter">
        <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
          <Icon name="Info" size={20} />
          О СИСТЕМЕ
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-mono">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-status-offline">Версия ПО:</span>
              <span className="text-status-active">2.1.4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">Дата сборки:</span>
              <span className="text-status-active">22.07.2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">Лицензия:</span>
              <span className="text-status-active">МОСМЕТРО-2025</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-status-offline">Разработчик:</span>
              <span className="text-status-active">ОАО "Метросистемы"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">Поддержка:</span>
              <span className="text-status-active">24/7</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">Последнее обновление:</span>
              <span className="text-status-active">20.07.2025</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}