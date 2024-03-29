import { TrashIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderTrashIcon;
  if (handleDelete) {
    renderTrashIcon = (
      <TrashIcon
        onClick={() => handleDelete(id)}
        className="h-5 w-5 text-black cursor-pointer"
      ></TrashIcon>
    );
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title.substring(0, 30)}</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-md font-medium">${price}</p>
        {renderTrashIcon}
      </div>
    </div>
  );
};

export default OrderCard;
