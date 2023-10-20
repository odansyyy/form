import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Periksa apakah password telah diisi
    if (name === "password") {
      setIsPasswordValid(!!value);
    }
  };

  const handleContinue = () => {
    if (isPasswordValid) {
      // Password telah diisi, lanjutkan ke halaman berikutnya
      navigate("/create");
    } else {
      // Tampilkan pesan kesalahan jika password belum diisi
      alert("Password harus diisi");
    }
  };

  return (
    <div>
      <div className="container m-4 ml-5">
        <div className="outline outline-offset-2 outline-2 w-[800px] p-2">
          <h2 className="font-bold pl-2">Already registered? Login here</h2>
          <div className="flex justify-center m-2 outline outline-offset-4 outline-1">
            <div className="outline outline-offset-2 outline-1 mr-2  w-1/2 bg-blue-700">
              <p className="text-right">Email</p>
              <p className="text-right">Password</p>
            </div>
            <div className="outline outline-offset-2 outline-1 w-1/2">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="outline outline-1 mb-1"
                  placeholder="masukkan email anda"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="outline outline-1 mb-1"
                  placeholder="masukkan password anda"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-1">Save my Email and Password</p>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleContinue}
                  className={`outline outline-1 ${isPasswordValid ? "" : "cursor-not-allowed"}`}
                >
                  Continue &gt;&gt;
                </button>
                <button className="outline outline-1 ml-2" type="reset">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;