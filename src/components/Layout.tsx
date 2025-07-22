import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import Icon from '@/components/ui/icon'

const navigation = [
  { name: 'Главная', href: '/', icon: 'Home' },
  { name: 'Расписания', href: '/schedules', icon: 'Clock' },
  { name: 'Маршруты', href: '/routes', icon: 'Route' },
  { name: 'Станции', href: '/stations', icon: 'MapPin' },
  { name: 'Диспетчерская', href: '/dispatch', icon: 'Radio' },
  { name: 'Отчеты', href: '/reports', icon: 'FileText' },
  { name: 'Настройки', href: '/settings', icon: 'Settings' },
  { name: 'Справка', href: '/help', icon: 'HelpCircle' },
]

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-terminal text-status-active">
      <div className="flex">
        <aside className={cn(
          "bg-terminal-light border-r border-terminal-lighter transition-all duration-300",
          sidebarOpen ? "w-64" : "w-16"
        )}>
          <div className="flex items-center justify-between p-4 border-b border-terminal-lighter">
            <div className={cn(
              "flex items-center gap-3 transition-opacity duration-300",
              sidebarOpen ? "opacity-100" : "opacity-0"
            )}>
              <div className="w-8 h-8 bg-status-active rounded flex items-center justify-center">
                <Icon name="Train" size={20} className="text-terminal" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-status-active">МЕТРО АСУ</h1>
                <p className="text-xs text-status-offline">v2.1.4</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded hover:bg-terminal-lighter transition-colors"
            >
              <Icon name={sidebarOpen ? "ChevronLeft" : "ChevronRight"} size={16} />
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg transition-all duration-200",
                        "hover:bg-terminal-lighter",
                        isActive && "bg-status-active/10 text-status-active border border-status-active/20"
                      )}
                    >
                      <Icon name={item.icon as any} size={18} />
                      <span className={cn(
                        "transition-opacity duration-300",
                        sidebarOpen ? "opacity-100" : "opacity-0"
                      )}>
                        {item.name}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>

        <main className="flex-1">
          <header className="bg-terminal-light border-b border-terminal-lighter p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-status-active rounded-full animate-pulse-green"></div>
                  <span className="text-status-active font-semibold">СИСТЕМА АКТИВНА</span>
                </div>
                <div className="text-status-offline text-sm">
                  {new Date().toLocaleString('ru-RU')}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-status-offline" />
                  <span className="text-status-offline text-sm">Диспетчер: Иванов А.П.</span>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}