import { withBase } from "../utils/paths";

export const brands = [
  {
    name: "Lada",
    image: withBase("/assets/logos/lada.png"),
  },
  {
    name: "Toyota",
    image: withBase("/assets/logos/toyota-logo.png"),
  },
  {
    name: "BMW",
    image: withBase("/assets/logos/bmw-logo.png"),
  },
  {
    name: "Mazda",
    image: withBase("/assets/logos/mazda-logo.png"),
  },
  {
    name: "Kia",
    image: withBase("/assets/logos/kia-logo.png"),
  },
  {
    name: "Hyundai",
    image: withBase("/assets/logos/hyundai-logo.png"),
  },
  {
    name: "Volkswagen",
    image: withBase("/assets/logos/volkswagen-logo.png"),
  },
  {
    name: "Mercedes-Benz",
    image: withBase("/assets/logos/mercedes-benz-logo.png"),
  },
  {
    name: "Chevrolet",
    image: withBase("/assets/logos/chevrolet-logo.png"),
  },
  {
    name: "Ford",
    image: withBase("/assets/logos/ford-logo.png"),
  },
  {
    name: "Honda",
    image: withBase("/assets/logos/honda-logo.png"),
  },
  {
    name: "Nissan",
    image: withBase("/assets/logos/nissan-logo.png"),
  },
];
export const categories = [
  {
    name: "Тормозные колодки",
    image: withBase("/assets/categories/brake-pads.webp"),
  },
  {
    name: "Запчасти для ТО",
    image: withBase("/assets/categories/maintenance-parts.webp"),
  },
  {
    name: "Тормозные диски",
    image: withBase("/assets/categories/brake-discs.webp"),
  },
  {
    name: "Подвеска",
    image: withBase("/assets/categories/suspension.webp"),
  },
  {
    name: "Рулевое управление",
    image: withBase("/assets/categories/steering.webp"),
  },
  {
    name: "Двигатель",
    image: withBase("/assets/categories/engine.webp"),
  },
  {
    name: "Электрика",
    image: withBase("/assets/categories/electrics.webp"),
  },
  {
    name: "Кузовные",
    image: withBase("/assets/categories/body-parts.webp"),
  },
];
export const benefits = [
  {
    title: "Ищем по каталогам поставщиков",
    description:
      "Проверяем доступные предложения в разных каталогах, чтобы найти подходящую деталь.",
    icon: withBase("/assets/icons/search.svg"),
  },
  {
    title: "Сравниваем цены",
    description:
      "Сопоставляем доступные варианты по стоимости и времени получения, чтобы вы могли выбрать подходящий.",
    icon: null,
  },
  {
    title: "Проверяем совместимость по VIN",
    description:
      "Уточняем данные автомобиля и проверяем, подходит ли запчасть, прежде чем согласовать заказ.",
    icon: withBase("/assets/icons/check-circle.svg"),
  },
];
export const steps = [
  {
    title: "Расскажите, какая запчасть нужна",
    description:
      "Позвоните или напишите в MAX. Сообщите, какая деталь нужна, и пришлите VIN автомобиля.",
  },
  {
    title: "Подберём и сравним варианты",
    description:
      "Проверим, подходит ли деталь к вашему автомобилю. Сравним цены и сроки у поставщиков, поможем выбрать.",
  },
  {
    title: "Подтвердите заказ",
    description:
      "Сообщим цену и срок поставки. Закажем деталь после вашего подтверждения.",
  },
  {
    title: "Оплата",
    description:
      "Расскажем, как и когда оплатить заказ. Когда деталь придёт, её можно забрать в нашем пункте самовывоза. При заказе от 1000 ₽ доставим бесплатно по Воронежу.",
  },
];
