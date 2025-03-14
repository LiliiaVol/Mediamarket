import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          texts: {
            h1: "Lorem ipsum",
            textMain:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in\n" +
              "            tincidunt magna. Quisque vitae elementum ex, non fringilla enim.\n" +
              "            Morbi quis eros et orci rhoncus consectetur. Nunc quis porttitor\n" +
              "            orci. Mauris nec elementum ante. Vivamus tincidunt, ipsum eu varius\n" +
              "            consequat, purus ligula tincidunt ipsum, in porta orci nisl at\n" +
              "            ipsum. Aenean vitae nulla non enim mattis finibus tempor ac nisi.\n" +
              "            Etiam non tempor erat. Aliquam malesuada risus non lectus congue,\n" +
              "            sed pellentesque dolor pretium. Integer a purus justo. Quisque risus\n" +
              "            tortor, congue at risus eget, congue pretium sem. Pellentesque\n" +
              "            fermentum libero tellus, vitae ullamcorper sem venenatis eget.\n" +
              "            Integer rhoncus nisi quis ligula eleifend molestie. Morbi felis\n" +
              "            velit, lacinia ut maximus pellentesque, rhoncus sit amet arcu. Sed\n" +
              "            scelerisque imperdiet massa eu ultrices. Suspendisse potenti. Proin\n" +
              "            eleifend nunc ac enim suscipit tincidunt. Nunc velit mauris,\n" +
              "            sagittis ac fermentum a, semper a nisl. Mauris aliquet porta elit ut\n" +
              "            congue. Vestibulum sed massa vitae quam sollicitudin porttitor non\n" +
              "            sed massa. Integer at nisl eget lorem placerat dapibus. Nullam vel\n" +
              "            viverra quam. Fusce enim nulla, lacinia id pretium ac, aliquam quis\n" +
              "            lacus. Nullam at lorem pulvinar, sollicitudin metus vitae,\n" +
              "            sollicitudin velit. Etiam hendrerit mauris non ligula sodales, sed\n" +
              "            rhoncus risus ullamcorper. Curabitur vitae ante convallis.",
          },
          language: {
            switchToUkr: "Солов'їною",
          },
          form: {
            name: "Name",
            placeholderName: "John",
            surname: "Surname",
            placeholderSurname: "Doe",
            phone: "Phone",
            email: "Email",
            submit: "Submit",
          },
          navbar: {
            contactUs: "Contact us",
            about: "About",
            dogs: "Dogs",
          },
        },
      },
      uk: {
        translation: {
          texts: {
            h1: "Життя сповнене можливостей",
            textMain:
              "Життя сповнене можливостей та викликів. Кожен день приносить щось нове, і важливо бути готовим до змін. Рішучість та наполегливість допомагають долати труднощі. Впевненість у власних силах відкриває двері до нових горизонтів.  \n" +
              "\n" +
              "Коли людина прагне досягти успіху, вона стикається з перешкодами. Однак справжня сила полягає у вмінні їх подолати. Терпіння та витримка – ключові складові будь-якої перемоги. Якщо прагнути досконалості, кожен крок наближатиме до мети.  \n" +
              "\n" +
              "Рух уперед – це постійний процес. Варто цінувати кожен досвід, адже він робить нас сильнішими. Нові знання розширюють горизонти, відкриваючи нові перспективи. Саме так народжуються великі ідеї та досягаються значні звершення.  \n" +
              "\n" +
              "Зрештою, важливо не лише досягати результатів, а й насолоджуватися шляхом до них. Кожна мить має свою цінність, а кожен крок – значення. Впевненість, наполегливість і відкритість до нового допомагають будувати успішне майбутнє.",
          },
          language: {
            switchToUkr: "English",
          },
          form: {
            name: "Імʼя",
            placeholderName: "Петро",
            surname: "Прізвище",
            placeholderSurname: "Мельник",
            phone: "Телефон",
            email: "Пошта",
            submit: "Підтвердити",
          },
          navbar: {
            contactUs: "Напиши нам",
            about: "Про нас",
            dogs: "Собачки",
          },
        },
      },
    },
  });

export default i18n;
