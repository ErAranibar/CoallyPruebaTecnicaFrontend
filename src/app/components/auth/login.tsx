import { loginService } from "@/services/authService";

export default function Login() {
  const handleLoginClick = () => {
    const emailInput = document.querySelector("input[type='email']") as HTMLInputElement;
    const passwordInput = document.querySelector("input[type='password']") as HTMLInputElement;
    if (!emailInput.value) {
      alert("Ingrese un email");
      return;
    }
    if (!passwordInput.value) {
      alert("Ingrese una contraseña");
      return;
    }
    loginService(emailInput.value, passwordInput.value);
  };

  return (
    <div>
      <div className="flex flex-col text-xs md:text-base">
        <input
          type="email"
          placeholder="Email"
          className="bg-light-gray p-2 rounded-md my-2"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="bg-light-gray p-2 rounded-md my-2"
          required
          minLength={8}
        />
        <button onClick={handleLoginClick} className="bg-gray-green text-white p-2 rounded-md">Iniciar Sesión</button>
      </div>
    </div>
  );
}


