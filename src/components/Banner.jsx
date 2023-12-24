import banner from "../components/banner.jpg";

const Banner = () => {
  return (
    <div>
      <img
        style={{ height: "90vh", width: "100%", objectFit: "cover" }}
        src={banner}
        alt=""
      />
    </div>
  );
};

export default Banner;