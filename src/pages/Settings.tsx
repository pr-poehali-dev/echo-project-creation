import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import Icon from '@/components/ui/icon'

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-status-active">НАСТРОЙКИ СИСТЕМЫ</h1>
        <div className="flex items-center gap-2">
          <Icon name="Settings" size={20} className="text-status-active" />
          <span className="text-status-active text-sm font-mono">КОНФИГУРАЦИЯ</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
            <Icon name="Monitor" size={20} />
            ИНТЕРФЕЙС
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-status-active font-mono text-sm">Темная тема</Label>
              <Switch defaultChecked className="data-[state=checked]:bg-status-active" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label className="text-status-active font-mono text-sm">Звуковые уведомления</Label>
              <Switch defaultChecked className="data-[state=checked]:bg-status-active" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label className="text-status-active font-mono text-sm">Автообновление данных</Label>
              <Switch defaultChecked className="data-[state=checked]:bg-status-active" />
            </div>
            
            <div>
              <Label className="text-status-active font-mono text-sm mb-2 block">Интервал обновления (сек)</Label>
              <Select defaultValue="5">
                <SelectTrigger className="bg-terminal border-terminal-lighter text-status-active font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-terminal border-terminal-lighter">
                  <SelectItem value="1">1 секунда</SelectItem>
                  <SelectItem value="3">3 секунды</SelectItem>
                  <SelectItem value="5">5 секунд</SelectItem>
                  <SelectItem value="10">10 секунд</SelectItem>
                  <SelectItem value="30">30 секунд</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
            <Icon name="Bell" size={20} />
            УВЕДОМЛЕНИЯ
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-status-active font-mono text-sm">Критические ошибки</Label>
              <Switch defaultChecked className="data-[state=checked]:bg-status-error" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label className="text-status-active font-mono text-sm">Предупреждения</Label>
              <Switch defaultChecked className="data-[state=checked]:bg-status-warning" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label className="text-status-active font-mono text-sm">Плановые работы</Label>
              <Switch className="data-[state=checked]:bg-status-active" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label className="text-status-active font-mono text-sm">Изменения расписания</Label>
              <Switch defaultChecked className="data-[state=checked]:bg-status-active" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
            <Icon name="Shield" size={20} />
            БЕЗОПАСНОСТЬ
          </h3>
          
          <div className="space-y-4">
            <div>
              <Label className="text-status-active font-mono text-sm mb-2 block">Текущий пользователь</Label>
              <Input 
                defaultValue="Иванов А.П."
                className="bg-terminal border-terminal-lighter text-status-active font-mono"
                disabled
              />
            </div>
            
            <div>
              <Label className="text-status-active font-mono text-sm mb-2 block">Уровень доступа</Label>
              <Input 
                defaultValue="ДИСПЕТЧЕР"
                className="bg-terminal border-terminal-lighter text-status-active font-mono"
                disabled
              />
            </div>
            
            <div>
              <Label className="text-status-active font-mono text-sm mb-2 block">Смена пароля</Label>
              <Button className="bg-status-active text-terminal hover:bg-status-active/80 font-mono">
                <Icon name="Key" size={16} className="mr-2" />
                СМЕНИТЬ ПАРОЛЬ
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <Label className="text-status-active font-mono text-sm">Автоблокировка (мин)</Label>
              <Select defaultValue="15">
                <SelectTrigger className="w-32 bg-terminal border-terminal-lighter text-status-active font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-terminal border-terminal-lighter">
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                  <SelectItem value="60">60</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-terminal-light border-terminal-lighter">
          <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
            <Icon name="Database" size={20} />
            ДАННЫЕ
          </h3>
          
          <div className="space-y-4">
            <div>
              <Label className="text-status-active font-mono text-sm mb-2 block">Резервное копирование</Label>
              <div className="flex gap-2">
                <Button className="bg-status-active text-terminal hover:bg-status-active/80 font-mono">
                  <Icon name="Download" size={16} className="mr-2" />
                  СОЗДАТЬ БЭКАП
                </Button>
                <Button variant="outline" className="bg-terminal border-terminal-lighter text-status-active hover:bg-terminal-lighter font-mono">
                  <Icon name="Upload" size={16} className="mr-2" />
                  ВОССТАНОВИТЬ
                </Button>
              </div>
            </div>
            
            <div>
              <Label className="text-status-active font-mono text-sm mb-2 block">Очистка логов</Label>
              <Select defaultValue="7">
                <SelectTrigger className="bg-terminal border-terminal-lighter text-status-active font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-terminal border-terminal-lighter">
                  <SelectItem value="1">Старше 1 дня</SelectItem>
                  <SelectItem value="7">Старше 7 дней</SelectItem>
                  <SelectItem value="30">Старше 30 дней</SelectItem>
                  <SelectItem value="90">Старше 90 дней</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <Label className="text-status-active font-mono text-sm">Сжатие данных</Label>
              <Switch defaultChecked className="data-[state=checked]:bg-status-active" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-terminal-light border-terminal-lighter">
        <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
          <Icon name="Network" size={20} />
          СИСТЕМНАЯ ИНФОРМАЦИЯ
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-mono">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-status-offline">Версия ПО:</span>
              <span className="text-status-active">2.1.4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">Uptime:</span>
              <span className="text-status-active">72ч 14м</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">CPU:</span>
              <span className="text-status-active">12%</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-status-offline">RAM:</span>
              <span className="text-status-active">2.1 / 8 ГБ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">Диск:</span>
              <span className="text-status-active">45 / 500 ГБ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">Сеть:</span>
              <span className="text-status-active">Стабильно</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-status-offline">БД:</span>
              <span className="text-status-active">Подключена</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">Сенсоры:</span>
              <span className="text-status-active">1247 / 1250</span>
            </div>
            <div className="flex justify-between">
              <span className="text-status-offline">Последний бэкап:</span>
              <span className="text-status-active">Сегодня</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline" className="bg-terminal border-terminal-lighter text-status-active hover:bg-terminal-lighter font-mono">
          <Icon name="RotateCcw" size={16} className="mr-2" />
          СБРОСИТЬ
        </Button>
        <Button className="bg-status-active text-terminal hover:bg-status-active/80 font-mono">
          <Icon name="Save" size={16} className="mr-2" />
          СОХРАНИТЬ
        </Button>
      </div>
    </div>
  )
}