export const isValidEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export const isValidPhone = (v: string) =>
  /^[+\d][\d\s\-().]{6,19}$/.test(v.trim());

export const isEmpty = (v: string) => v.trim().length === 0;

export const isTooShort = (v: string, min: number) => v.trim().length < min;

/** Returns an error string or "" if valid */
export function validateField(
  name: string,
  value: string,
  required = true
): string {
  if (required && isEmpty(value)) return "This field is required.";

  switch (name) {
    case "email":
      if (!isEmpty(value) && !isValidEmail(value))
        return "Enter a valid email address.";
      break;
    case "phone":
      if (!isEmpty(value) && !isValidPhone(value))
        return "Enter a valid phone number.";
      break;
    case "name":
      if (!isEmpty(value) && isTooShort(value, 2))
        return "Name must be at least 2 characters.";
      break;
    case "message":
      if (!isEmpty(value) && isTooShort(value, 20))
        return "Please provide at least 20 characters.";
      break;
  }
  return "";
}

/** Returns border class based on touched/error state */
export function fieldBorder(touched: boolean, error: string, value: string): string {
  if (!touched) return "border-white/10";
  if (error) return "border-red-500";
  if (value.trim()) return "border-emerald-500/50";
  return "border-white/10";
}
