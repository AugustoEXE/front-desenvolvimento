// import demoCover from '../../../public/img/demoCover.jpg'

// TODO: tudo daqui, precisa do desenho

const Book = ({image, bookId}) => {
    return (
        <div className="rounded w-fit flex text-center content-center align-middle flex-col p-3 max-md: ">
            <img
                    className="scale-75 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                    src={`data:image/png;base64, ${image}`}
                    loading="lazy"
                    alt={""}
                />
            <p className="text-center font-bold text-2xl ">
                TITULO DO LIVRO
            </p>
            <p className="italic mt-2">
                autor do livro
            </p>
          <button className="col-start-2 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10">Retirar</button>
            
        </div>
    );
};

export default Book;


