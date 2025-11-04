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
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <Card className="bg-white shadow-2xl overflow-hidden border-none">
          <div className="p-8 md:p-12 space-y-12">
            
            <section className="text-center space-y-6 animate-fade-in">
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                22 августа, 2026 | 12:00
              </div>
              <div className="space-y-2">
                <h1 className="text-6xl md:text-7xl font-serif font-light tracking-wide">
                  Вероника
                </h1>
                <div className="text-4xl font-light">&</div>
                <h1 className="text-6xl md:text-7xl font-serif font-light tracking-wide">
                  Руслан
                </h1>
              </div>
              <div className="pt-4">
                <p className="text-5xl font-script text-accent">I love you</p>
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="space-y-6 animate-fade-in-up">
              <h2 className="text-2xl font-serif font-light text-center tracking-wide">
                ДОРОГИЕ НАШИ<br />ДРУЗЬЯ И РОДНЫЕ!
              </h2>
              <p className="text-sm text-center leading-relaxed text-muted-foreground">
                Это официальное приглашение на нашу свадьбу! А получили Вы его потому, 
                что мы очень хотим видеть вас в этот день рядом с нами!
              </p>
            </section>

            <section className="space-y-6 animate-fade-in-up">
              <h3 className="text-xl font-script text-accent text-center">Август, 2026</h3>
              <div className="bg-secondary/30 p-6 rounded-lg">
                <div className="grid grid-cols-7 gap-2 text-center">
                  <div className="text-xs text-muted-foreground">ПН</div>
                  <div className="text-xs text-muted-foreground">ВТ</div>
                  <div className="text-xs text-muted-foreground">СР</div>
                  <div className="text-xs text-muted-foreground">ЧТ</div>
                  <div className="text-xs text-muted-foreground">ПТ</div>
                  <div className="text-xs text-muted-foreground">СБ</div>
                  <div className="text-xs text-muted-foreground">ВС</div>
                  
                  {[...Array(31)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`text-sm py-1 ${i + 1 === 22 ? 'bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto' : ''}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="space-y-8 animate-fade-in-up">
              <div className="text-center">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  22 АВГУСТА, 2026 | 12:00
                </p>
                <h2 className="text-3xl font-script text-accent mb-8">
                  I love you
                </h2>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-serif mb-4">Место проведения</h3>
                  <p className="text-sm font-light mb-2">Панорамное кафе Верталетка</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    Как добраться
                  </Button>
                </div>

                <div className="border-t border-muted my-8"></div>

                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-center mb-6">ПЛАН ДНЯ</h3>
                  
                  {[
                    { time: '12:00', title: 'Сбор гостей', desc: 'Панорамное кафе Верталетка' },
                    { time: '14:30', title: 'Церемония', desc: 'Торжественная часть' },
                    { time: '17:00', title: 'Банкет', desc: 'Ужин и танцы до утра' }
                  ].map((event, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 text-right">
                        <span className="text-sm font-light">{event.time}</span>
                      </div>
                      <div className="flex-shrink-0">
                        <Icon name="Heart" size={16} className="text-accent mt-1" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="space-y-6 animate-fade-in-up">
              <h2 className="text-xl font-script text-accent text-center">Дресс-код</h2>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-sm mb-4">Для женщин — пастельные оттенки</p>
                  <div className="flex justify-center gap-2">
                    {['#FFE4E1', '#E6E6FA', '#F0E68C', '#FFE4CC'].map((color, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full border border-muted"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm mb-4">Для мужчин — классика</p>
                  <div className="flex justify-center gap-2">
                    {['#000000', '#FFFFFF', '#1E3A8A', '#556B2F'].map((color, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full border border-muted"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="space-y-6 animate-fade-in-up">
              <h2 className="text-xl font-script text-accent text-center">Анкета гостя</h2>
              <p className="text-xs text-center text-muted-foreground">
                Пожалуйста, подтвердите ваше<br />присутствие на нашей свадьбе до
              </p>
              <p className="text-center font-medium">10.06.2025</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-xs uppercase tracking-wider">Ваше имя</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0"
                    required
                  />
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider block mb-3">
                    Я буду присутствовать
                  </Label>
                  <div className="space-y-2">
                    {['Да', 'Нет'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <div 
                          onClick={() => setFormData({ ...formData, attending: option })}
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.attending === option ? 'border-accent' : 'border-muted'
                          }`}
                        >
                          {formData.attending === option && (
                            <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                          )}
                        </div>
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-xs uppercase tracking-wider">Количество гостей</Label>
                  <Input
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white uppercase tracking-wider text-xs py-6"
                >
                  Подтвердить
                </Button>
              </form>
            </section>

            <div className="border-t border-muted my-8"></div>

            <section className="text-center space-y-6 animate-fade-in-up">
              <h2 className="text-xl font-serif">До встречи!</h2>
              <div className="grid grid-cols-4 gap-4 max-w-xs mx-auto">
                {[
                  { value: countdown.days, label: 'дней' },
                  { value: countdown.hours, label: 'часов' },
                  { value: countdown.minutes, label: 'минут' },
                  { value: countdown.seconds, label: 'секунд' }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 mx-auto bg-accent text-white rounded-full flex items-center justify-center mb-2">
                      <Icon name="Heart" size={20} />
                    </div>
                    <div className="text-2xl font-light mb-1">{item.value}</div>
                    <div className="text-xs text-muted-foreground uppercase">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-t border-muted my-8"></div>

            <footer className="text-center space-y-4">
              <p className="text-xs text-muted-foreground">До скорой встречи!<br />С любовью,</p>
              <h3 className="text-4xl font-script text-accent">
                Вероника & Руслан
              </h3>
            </footer>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
