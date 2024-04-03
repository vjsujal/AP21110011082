import "./homepage.css";

export default function Homepage() {

  return (
    <div className="homepage">
      <div className="banner">
        <div className="bannerImage">
          <div className="bannerText">
            <h1>Trendy Fashion for All</h1>
            <p>Find the your own styles</p>
          </div>
          <div className="bannerSearch">
            <i class="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search for your dream home"
              className="inputSearch"
            />
            <button className="ButtonSearch"> Search </button>
          </div>
        </div>
      </div>
    </div>
  );
}
