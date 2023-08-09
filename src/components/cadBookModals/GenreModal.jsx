import ModalBase from "../global/ModalBase";

const GenreModal = ({ open, isOpen }) => {
  return (
    <ModalBase open={open} isOpen={isOpen} title={'Generos'}>
      <div className="">
        <div className="flex justify-around text-2xl align-middle">
          <input
            type="radio"
            name="genre_id"
            value="1"
            className="w-6 h-6 mt-1"
          />
          <p>1</p>
          <p>Fulaninho</p>
        </div>
      </div>
    </ModalBase>
  );
};

export default GenreModal