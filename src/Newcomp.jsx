const Newcomp = ({ cat }) => {
  const { name, age, breed, location, imageUrl } = cat;
  return (
    <div className="flex justify-center items-center h-screen m-6">
      <div className=" rounded-t-2xl">
        <img
          className="border-2 border-neutral-500 rounded-t-2xl w-80 h-60 object-cover"
          src={imageUrl}
        />
        <div className="border-b-2 border-r-2 border-l-2 border-neutral-500 rounded-b-2xl p-2 text-xl">
          <div className="flex">
            <div className="font-semibold text-neutral-500  w-38">Name</div>
            <div className="">{name}</div>
          </div>
          <div className="flex ">
            <div className="font-semibold text-neutral-500  w-38">Age</div>
            <div>{age}</div>
          </div>
          <div className="flex ">
            <div className=" font-semibold text-neutral-500 w-38">Breed</div>
            <div>{breed}</div>
          </div>
          <div className="flex ">
            <div className="font-semibold text-neutral-500  w-38">Location</div>
            <div>{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newcomp;
