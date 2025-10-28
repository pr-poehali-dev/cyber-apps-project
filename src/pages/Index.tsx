import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  user: string;
  text: string;
  time: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('productivity');
  const [chatMessages, setChatMessages] = useState<Message[]>([
    { id: 1, user: 'NeoUser', text: 'Привет всем! Кто пробовал новый APX Tool?', time: '14:23' },
    { id: 2, user: 'CyberDev', text: 'Да, отличная штука! Работает быстрее v2.0', time: '14:25' },
    { id: 3, user: 'Glitch404', text: 'А где можно скачать плагины?', time: '14:27' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const productivity = [
    { id: 1, name: 'TaskMaster Pro', description: 'Управление задачами и проектами с ИИ', icon: 'CheckSquare' },
    { id: 2, name: 'QuantumSync', description: 'Синхронизация файлов с квантовым шифрованием', icon: 'RefreshCw' },
    { id: 3, name: 'NoteMind AI', description: 'Умные заметки с автоматической организацией', icon: 'FileText' },
    { id: 4, name: 'TimeWarp', description: 'Тайм-трекер с аналитикой продуктивности', icon: 'Clock' },
  ];

  const creative = [
    { id: 5, name: 'HoloDesigner', description: '3D-моделирование и голографический редактор', icon: 'Box' },
    { id: 6, name: 'PhotoZen Pro', description: 'Профессиональное редактирование фото с ИИ', icon: 'Image' },
    { id: 7, name: 'VideoForge', description: 'Видеомонтаж нового поколения', icon: 'Video' },
    { id: 8, name: 'SoundLab', description: 'Создание музыки и аудио-обработка', icon: 'Music' },
  ];

  const developer = [
    { id: 9, name: 'NeuroCoder Pro', description: 'Кодирование с ИИ-помощником', icon: 'Code' },
    { id: 10, name: 'DebugMaster', description: 'Автоматический поиск и исправление ошибок', icon: 'Bug' },
    { id: 11, name: 'DataMiner X', description: 'Анализ больших данных с машинным обучением', icon: 'Database' },
    { id: 12, name: 'APIHub', description: 'Тестирование и документация API', icon: 'Layers' },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: chatMessages.length + 1,
        user: 'You',
        text: newMessage,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  const renderApps = (apps: typeof productivity) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {apps.map((app) => (
        <Card
          key={app.id}
          className="p-6 bg-card border-primary/20 hover:border-primary transition-all hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] group cursor-pointer"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Icon name={app.icon as any} className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg neon-text-red mb-2">{app.name}</h3>
              <p className="text-sm text-muted-foreground">{app.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold glitch neon-text-red">BAGIRASHOP</h1>
            <nav className="flex gap-4">
              <Button
                variant={activeSection === 'productivity' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('productivity')}
                className="neon-glow"
              >
                <Icon name="Zap" className="mr-2 h-4 w-4" />
                Продуктивность
              </Button>
              <Button
                variant={activeSection === 'creative' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('creative')}
                className="neon-glow"
              >
                <Icon name="Palette" className="mr-2 h-4 w-4" />
                Креатив
              </Button>
              <Button
                variant={activeSection === 'developer' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('developer')}
                className="neon-glow"
              >
                <Icon name="Terminal" className="mr-2 h-4 w-4" />
                Разработка
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {activeSection === 'productivity' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 neon-text-bright-red">
                Приложения для продуктивности
              </h2>
              {renderApps(productivity)}
            </div>
          )}

          {activeSection === 'creative' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 neon-text-bright-red">Креативные инструменты</h2>
              {renderApps(creative)}
            </div>
          )}

          {activeSection === 'developer' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 neon-text-bright-red">Инструменты разработчика</h2>
              {renderApps(developer)}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card className="p-4 bg-card border-primary/20 sticky top-24 h-[calc(100vh-7rem)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg neon-text-dark-red">Чат сообщества</h3>
              <Badge variant="outline" className="border-primary text-primary">
                <Icon name="Users" className="mr-1 h-3 w-3" />
                1,342 online
              </Badge>
            </div>

            <ScrollArea className="h-[calc(100%-8rem)] mb-4 pr-4">
              <div className="space-y-3">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="bg-muted/50 p-3 rounded border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm neon-text-red">{msg.user}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex gap-2">
              <Input
                placeholder="Написать сообщение..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="bg-input border-border"
              />
              <Button onClick={handleSendMessage} className="bg-primary neon-glow">
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;