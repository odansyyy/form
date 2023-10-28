import { useState } from "react";
function Formulir2() {
  const [nama, setNama] = useState("");
  const [nop, setNop] = useState("");
  const [notp, setNotp] = useState("");
  const [norm, setNorm] = useState("");
  const [kantor, setKantor] = useState("");
  const [unit, setUnit] = useState("");
  const [departemen, setDepartemen] = useState("");
  const [ttl, setTtl] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [pos, setPos] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`
    Nama   : ${nama}
    no p   : ${nop}
    notp   : ${notp}
    norm   : ${norm}
    kantor : ${kantor}
    unit  : ${unit}
    departemen : ${departemen}
    ttl   : ${ttl}
    alamat: ${alamat}
    kota  : ${kota}
    provinsi: ${provinsi}
    pos   : ${pos}
`)}
  return (
    <>
    <div className="menin-h-screen p-20 bg-gradient-to-tr from-green-300 to-yellow-200 flex items-center justify-center">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-center fixed inset-0 z-0"
        >
          <source src="stars.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10">
          {/* Konten Anda akan ditampilkan di atas video */}
          <div className="container max-w-screen-lg mx-auto">
            {/* <iframe class="w-full aspect-video md:aspect-square" src="https://www.youtube.com/..." alt="bg error"> */}
            <div>
              <h1 className="text-center font-bold text-2xl text-black-700">Formulir Pendaftaran Keanggotaan SP-FKPPM</h1>
              <p className="text-black-300 mb-6 text-center">Daftar Anggota </p>
              <form onSubmit={handleSubmit}>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Pengisian Formulir</p>
                    <p className="mb-2">Mohon untuk mengisi sesuai data pribadi anda</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label for="full_name">Nama Lengkap</label>
                        <input value={nama} onChange={(e) => setNama(e.target.value)}type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="isi nama anda" />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">No Pekerja</label>
                        <input value={nop} onChange={(e) => setNop(e.target.value)}type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='isi no pekerja anda' />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">No. Telepon</label>
                        <input value={notp} onChange={(e) => setNotp(e.target.value)}type="text" name="city" id="city" className="h-10 border mt-1  rounded px-4 w-full bg-gray-50" placeholder='isi no telepon anda' />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">No. Rumah</label>
                        <input value={norm} onChange={(e) => setNorm(e.target.value)}type="text" name="city" id="city" className="h-10 border mt-1  rounded px-4 w-full bg-gray-50" placeholder='isi no rumah anda' />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">No. Kantor</label>
                        <input value={kantor} onChange={(e) => setKantor(e.target.value)}type="text" name="city" id="city" className="h-10 border mt-1  rounded px-4 w-full bg-gray-50" placeholder='isi no kantor anda' />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">Unit</label>
                        <input value={unit} onChange={(e) => setUnit(e.target.value)}type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='isi unit anda' />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">Departemen</label>
                        <input value={departemen} onChange={(e) => setDepartemen(e.target.value)}type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='isi departemen anda' />
                      </div>

                      <div className="md:col-span-2">
                        <label for="ttl">Tempat tgl Lahir</label>
                        <input value={ttl} onChange={(e) => setTtl(e.target.value)}type="text" name="ttl" id="ttl" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='isi tempat tgl lahir anda' />
                      </div>


                      <div className="md:col-span-3">
                        <label for="address">Alamat / Jalan</label>
                        <input value={alamat} onChange={(e) => setAlamat(e.target.value)}type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="isi alamat anda" />
                      </div>

                      <div className="md:col-span-2">
                        <label for="kota">kota</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select value={kota} onChange={(e) => setKota(e.target.value)}
                            id="selectOne"
                            name="selectOne"
                            className=" block w-1/1 ml-3 p-1/2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="option "> ------- select one -------</option>
                            <option value="option1">Malang</option>
                            <option value="option2">Surabaya</option>
                            <option value="option3">Batu</option>
                          </select>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label for="prov">provinsi</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <select value={provinsi} onChange={(e) => setProvinsi(e.target.value)}
                            id="selectOne"
                            name="selectOne"
                            className=" block w-1/1 ml-3 p-1/2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="option "> ------- select one -------</option>
                            <option value="option1">Jawa Timur</option>
                            <option value="option2">Jawa Tengah</option>
                            <option value="option3">Jawa Barat</option>
                          </select>
                        </div>
                      </div>

                      <div className="md:col-span-1 mb-3">
                        <label for="kode">kode pos</label>
                        <input value={pos} onChange={(e) => setPos(e.target.value)} type="text" name="text" id="text" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="isi kode pos anda" />
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="photo">Unggah Foto:</label>
                        <input
                          type="file"
                          name="photo"
                          id="photo"
                          accept="image/*"
                          className="w-full p-2 border-spacing-0 bg-gray-50 border mt-1 rounded px-4 focus:outline-none focus:ring focus:border-blue-300"
                        />
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
            {/* </iframe> */}
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Formulir2;