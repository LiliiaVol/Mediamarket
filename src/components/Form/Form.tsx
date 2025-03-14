import "./Form.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Form = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
      case "surname":
        return value.trim().length < 2 ? t("form.errorName") : "";
      case "phone":
        return !/^\+380\d{9}$/.test(value) ? t("form.errorPhone") : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? t("form.errorEmail")
          : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const newErrors = {
      name: validateField("name", formData.name),
      surname: validateField("surname", formData.surname),
      phone: validateField("phone", formData.phone),
      email: validateField("email", formData.email),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    try {
      const response = await fetch("server.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        alert("Дані надіслано успішно!");
        setFormData({ name: "", surname: "", phone: "", email: "" });
        setErrors({ name: "", surname: "", phone: "", email: "" });
        setIsSubmitted(false);
      } else {
        alert("Помилка при надсиланні даних.");
      }
    } catch (error) {
      console.error("Помилка:", error);
    }
  };

  return (
    <div className="form__container" id="form">
      <form onSubmit={handleSubmit} className="form">
        <label className="form__label">
          {t("form.name")}:
          <input
            placeholder={t("form.placeholderName")}
            className={`form__input ${isSubmitted && errors.name ? "invalid" : ""}`}
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
            className={`form__input ${isSubmitted && errors.surname ? "invalid" : ""}`}
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
            className={`form__input ${isSubmitted && errors.phone ? "invalid" : ""}`}
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
            className={`form__input ${isSubmitted && errors.email ? "invalid" : ""}`}
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
