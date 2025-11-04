import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [formData, setFormData] = useState({ name: '', attending: '', guests: '' });
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
      title: "Спасибо!",
      description: "Ваш ответ принят",
    });
    setFormData({ name: '', attending: '', guests: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F1E8] to-[#EDE7DC] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="15" r="8" fill="#8A9A7B" opacity="0.6"/>
              <circle cx="15" cy="30" r="8" fill="#8A9A7B" opacity="0.6"/>
              <circle cx="45" cy="30" r="8" fill="#8A9A7B" opacity="0.6"/>
              <circle cx="30" cy="45" r="8" fill="#8A9A7B" opacity="0.6"/>
              <circle cx="30" cy="30" r="6" fill="#5F7161" opacity="0.8"/>
            </svg>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg mx-auto">
          <div className="space-y-16 py-12">
            
            <section className="text-center space-y-8 animate-fade-in">
              <h1 className="text-7xl md:text-8xl font-serif text-primary italic">
                WEDDING<br/>DAY
              </h1>
              <p className="text-lg font-serif italic text-muted-foreground leading-relaxed">
                Приглашаем Вас разделить<br/>
                с нами праздник, посвящённый<br/>
                дню нашей свадьбы 22.08.2026!
              </p>
              <p className="text-3xl font-script text-accent">all I need is you</p>
            </section>

            <section className="text-center space-y-6 animate-fade-in-up">
              <h2 className="text-5xl font-serif italic text-primary">
                место<br/>проведения
              </h2>
              <p className="text-xl font-serif italic text-muted-foreground">
                Панорамное кафе Верталетка
              </p>
              <div className="my-8">
                <img 
                  src="https://cdn.poehali.dev/files/23d32ef6-bdbf-40f0-ad77-fc54cc40938e.png"
                  alt="Venue"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <p className="text-2xl font-script text-accent">our special day</p>
            </section>

            <section className="text-center space-y-8 animate-fade-in-up">
              <h2 className="text-5xl font-serif italic text-primary">
                дресс-код
              </h2>
              <p className="text-base font-serif italic text-muted-foreground leading-relaxed px-6">
                Нам будет особенно приятно<br/>
                видеть Вас в нарядах цветовой<br/>
                гаммы нашей свадьбы.
              </p>
              
              <div className="flex justify-center gap-3 py-6">
                {['#C8C8C8', '#696969', '#000000', '#5F7161', '#8A9A7B'].map((color, i) => (
                  <div 
                    key={i}
                    className="w-14 h-14 rounded-full shadow-md"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 px-4">
                <img 
                  src="https://cdn.poehali.dev/files/7bf84bf9-00fd-4e6b-81cd-b5fab7b93d5f.png"
                  alt="Dress code example"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://cdn.poehali.dev/files/7bf84bf9-00fd-4e6b-81cd-b5fab7b93d5f.png"
                  alt="Dress code example"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </section>

            <section className="text-center space-y-8 animate-fade-in-up">
              <h2 className="text-5xl font-serif italic text-primary">
                тайминг дня
              </h2>
              
              <div className="space-y-6 px-8">
                {[
                  { time: '12:00', title: 'Сбор гостей', desc: 'Встреча в панорамном кафе' },
                  { time: '14:30', title: 'Церемония', desc: 'Торжественная часть и поздравления' },
                  { time: '17:00', title: 'Банкет', desc: 'Ужин, танцы и веселье' }
                ].map((event, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-3xl font-serif italic text-accent">{event.time}</div>
                    <h3 className="text-xl font-serif italic text-primary">{event.title}</h3>
                    <p className="text-sm font-serif italic text-muted-foreground">{event.desc}</p>
                    {i < 2 && <div className="w-12 h-px bg-accent/30 mx-auto mt-4"></div>}
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center space-y-8 animate-fade-in-up">
              <h2 className="text-5xl font-serif italic text-primary">
                подтвердите<br/>присутствие
              </h2>
              
              <Card className="bg-white/60 backdrop-blur-sm border-none shadow-lg p-8 mx-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="text-sm font-serif italic text-muted-foreground">Ваше имя</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent focus-visible:ring-0 font-serif italic"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-serif italic text-muted-foreground block mb-3">
                      Я буду присутствовать
                    </Label>
                    <div className="flex gap-6 justify-center">
                      {['Да', 'Нет'].map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <div 
                            onClick={() => setFormData({ ...formData, attending: option })}
                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              formData.attending === option ? 'border-accent' : 'border-muted'
                            }`}
                          >
                            {formData.attending === option && (
                              <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                            )}
                          </div>
                          <span className="text-sm font-serif italic">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-serif italic text-muted-foreground">Количество гостей</Label>
                    <Input
                      type="number"
                      min="1"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent focus-visible:ring-0 font-serif italic"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white text-sm py-6 font-serif italic"
                  >
                    Подтвердить
                  </Button>
                </form>
              </Card>
            </section>

            <section className="text-center space-y-6 animate-fade-in-up px-4">
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: countdown.days, label: 'дней' },
                  { value: countdown.hours, label: 'часов' },
                  { value: countdown.minutes, label: 'минут' },
                  { value: countdown.seconds, label: 'секунд' }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-serif italic text-accent mb-2">{item.value}</div>
                    <div className="text-xs font-serif italic text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-script text-accent mt-8">С любовью,<br/>Вероника & Руслан</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;