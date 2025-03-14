import "./Form.scss";
import { useState } from "react";
import { t } from "i18next";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
    <div className="form__container" id="form">
      <form onSubmit={handleSubmit} method="post" className="form">
        <label className="form__label">
          {t("form.name")}:
          <input
            placeholder={t("form.placeholderName")}
            required
            className="form__input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="form__label">
          {t("form.surname")}:
          <input
            placeholder={t("form.placeholderSurname")}
            required
            className="form__input"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </label>
        <label className="form__label">
          {t("form.phone")}:
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
          {t("form.email")}:
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
          {t("form.submit")}
        </button>
      </form>
    </div>
  );
};
