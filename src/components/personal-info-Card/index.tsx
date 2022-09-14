import fotoPerfil from '../../assets/img/Ulisses.png'


export const PersonalInfoCard = () => {
  return (
    <div className="personal-info text-[20px] bg-slate-400  w-auto p-5 my-10 mx-auto flex flex-col flex-wrap justify-center items-center rounded-lg  drop-shadow-2xl">
      <img src={fotoPerfil} alt="Foto de Ulisses" className="personal-info__img w-52 rounded-full mx-auto p-2 border-solid border-2 border-sky-500 drop-shadow-xl grayscale hover:grayscale-0" />
      <h1 className="personal-info__name mt-4 text-[22px] font-bold text-[#181818] ">Ulisses Silvério</h1>
      <p className="personal-info__user font-semibold text-[#181818]">Odisseu93</p>
      <p className="personal-info__profile font-medium text-[#25316D] text-center">Desenvolvedor Frontend | <br />React.js | <br />Typescript | <br />Analista de Sistemas</p>
      <p className="personal-info__city font-medium mt-4 text-[#F9F9F9]">Divinópolis/MG</p>
      <a className="personal-info__contact--github block shadow-lg rounded-lg font-medium text-[#C3F8FF] hover:text-[blue] hover:shadow-cyan-500/50" target={"_blank"} href="https://github.com/Odisseu93">Github</a>
      <a className="personal-info__contact--linkedin block shadow-lg rounded-lg font-medium text-[#C3F8FF] hover:text-[blue] hover:shadow-cyan-500/50" target={"_blank"} href="https://www.linkedin.com/in/ulisses-silverio/">Linkedin</a>
      <a className="personal-info__contact--youtube block shadow-lg rounded-lg font-medium text-[#C3F8FF] hover:text-[blue] hover:shadow-cyan-500/50" target={"_blank"} href="https://www.youtube.com/UlissesSilverio">YouTube</a>
      <a className="personal-info__contact--email block shadow-lg rounded-lg font-medium text-[#C3F8FF] hover:text-[blue] hover:shadow-cyan-500/50" target={"_blank"} href="mailto:ulissessuporteti01@gmail.com">E-mail</a>
    </div>)
}