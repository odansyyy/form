import { useNavigate } from "react-router-dom";

function Create() {
  const Login = useNavigate ()
  return (

    //CREATE ACCOUNT-REGISTERED

    <div>
      <div className="container m-4 ml-5">
        <div className="outline outline-offset-2 outline-2 w-[800px] p-2">
          <h2 className="font-bold pl-2">Create Account-Register</h2>
          <div className="flex justify-center m-2 outline outline-offset-4 outline-1">
            <div className="outline outline-offset-2 outline-1 mr-2  w-1/2 bg-blue-700">
              <p className="text-right mb-1">Your Name</p>
              <p className="text-right mb-1">E-mail ID</p>
              <p className="text-right">Alternative E-mail ID</p>
              <br className="mb-4"></br>



              <p className="text-right mb-1">Your Phone</p>
              <p className="text-right mb-1">Mobile Phone</p>
              <p className="text-right mb-6">Your Portal Address</p>
              <br></br>


              <p className="text-right mb-1">Country</p>
              <p className="text-right mb-1">Password</p>
              <p className="text-right">Re-Enter Password</p>
              <br></br>
              <br></br>

            </div>
            <div className="outline outline-offset-2 outline-1 w-full">
              <div>
                <input type="text" className="outline outline-1 mb-1" placeholder="nama anda" />
              </div>
              <div>
                <input type="text" className="outline outline-1 mb-1" placeholder="alamat email anda"/>
              </div>
              <div>
                <input type="text" className="outline outline-1" placeholder="alternative email anda"/>
              </div>
              <p class="-tracking-2 font-bold">Country code ................... City code ....................... Phone number</p>
              <div>
                <input type="text" className="outline outline-1 mb-1" placeholder="negara anda"/>
                <input type="text" className="outline outline-1 mb-1 ml-2 w-1/3" placeholder="kota anda"/>
                <input type="text" className="outline outline-1 mb-1 ml-2 w-1/4" placeholder="nomer anda"/>
              </div>
              <div>
                <input type="text" className="outline outline-1 mb-1" placeholder="mobile anda"/>
              </div>
              <div>
                <textarea type="text" className="outline outline-1 p-2 w-1/3" placeholder="alamat lengkap anda"/>
              </div>
              <div className="mt-2 mb-2">
                <label htmlFor="selectOne" className="block text-sm font-medium text-gray-700"></label>
                <select
                  id="selectOne"
                  name="selectOne"
                  className="font-bold block w-1/1 mt-1 p-1/2 border border-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="option "> ------- select one -------</option>
                  <option value="option1">Indonesia</option>
                  <option value="option2">Amerika</option>
                  <option value="option3">Cina</option>
                </select>
              </div>
              <div>
                <input type="text" className="outline outline-1 mb-1" placeholder="password anda" />
              </div>
              <div>
                <input type="text" className="outline outline-1 mb-1" placeholder="re enter password"/>
              </div>
              <div></div>
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-1 mb-1">I accept the <u className='text-blue-700'>Terms Of Use</u></p>
              </div>
              <div>
                <button type="submit" onClick={() => Login('/')}  className="outline outline-1 bg-gray-300 hover:bg-gray-400 px-2 ">
                  Continue&gt;&gt;
                </button>
                <button className="outline outline-1 ml-2 bg-gray-300 hover:bg-gray-400 px-2" type="reset">
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

export default Create;