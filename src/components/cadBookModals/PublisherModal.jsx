import ModalBase from "../global/ModalBase";
import { listPublisher } from "../../services/publisher";
import { useGet } from "../../hooks/useGet";
import { useModalValues } from "../../hooks/useModalValues";

const PublishModal = () => {
  const list = useGet(() => listPublisher());
  const { change, name } = useModalValues();

  return (
    <ModalBase>
      {list.map((item, i) => {
        return (
          <div
            key={i}
            className="flex justify-between items-center text-2xl align-middle p-4"
          >
            <input
              type="radio"
              name={name}
              value={[item.id, item.name]}
              className="w-6 h-6 mt-1"
              onChange={change}
            />
            <p>{item.name}</p>
          </div>
        );
      })}
    </ModalBase>
  );
};

export default PublishModal;
