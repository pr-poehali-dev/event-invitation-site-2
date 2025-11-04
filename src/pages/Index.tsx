import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: '', guests: '', message: '' });
  const { toast } = useToast();

  useEffect(() => {
    const weddingDate = new Date('2026-08-22T12:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за подтверждение!",
      description: "Мы с нетерпением ждем встречи с вами ❤️",
    });
    setFormData({ name: '', guests: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-background via-secondary to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl animate-float">❤️</div>
          <div className="absolute bottom-20 right-20 text-7xl animate-float delay-1000">💍</div>
          <div className="absolute top-1/3 right-10 text-6xl animate-float delay-500">✨</div>
        </div>
        
        <div className="text-center z-10 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-light mb-6 text-primary">
            <span className="font-script">Вероника</span>
          </h1>
          <div className="text-5xl md:text-6xl mb-6 text-accent animate-scale-in">❤️</div>
          <h1 className="text-7xl md:text-9xl font-light mb-12 text-primary">
            <span className="font-script">Руслан</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-4">
            Приглашают вас разделить с ними
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-primary">
            22 августа 2026
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-primary">
            До нашего торжества осталось
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Дней', value: countdown.days },
              { label: 'Часов', value: countdown.hours },
              { label: 'Минут', value: countdown.minutes },
              { label: 'Секунд', value: countdown.seconds }
            ].map((item, index) => (
              <Card key={index} className="p-8 bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-6xl md:text-7xl font-bold text-accent mb-2 font-script">
                  {item.value}
                </div>
                <div className="text-lg text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-light mb-12 text-center text-primary">
            Тайминг дня
          </h2>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
            {[
              { time: '12:00', title: 'Сбор гостей', description: 'Встречаемся в панорамном кафе Верталетка' },
              { time: '14:30', title: 'Церемония', description: 'Торжественная часть и поздравления' },
              { time: '17:00', title: 'Банкет', description: 'Праздничный ужин и танцы до утра' }
            ].map((event, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className="flex items-center mb-4">
                  <div className="bg-accent text-secondary w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold z-10 border-4 border-background shadow-lg ml-0 md:ml-auto md:mr-auto">
                    <Icon name="Heart" size={28} className="text-white" />
                  </div>
                </div>
                <Card className="ml-24 md:ml-0 md:w-5/12 md:absolute md:top-0 p-6 bg-white border-2 border-primary/20 shadow-md hover:shadow-lg transition-all hover:scale-105"
                  style={{ [index % 2 === 0 ? 'left' : 'right']: index % 2 === 0 ? '0' : '0' }}>
                  <div className="text-4xl font-script text-accent mb-2">{event.time}</div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-primary">
            Дресс-код
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Будем рады видеть вас в нарядах, соответствующих нашей цветовой гамме
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white border-2 border-primary/20 shadow-lg">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">Для женщин</h3>
              <p className="text-lg text-muted-foreground mb-6">Пастельные оттенки</p>
              <div className="flex justify-center gap-3">
                {['#FFE4E1', '#E6E6FA', '#F0E68C', '#FFE4CC', '#E0F2F7'].map((color, i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-primary/30 shadow-md"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </Card>
            
            <Card className="p-8 bg-white border-2 border-primary/20 shadow-lg">
              <div className="text-4xl mb-4">🤵</div>
              <h3 className="text-3xl font-semibold mb-4 text-primary">Для мужчин</h3>
              <p className="text-lg text-muted-foreground mb-6">Классические оттенки</p>
              <div className="flex justify-center gap-3">
                {['#000000', '#FFFFFF', '#1E3A8A', '#556B2F'].map((color, i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-primary/30 shadow-md"
                    style={{ backgroundColor: color, border: color === '#FFFFFF' ? '2px solid #ccc' : '' }}
                  ></div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-center text-primary">
            Место проведения
          </h2>
          <p className="text-center mb-12 text-2xl font-script text-accent">
            Панорамное кафе Верталетка
          </p>
          
          <Card className="p-8 bg-white border-2 border-primary/20 shadow-lg mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="MapPin" size={32} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Адрес</h3>
                <p className="text-muted-foreground">Панорамное кафе Верталетка</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="Clock" size={32} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Время</h3>
                <p className="text-muted-foreground">Сбор гостей в 12:00</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-center text-primary">
            Подтверждение присутствия
          </h2>
          <p className="text-center mb-12 text-lg text-muted-foreground">
            Пожалуйста, подтвердите свое присутствие до 1 августа 2026
          </p>
          
          <Card className="p-8 bg-white border-2 border-primary/20 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg mb-2">Ваше имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Введите ваше имя"
                  required
                  className="border-2 border-primary/20 focus:border-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="guests" className="text-lg mb-2">Количество гостей</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  placeholder="Сколько человек придет"
                  required
                  className="border-2 border-primary/20 focus:border-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-lg mb-2">Пожелания (необязательно)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Особые пожелания или ограничения в питании"
                  className="border-2 border-primary/20 focus:border-accent min-h-24"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Подтвердить присутствие
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-primary text-secondary text-center">
        <p className="text-3xl font-script mb-4">С любовью, Вероника и Руслан ❤️</p>
        <p className="text-lg opacity-80">22.08.2026</p>
      </footer>
    </div>
  );
};

export default Index;
