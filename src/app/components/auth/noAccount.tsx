import { useState } from "react";
import Login from "./login";
import Register from "./register";

export function NoAccount() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="flex justify-center h-screen">
      <div className="bg-light-gray p-4 my-auto mt-4 rounded-lg">
        <div className="">
          {
            showLogin ? 
              <div>
                <div className="text-xl">
                  Bienvenido, por favor iniciar sesión
                </div>
                <Login />
                <div className="text-sm cursor-pointer flex justify-center mt-2" onClick={() => setShowLogin(false)}>¿No tienes una cuenta? Registrate</div>
              </div>
            : <div>
                <div className="text-xl">
                  Bienvenido, por favor registrate
                </div>
                <Register />
                <div className="text-sm cursor-pointer flex justify-center mt-2" onClick={() => setShowLogin(true)}>¿Ya tienes una cuenta? Inicia sesión</div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}
