import Image from "next/image";

const Main = () => {
  return (
    <main className="flex justify-center flex-auto">
      <div className="w-full max-w-[1120px] flex flex-col items-center justify-around gap-[30px] px-[10px] py-[20px]">
        <MainHero />
        <MainFeatures />
      </div>
    </main>
  );
};

const MainHero = () => {
  return (
    <div className="flex flex-col gap-[24px] items-center justify-center">
      <h1 className="text-[length:var(--headline-font-size)] font-bold text-center">
        Organisez vos prompts IA <br /> <span>rapidement, efficacement.</span>
      </h1>
      <p className="text-[length:var(--subheadline-font-size)] text-center hidden md:block">
        Une application simple pour gérer et retrouver <br />
        facilement vos prompts IA.
      </p>
      <p className="text-lg text-center md:hidden">
        Gérez et retrouvez <br />facilement <br /> vos prompts IA
      </p>
      <button className="py-[10px] px-[15px] text-[length:var(--body-font-size)] text-[color:rgb(var(--secondary-color))] bg-[rgb(var(--blue-color))] rounded-[10px] cursor-pointer transition-all duration-300 hover:bg-[rgba(var(--blue-color),0.8)]">Essayer PrimePrompts</button>
    </div>
  )
}

const MainFeatures = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[16px]">
      <div className="flex flex-col p-[20px] gap-[20px] rounded-[10px] text-[rgb(var(--secondary-color))] bg-[rgb(var(--red-color))]">
        <Image src="/add.svg" alt="Add" width={50} height={50} />
        <h3 className="text-[length:var(--subheadline-font-size)] font-bold">Ajout de Prompts</h3>
        <p className="text-[length:var(--body-font-size)]">Ajoutez de nouveaux prompts à votre <br /> collection en quelques clics.</p>
      </div>
      <div className="flex flex-col p-[20px] gap-[20px] rounded-[10px] text-[rgb(var(--secondary-color))] bg-[rgb(var(--yellow-color))]">
        <Image src="/sort.svg" alt="Sort" width={50} height={50} />
        <h3 className="text-[length:var(--subheadline-font-size)] font-bold">Classer par Catégorie</h3>
        <p className="text-[length:var(--body-font-size)]">Organisez les prompts en différentes <br /> catégories pour une gestion facile.</p>
      </div>
      <div className="flex flex-col p-[20px] gap-[20px] rounded-[10px] text-[rgb(var(--secondary-color))] bg-[rgb(var(--green-color))]">
        <Image src="/manage.svg" alt="Manage" width={50} height={50} />
        <h3 className="text-[length:var(--subheadline-font-size)] font-bold">Gérer les Prompts</h3>
        <p className="text-[length:var(--body-font-size)]">Recherchez des prompts spécifiques, <br /> modifiez ou supprimez-les.</p>
      </div>
    </div>
  )
}

export default Main;
