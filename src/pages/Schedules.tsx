import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Icon from '@/components/ui/icon'

interface Schedule {
  id: string
  stationName: string
  routeNumber: string
  interval: number
  startTime: string
  endTime: string
  status: 'active' | 'inactive'
}

export function Schedules() {
  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      id: '1',
      stationName: 'Сокольники',
      routeNumber: 'М1',
      interval: 90,
      startTime: '05:30',
      endTime: '01:00',
      status: 'active'
    },
    {
      id: '2',
      stationName: 'Парк Культуры',
      routeNumber: 'М2',
      interval: 85,
      startTime: '05:45',
      endTime: '01:15',
      status: 'active'
    },
    {
      id: '3',
      stationName: 'Арбатская',
      routeNumber: 'М3',
      interval: 95,
      startTime: '06:00',
      endTime: '00:45',
      status: 'inactive'
    }
  ])

  const [newSchedule, setNewSchedule] = useState({
    stationName: '',
    routeNumber: '',
    interval: '',
    startTime: '',
    endTime: ''
  })

  const handleAddSchedule = () => {
    if (newSchedule.stationName && newSchedule.routeNumber && newSchedule.interval) {
      const schedule: Schedule = {
        id: Date.now().toString(),
        stationName: newSchedule.stationName,
        routeNumber: newSchedule.routeNumber,
        interval: parseInt(newSchedule.interval),
        startTime: newSchedule.startTime || '06:00',
        endTime: newSchedule.endTime || '01:00',
        status: 'active'
      }
      setSchedules([...schedules, schedule])
      setNewSchedule({ stationName: '', routeNumber: '', interval: '', startTime: '', endTime: '' })
    }
  }

  const toggleStatus = (id: string) => {
    setSchedules(schedules.map(schedule => 
      schedule.id === id 
        ? { ...schedule, status: schedule.status === 'active' ? 'inactive' : 'active' } as Schedule
        : schedule
    ))
  }

  const deleteSchedule = (id: string) => {
    setSchedules(schedules.filter(schedule => schedule.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-status-active">УПРАВЛЕНИЕ РАСПИСАНИЯМИ</h1>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-status-active rounded-full animate-pulse-green"></div>
          <span className="text-status-active text-sm font-mono">СИСТЕМА АКТИВНА</span>
        </div>
      </div>

      <Card className="p-6 bg-terminal-light border-terminal-lighter">
        <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
          <Icon name="Plus" size={20} />
          СОЗДАТЬ НОВОЕ РАСПИСАНИЕ
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div>
            <Label className="text-status-active text-xs font-mono">НАЗВАНИЕ СТАНЦИИ</Label>
            <Input
              value={newSchedule.stationName}
              onChange={(e) => setNewSchedule({...newSchedule, stationName: e.target.value})}
              placeholder="Введите название станции"
              className="bg-terminal border-terminal-lighter text-status-active font-mono"
            />
          </div>
          
          <div>
            <Label className="text-status-active text-xs font-mono">НОМЕР МАРШРУТА</Label>
            <Select value={newSchedule.routeNumber} onValueChange={(value) => setNewSchedule({...newSchedule, routeNumber: value})}>
              <SelectTrigger className="bg-terminal border-terminal-lighter text-status-active font-mono">
                <SelectValue placeholder="Выберите маршрут" />
              </SelectTrigger>
              <SelectContent className="bg-terminal border-terminal-lighter">
                <SelectItem value="М1">М1 - Сокольническая</SelectItem>
                <SelectItem value="М2">М2 - Замоскворецкая</SelectItem>
                <SelectItem value="М3">М3 - Арбатско-Покровская</SelectItem>
                <SelectItem value="М4">М4 - Филевская</SelectItem>
                <SelectItem value="М5">М5 - Кольцевая</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="text-status-active text-xs font-mono">ИНТЕРВАЛ (сек)</Label>
            <Input
              type="number"
              value={newSchedule.interval}
              onChange={(e) => setNewSchedule({...newSchedule, interval: e.target.value})}
              placeholder="90"
              className="bg-terminal border-terminal-lighter text-status-active font-mono"
            />
          </div>
          
          <div>
            <Label className="text-status-active text-xs font-mono">ВРЕМЯ НАЧАЛА</Label>
            <Input
              type="time"
              value={newSchedule.startTime}
              onChange={(e) => setNewSchedule({...newSchedule, startTime: e.target.value})}
              className="bg-terminal border-terminal-lighter text-status-active font-mono"
            />
          </div>
          
          <div>
            <Label className="text-status-active text-xs font-mono">ВРЕМЯ ОКОНЧАНИЯ</Label>
            <Input
              type="time"
              value={newSchedule.endTime}
              onChange={(e) => setNewSchedule({...newSchedule, endTime: e.target.value})}
              className="bg-terminal border-terminal-lighter text-status-active font-mono"
            />
          </div>
        </div>
        
        <Button 
          onClick={handleAddSchedule}
          className="bg-status-active text-terminal hover:bg-status-active/80 font-mono"
        >
          <Icon name="Plus" size={16} className="mr-2" />
          ДОБАВИТЬ РАСПИСАНИЕ
        </Button>
      </Card>

      <Card className="p-6 bg-terminal-light border-terminal-lighter">
        <h3 className="text-lg font-bold text-status-active mb-4 flex items-center gap-2">
          <Icon name="Clock" size={20} />
          АКТИВНЫЕ РАСПИСАНИЯ
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono">
            <thead>
              <tr className="border-b border-terminal-lighter">
                <th className="text-left p-3 text-status-active">СТАНЦИЯ</th>
                <th className="text-left p-3 text-status-active">МАРШРУТ</th>
                <th className="text-left p-3 text-status-active">ИНТЕРВАЛ</th>
                <th className="text-left p-3 text-status-active">ВРЕМЯ РАБОТЫ</th>
                <th className="text-left p-3 text-status-active">СТАТУС</th>
                <th className="text-left p-3 text-status-active">ДЕЙСТВИЯ</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => (
                <tr key={schedule.id} className="border-b border-terminal/20 hover:bg-terminal/20">
                  <td className="p-3 text-status-active">{schedule.stationName}</td>
                  <td className="p-3 text-status-active">{schedule.routeNumber}</td>
                  <td className="p-3 text-status-active">{schedule.interval} сек</td>
                  <td className="p-3 text-status-active">{schedule.startTime} - {schedule.endTime}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        schedule.status === 'active' ? 'bg-status-active animate-pulse' : 'bg-status-offline'
                      }`}></div>
                      <span className={
                        schedule.status === 'active' ? 'text-status-active' : 'text-status-offline'
                      }>
                        {schedule.status === 'active' ? 'АКТИВНО' : 'ОСТАНОВЛЕНО'}
                      </span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleStatus(schedule.id)}
                        className="bg-terminal border-terminal-lighter text-status-active hover:bg-terminal-lighter"
                      >
                        <Icon name={schedule.status === 'active' ? 'Pause' : 'Play'} size={12} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => deleteSchedule(schedule.id)}
                        className="bg-terminal border-status-error text-status-error hover:bg-status-error/10"
                      >
                        <Icon name="Trash" size={12} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}