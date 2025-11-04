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
        {[...Array(12)].map((_, i) => (
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
              <circle cx="30" cy="15" r="8" fill="#9B8B7E" opacity="0.5"/>
              <circle cx="15" cy="30" r="8" fill="#9B8B7E" opacity="0.5"/>
              <circle cx="45" cy="30" r="8" fill="#9B8B7E" opacity="0.5"/>
              <circle cx="30" cy="45" r="8" fill="#9B8B7E" opacity="0.5"/>
              <circle cx="30" cy="30" r="6" fill="#7A1F3D" opacity="0.4"/>
            </svg>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl mx-auto">
          <div className="space-y-24 py-12">
            
            <section className="text-center space-y-12 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-script text-[#7A1F3D]">
                  Вероника & Руслан
                </h1>
                <div className="flex items-center justify-center gap-8 text-lg font-serif italic text-muted-foreground">
                  <span className="tracking-wider">22</span>
                  <div className="w-12 h-px bg-[#7A1F3D]/30"></div>
                  <span className="tracking-wider">08</span>
                  <div className="w-12 h-px bg-[#7A1F3D]/30"></div>
                  <span className="tracking-wider">2026</span>
                </div>
              </div>
              
              <p className="text-xl font-serif italic text-muted-foreground leading-relaxed max-w-md mx-auto">
                Сейчас самое важное в нашей жизни, проходит очень важное событие —<br/>
                наша свадьба!<br/>
                Мы верим и надеемся, что этот день станет красивым началом<br/>
                нашей семейной истории
              </p>

              <div className="text-4xl font-script text-[#7A1F3D] opacity-70">
                I love you
              </div>
            </section>

            <section className="text-center space-y-8 animate-fade-in-up">
              <h2 className="text-5xl font-script text-[#7A1F3D]">
                Утомишься с нами через...
              </h2>
              
              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto px-4">
                {[
                  { value: countdown.days, label: 'дни' },
                  { value: countdown.hours, label: 'часы' },
                  { value: countdown.minutes, label: 'минуты' },
                  { value: countdown.seconds, label: 'секунды' }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="bg-[#7A1F3D] text-[#F5F1E8] rounded-2xl p-6 shadow-lg">
                      <div className="text-5xl font-bold font-serif">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="text-sm font-serif italic text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center space-y-10 animate-fade-in-up">
              <h2 className="text-5xl font-script text-[#7A1F3D]">
                Наш день
              </h2>
              
              <div className="relative max-w-md mx-auto px-8">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#7A1F3D]/20 transform -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  {[
                    { time: '12:00', title: 'Сбор гостей', icon: 'Users' },
                    { time: '14:30', title: 'Церемония', icon: 'Heart' },
                    { time: '17:00', title: 'Начало банкета', icon: 'Music' }
                  ].map((event, i) => (
                    <div key={i} className="relative">
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#7A1F3D] border-4 border-[#F5F1E8] z-10"></div>
                      
                      <div className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <div className="text-3xl font-script text-[#7A1F3D] mb-2">{event.time}</div>
                          <div className="text-lg font-serif italic text-muted-foreground">{event.title}</div>
                        </div>
                        <div className="w-12"></div>
                        <div className="flex-1"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="text-center space-y-10 animate-fade-in-up">
              <h2 className="text-5xl font-script text-[#7A1F3D]">
                Дресс — код
              </h2>
              
              <p className="text-base font-serif italic text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Нам будет приятно, если вы поддержите стилистику нашего<br/>
                торжества и выберете в качестве преобладающего цвета<br/>
                вашего наряда нашу цветовую гамму
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto px-4">
                <Card className="bg-white/70 backdrop-blur-sm border-[#7A1F3D]/20 shadow-lg p-8">
                  <div className="space-y-6">
                    <div className="text-2xl font-script text-[#7A1F3D]">Для женщин</div>
                    <p className="text-sm font-serif italic text-muted-foreground">
                      Пастельные оттенки:<br/>
                      бежевый, кремовый, персиковый,<br/>
                      пудровый, лавандовый
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                      {['#F5E6D3', '#FFE5D9', '#FFC9B9', '#E8C5D6', '#D4B5D4'].map((color, i) => (
                        <div 
                          key={i}
                          className="w-12 h-12 rounded-full shadow-md border-2 border-white"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-[#7A1F3D]/20 shadow-lg p-8">
                  <div className="space-y-6">
                    <div className="text-2xl font-script text-[#7A1F3D]">Для мужчин</div>
                    <p className="text-sm font-serif italic text-muted-foreground">
                      Классические цвета:<br/>
                      черный, белый, темно-синий,<br/>
                      оливковый
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                      {['#000000', '#FFFFFF', '#1B263B', '#5F7161'].map((color, i) => (
                        <div 
                          key={i}
                          className="w-12 h-12 rounded-full shadow-md border-2 border-gray-200"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="text-center space-y-8 animate-fade-in-up">
              <h2 className="text-5xl font-script text-[#7A1F3D]">
                Ждем Вас
              </h2>
              
              <Card className="bg-[#7A1F3D] text-white border-none shadow-2xl p-10 mx-4">
                <div className="space-y-6">
                  <div className="text-3xl font-script">
                    Панорамное кафе<br/>Верталетка
                  </div>
                  <div className="w-16 h-px bg-white/40 mx-auto"></div>
                  <p className="text-sm font-serif italic opacity-90 leading-relaxed">
                    Приходите не сильно рано и мокрыми!<br/>
                    Просто не забудьте прийти вовремя,<br/>
                    и радость никуда не денется от нас!
                  </p>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="bg-white text-[#7A1F3D] hover:bg-white/90 border-none font-serif italic"
                      onClick={() => window.open('https://maps.google.com', '_blank')}
                    >
                      Посмотреть на карте
                    </Button>
                  </div>
                </div>
              </Card>
            </section>

            <section className="text-center space-y-8 animate-fade-in-up">
              <h2 className="text-5xl font-script text-[#7A1F3D]">
                Подтверждение
              </h2>
              
              <Card className="bg-white/70 backdrop-blur-sm border-[#7A1F3D]/20 shadow-lg p-8 mx-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="text-sm font-serif italic text-muted-foreground">Ваше имя</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent focus-visible:ring-0 font-serif italic border-[#7A1F3D]/30"
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
                              formData.attending === option ? 'border-[#7A1F3D]' : 'border-muted'
                            }`}
                          >
                            {formData.attending === option && (
                              <div className="w-2.5 h-2.5 rounded-full bg-[#7A1F3D]"></div>
                            )}
                          </div>
                          <span className="text-sm font-serif italic">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-serif italic text-muted-foreground">
                      Количество гостей (включая Вас)
                    </Label>
                    <Input
                      type="number"
                      min="1"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 bg-transparent focus-visible:ring-0 font-serif italic border-[#7A1F3D]/30"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#7A1F3D] hover:bg-[#7A1F3D]/90 text-white font-serif italic"
                  >
                    Отправить
                  </Button>
                </form>
              </Card>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
