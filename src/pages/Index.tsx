import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface App {
  id: number;
  name: string;
  category: string;
  description: string;
  version: string;
  downloads: number;
  rating: number;
}

interface Message {
  id: number;
  user: string;
  text: string;
  time: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');
  const [chatMessages, setChatMessages] = useState<Message[]>([
    { id: 1, user: 'NeoUser', text: 'Привет всем! Кто пробовал новый APX Tool?', time: '14:23' },
    { id: 2, user: 'CyberDev', text: 'Да, отличная штука! Работает быстрее v2.0', time: '14:25' },
    { id: 3, user: 'Glitch404', text: 'А где можно скачать плагины?', time: '14:27' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const apps: App[] = [
    {
      id: 1,
      name: 'NeuroCoder Pro',
      category: 'Development',
      description: 'Кодирование с ИИ-помощником для максимальной производительности',
      version: '3.2.1',
      downloads: 15420,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'CyberShield',
      category: 'Security',
      description: 'Защита системы от киберугроз в режиме реального времени',
      version: '2.5.0',
      downloads: 28950,
      rating: 4.9,
    },
    {
      id: 3,
      name: 'QuantumSync',
      category: 'Productivity',
      description: 'Синхронизация файлов с квантовым шифрованием',
      version: '1.8.3',
      downloads: 9340,
      rating: 4.6,
    },
    {
      id: 4,
      name: 'HoloDesigner',
      category: 'Design',
      description: '3D-моделирование и голографический дизайн-редактор',
      version: '4.1.0',
      downloads: 12780,
      rating: 4.7,
    },
    {
      id: 5,
      name: 'DataMiner X',
      category: 'Analytics',
      description: 'Анализ больших данных с машинным обучением',
      version: '2.9.1',
      downloads: 18650,
      rating: 4.9,
    },
    {
      id: 6,
      name: 'VirtualHub',
      category: 'Communication',
      description: 'Виртуальное рабочее пространство для команд',
      version: '3.0.2',
      downloads: 22100,
      rating: 4.5,
    },
  ];

  const news = [
    {
      id: 1,
      title: 'Обновление платформы v5.0',
      date: '27 окт 2025',
      content: 'Новый интерфейс, улучшенная производительность и 50+ новых функций',
    },
    {
      id: 2,
      title: 'NeuroCoder Pro получил награду',
      date: '25 окт 2025',
      content: 'Лучшее приложение для разработки по версии CyberTech Awards 2025',
    },
    {
      id: 3,
      title: 'Запуск программы для разработчиков',
      date: '20 окт 2025',
      content: 'Создавайте свои приложения и зарабатывайте на платформе',
    },
  ];

  const faqs = [
    {
      question: 'Как установить приложение?',
      answer: 'Нажмите на кнопку "Скачать", запустите установщик и следуйте инструкциям.',
    },
    {
      question: 'Нужна ли лицензия?',
      answer: 'Базовые версии бесплатны. Premium-функции доступны по подписке.',
    },
    {
      question: 'Как связаться с поддержкой?',
      answer: 'Напишите в чат, отправьте email на support@cyberhub.dev или позвоните +7 (800) 555-0199',
    },
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

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold glitch neon-text-cyan">CYBER_HUB</h1>
            <nav className="flex gap-4">
              <Button
                variant={activeSection === 'catalog' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('catalog')}
                className="neon-glow"
              >
                <Icon name="Grid3x3" className="mr-2 h-4 w-4" />
                Каталог
              </Button>
              <Button
                variant={activeSection === 'news' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('news')}
                className="neon-glow"
              >
                <Icon name="Newspaper" className="mr-2 h-4 w-4" />
                Новости
              </Button>
              <Button
                variant={activeSection === 'support' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('support')}
                className="neon-glow"
              >
                <Icon name="HelpCircle" className="mr-2 h-4 w-4" />
                Поддержка
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {activeSection === 'catalog' && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4 neon-text-magenta">Каталог приложений</h2>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-card">
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="dev">Development</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="design">Design</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {apps.map((app) => (
                        <Card
                          key={app.id}
                          className="p-4 bg-card border-primary/20 hover:border-primary transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-bold text-lg neon-text-cyan">{app.name}</h3>
                              <Badge variant="outline" className="mt-1 border-secondary text-secondary">
                                {app.category}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Star" className="h-4 w-4 fill-accent text-accent" />
                              <span className="text-sm font-medium">{app.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{app.description}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <span>v{app.version}</span>
                            <span className="flex items-center gap-1">
                              <Icon name="Download" className="h-3 w-3" />
                              {app.downloads.toLocaleString()}
                            </span>
                          </div>
                          <Button className="w-full bg-primary hover:bg-primary/80 neon-glow">
                            <Icon name="Download" className="mr-2 h-4 w-4" />
                            Скачать
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="dev" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {apps
                        .filter((app) => app.category === 'Development')
                        .map((app) => (
                          <Card
                            key={app.id}
                            className="p-4 bg-card border-primary/20 hover:border-primary transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-bold text-lg neon-text-cyan">{app.name}</h3>
                                <Badge variant="outline" className="mt-1 border-secondary text-secondary">
                                  {app.category}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Star" className="h-4 w-4 fill-accent text-accent" />
                                <span className="text-sm font-medium">{app.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{app.description}</p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                              <span>v{app.version}</span>
                              <span className="flex items-center gap-1">
                                <Icon name="Download" className="h-3 w-3" />
                                {app.downloads.toLocaleString()}
                              </span>
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/80 neon-glow">
                              <Icon name="Download" className="mr-2 h-4 w-4" />
                              Скачать
                            </Button>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="security" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {apps
                        .filter((app) => app.category === 'Security')
                        .map((app) => (
                          <Card
                            key={app.id}
                            className="p-4 bg-card border-primary/20 hover:border-primary transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-bold text-lg neon-text-cyan">{app.name}</h3>
                                <Badge variant="outline" className="mt-1 border-secondary text-secondary">
                                  {app.category}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Star" className="h-4 w-4 fill-accent text-accent" />
                                <span className="text-sm font-medium">{app.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{app.description}</p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                              <span>v{app.version}</span>
                              <span className="flex items-center gap-1">
                                <Icon name="Download" className="h-3 w-3" />
                                {app.downloads.toLocaleString()}
                              </span>
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/80 neon-glow">
                              <Icon name="Download" className="mr-2 h-4 w-4" />
                              Скачать
                            </Button>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="design" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {apps
                        .filter((app) => app.category === 'Design')
                        .map((app) => (
                          <Card
                            key={app.id}
                            className="p-4 bg-card border-primary/20 hover:border-primary transition-all hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="font-bold text-lg neon-text-cyan">{app.name}</h3>
                                <Badge variant="outline" className="mt-1 border-secondary text-secondary">
                                  {app.category}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Star" className="h-4 w-4 fill-accent text-accent" />
                                <span className="text-sm font-medium">{app.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{app.description}</p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                              <span>v{app.version}</span>
                              <span className="flex items-center gap-1">
                                <Icon name="Download" className="h-3 w-3" />
                                {app.downloads.toLocaleString()}
                              </span>
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/80 neon-glow">
                              <Icon name="Download" className="mr-2 h-4 w-4" />
                              Скачать
                            </Button>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}

          {activeSection === 'news' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 neon-text-magenta">Новости и обновления</h2>
              <div className="space-y-4">
                {news.map((item) => (
                  <Card
                    key={item.id}
                    className="p-6 bg-card border-primary/20 hover:border-primary transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-xl neon-text-cyan">{item.title}</h3>
                      <Badge variant="outline" className="border-accent text-accent">
                        {item.date}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.content}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'support' && (
            <div>
              <h2 className="text-2xl font-bold mb-6 neon-text-magenta">Поддержка и FAQ</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 bg-card border-primary/20">
                    <h3 className="font-bold text-lg mb-2 neon-text-cyan">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card className="p-4 bg-card border-primary/20 sticky top-24 h-[calc(100vh-7rem)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg neon-text-yellow">Чат сообщества</h3>
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
                      <span className="font-semibold text-sm neon-text-cyan">{msg.user}</span>
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
