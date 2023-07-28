const HomeLogin = () => (
  <div className="h-screen absolute bottom-0 right-0 w-1/2 bg-zinc-800 flex ">
    <div className="bg-creme w-3/4 h-3/4 mx-auto my-auto rounded-3xl shadow-xl">
      <h2 className="text-6xl text-zinc-300 font-bold text-center mt-10">login</h2>
      <div className="text-center ">
        <form action="">
          <div className="mt-10">
            <label htmlFor="" className="block text-left w-3/4 m-auto text-zinc-400 text-xl">Usuário

</label>
            <input type="text" className="w-3/4 rounded py-2 bg-zinc-300"/>
          </div>
          <div className="mt-10">
            <label htmlFor="" className="block text-left w-3/4 m-auto text-zinc-400 text-xl">Senha:</label>
            <input type="text" className="w-3/4 rounded py-2 bg-zinc-300"/>
          </div>
          <div className="mt-2 text-left w-3/4 m-auto underline text-zinc-400 hover:text-zinc-500">
            <a href="#">Esqueci minha senha</a>
          </div>
          <div className="mt-10">
            <button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white w-4/6 py-2 ">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
const HomeImage = () => (
  <div className="h-screen absolute bg-library bottom-0 left-0 w-1/2 ">
    <div className="backdrop-blur-sm w-full">
      <h1 className="text-8xl text-white font-extrabold text-center mt-8">
        Bem vindo ao melhor sistema de Biblioteca do pais
      </h1>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <HomeLogin />
      <HomeImage />
    </div>
  );
}
