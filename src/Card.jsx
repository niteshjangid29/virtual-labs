import "./Card.css";

function Card({ data }) {
  return (
    <div className="myCard" key={data.id}>
      <img
        src={data.image}
        className="p-[0.5rem] h-[250px] object-contain"
        alt={data.title}
      />
      <h1 className="text-lg lg:text-xl font-medium text-center p-[0.5rem] bg-violet-700 text-white hover:cursor-pointer">
        {data.title}
      </h1>
      {/* <p>{data.description}</p> */}
    </div>
  );
}

export default Card;
