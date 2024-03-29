import React from 'react';

const MatHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus pt-20 mx-auto h-[40rem] flex items-center justify-center text-white">
      <div className='max-w-screen-xl'>
        <div className="text-center flex items-center justify-between px-12">
            <div>
            <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Matemática e Educação Financeira
            </h1>
            <p className="text-lg text-white py-8">
            Na Primeira Etapa, temos a apresentação dos temas de Matemática e Educação Financeira contextualizados com as atividades do projeto. Para iniciar a conversa com os estudantes, apresente o conceito de Educação Financeira. Os temas de Matemática previstos para esta etapa são revisão de operações com números racionais, grandezas diretamente proporcionais e porcentagem. Os temas de Educação Financeira são consumo e consumismo e orçamento.
            </p>
            </div>
            <div className="hidden md:block">
                <img src="images/ilustra_piggy.png" alt="Capa" className="px-8 w-[1500px]" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default MatHero;