import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleLeadForm = () => {
    alert("Переход на опросник для сбора лидов");
  };

  const services = [
    {
      title: "Премиум сауна",
      description: "Элитная финская сауна из канадского кедра с профессиональной печью",
      price: "от 350 000 ₽",
      features: ["Кедровая отделка", "Печь Harvia", "LED-подсветка", "Система вентиляции"]
    },
    {
      title: "Русская баня",
      description: "Традиционная русская баня с парилкой и моечной из липы",
      price: "от 280 000 ₽", 
      features: ["Липовые полки", "Каменка на дровах", "Купель", "Предбанник"]
    },
    {
      title: "Инфракрасная кабина",
      description: "Современная ИК-кабина для оздоровления и релаксации",
      price: "от 180 000 ₽",
      features: ["Углеродные панели", "Аудиосистема", "Хромотерапия", "Компактный размер"]
    }
  ];

  const testimonials = [
    {
      name: "Александр Михайлов",
      text: "Превосходное качество работы! Сауна стала настоящим украшением дома. Семья в восторге!",
      rating: 5,
      location: "Москва"
    },
    {
      name: "Елена Кравцова", 
      text: "Профессиональный подход на всех этапах. Русская баня получилась именно такой, как мечтали.",
      rating: 5,
      location: "Санкт-Петербург"
    },
    {
      name: "Дмитрий Соколов",
      text: "Отличное соотношение цены и качества. ИК-кабина работает безупречно уже год.",
      rating: 5,
      location: "Екатеринбург"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      <header className="border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Home" className="text-gold" size={32} />
            <h1 className="text-2xl font-montserrat font-bold text-black">ПРЕМИУМ БАНИ</h1>
          </div>
          <Button 
            onClick={handleLeadForm}
            className="bg-gold hover:bg-gold/90 text-black font-medium px-6"
          >
            Получить консультацию
          </Button>
        </div>
      </header>

      <section className="relative py-20 bg-gradient-to-br from-black via-black/95 to-black/90">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/img/4c7abe60-c58c-4d87-baeb-120f549c708a.jpg)' }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6">
              ЭЛИТНЫЕ БАНИ
              <span className="block text-gold">ДЛЯ ВАШЕГО ДОМА</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Создаем премиальные банные комплексы с безупречным качеством 
              и индивидуальным подходом к каждому проекту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleLeadForm}
                className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-3 text-lg"
                size="lg"
              >
                Рассчитать стоимость
              </Button>
              <Button 
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-lg"
                size="lg"
              >
                Посмотреть проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl font-montserrat font-bold text-black mb-4">
              НАШИ УСЛУГИ
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по проектированию и строительству банных комплексов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-gold/20 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-montserrat font-semibold text-black mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-gold mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" className="text-gold mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleLeadForm}
                    className="w-full mt-6 bg-black hover:bg-black/90 text-white"
                  >
                    Заказать расчет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-white mb-4">
              ОТЗЫВЫ КЛИЕНТОВ
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Мнения тех, кто уже наслаждается нашими банными комплексами
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gold/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-montserrat font-semibold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gold to-gold/90">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-montserrat font-bold text-black mb-6">
            ГОТОВЫ НАЧАТЬ ПРОЕКТ?
          </h3>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Ответьте на несколько вопросов, и мы подготовим индивидуальное предложение
          </p>
          <Button 
            onClick={handleLeadForm}
            className="bg-black hover:bg-black/90 text-white font-semibold px-8 py-3 text-lg"
            size="lg"
          >
            Пройти опросник
          </Button>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" className="text-gold" size={24} />
                <span className="text-xl font-montserrat font-bold">ПРЕМИУМ БАНИ</span>
              </div>
              <p className="text-gray-400">
                Создаем банные комплексы премиум класса для частных домов
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  info@premiumbani.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Финские сауны</p>
                <p>Русские бани</p>
                <p>ИК-кабины</p>
                <p>Банные комплексы</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Премиум Бани. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;