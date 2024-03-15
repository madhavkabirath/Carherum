const Sidebar = ({ image, description, title }) => {
  return (
    <div className="bg-white shadow-md grid grid-cols-2 gap-2">
      <div className=""> 
        {" "}
        <img src={image} alt={title} className="w-40 h-30   " />
      </div>
      <div className="">
        <h2 className=" text-gray-600 ">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
export default Sidebar;
