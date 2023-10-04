export default function SearchClientResult() {
  return (
    <section className="text-center bg-backGround rounded-lg p-12">
      <div className="flex flex-col gap-8 text-5">
        <p className="text-font">Cliente encontrado:</p>
        <p className="text-secondary1">000.000.000-00</p>
        <p className="text-primary1 font-bold">Lara Test</p>

        <button className="btn btn-lg btn-primary" type="submit">
          Solicitar
        </button>
      </div>
    </section>
  );
}
