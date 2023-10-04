import Button from "../button";

export default function FormSearchClient() {
  return (
    <form className="text-center mb-24">
      <h2 className="text-primary1 text-5">Busque o Cliente</h2>

      <div className="flex justify-center mt-8">
        <input
          className="max-w-[71%] bg-backGround text-font rounded-l-lg text-4 px-8 py-4 focus:outline-none"
          type="text"
          placeholder="000.000.000-00"
          autoComplete="off"
        />

        <button className="btn btn-md btn-primary" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}
