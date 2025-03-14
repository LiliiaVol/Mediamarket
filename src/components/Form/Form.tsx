import "./Form.scss";
import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault(); // Забороняємо перезавантаження сторінки
  //
  //   try {
  //     const response = await fetch("server.php", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: new URLSearchParams(formData).toString(),
  //     });
  //
  //     if (response.ok) {
  //       alert("Дані надіслано успішно!");
  //       setFormData({ name: "", surname: "", phone: "", email: "" }); // Очищаємо форму
  //     } else {
  //       alert("Помилка при надсиланні даних.");
  //     }
  //   } catch (error) {
  //     console.error("Помилка:", error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Забороняємо перезавантаження сторінки

    try {
      const response = await fetch("server.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        alert("Дані надіслано успішно!");
        setFormData({ name: "", surname: "", phone: "", email: "" }); // Очищаємо форму
      } else {
        alert("Помилка при надсиланні даних.");
      }
    } catch (error) {
      console.error("Помилка:", error);
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit} method="post" className="form">
        <label className="form__label">
          Name:
          <input
            placeholder="John"
            required
            className="form__input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="form__label">
          Surname:
          <input
            placeholder="Doe"
            required
            className="form__input"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </label>
        <label className="form__label">
          Phone:
          <input
            placeholder="+380000000000"
            required
            className="form__input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label className="form__label">
          Email:
          <input
            placeholder="email@gmail.com"
            required
            className="form__input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
    </div>
  );
};
