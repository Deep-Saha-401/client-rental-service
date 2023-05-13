import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Kolkata,Mumbai,Pune,Chennai,Delhi,Hyderabad,Bengaluru,Ahmedabad"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
        <div className="content">
                <img src="https://www.transindiatravels.com/wp-content/uploads/victoria-memorial2.jpg"
                  alt=""
                  className="img" />
            <div className=" text">
                <h1>Kolkata</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="content">
                <img src="https://www.fabhotels.com/blog/wp-content/uploads/2018/07/1000x650-126.jpg"
                  alt=""
                  className="img" />
            <div className=" text">
                <h1>Mumbai</h1>
                <h2>{data[1]} properties</h2>

            </div>
        </div>
        <div className="content">
                <img src="https://omyindian.com/wp-content/uploads/2022/03/lal-mahal.jpg"
                  alt=""
                  className="img" />
            <div className=" text">
                <h1>Pune</h1>
                <h2>{data[2]} properties</h2>

            </div>
        </div>
        <div className="content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg"
                  alt=""
                  className="img" />
            <div className=" text">
                <h1>Chennai</h1>
                <h2>{data[3]} properties</h2>

            </div>
        </div>
        <div className="content">
                <img src="https://static2.tripoto.com/media/filter/nl/img/1/SpotDocument/1478499350_1461066745_10991e69ce1ee91aace70ee43146d812.jpg.webp"
                  alt=""
                  className="img" />
            <div className=" text">
                <h1>Delhi</h1>
                <h2>{data[4]} properties</h2>

            </div>
        </div>
        <div className="content">
                <img src="https://static-blog.treebo.com/wp-content/uploads/2018/03/Charminar.jpg"
                  alt=""
                  className="img" />
            <div className=" text">
                <h1>Hyderabad</h1>
                <h2>{data[5]} properties</h2>

            </div>
        </div>
        <div className="content">
                <img src="https://www.mistay.in/travel-blog/content/images/size/w1000/2021/08/Roam-Around-the-Top-7-Historical-Monuments-of-Bangalore-I-MiStay.jpeg"
                  alt=""
                  className="img" />
            <div className=" text">
                <h1>Bengaluru</h1>
                <h2>{data[6]} properties</h2>

            </div>
        </div>
        <div className="content">
                <img src="https://yometro.com/images/places/jama-masjid-ahmedabad.jpg"
                  alt=""
                  className="img" />
            <div className=" text">
                <h1>Ahmedabad</h1>
                <h2>{data[7]} properties</h2>

            </div>
        </div>
         </>
      )}
    </div>
  );
};

export default Featured;
