const About = () => {
  return (
    <>

      <div className="text-white text-center py-5" style={{ backgroundColor: "#09744dff" }}>
        <h1 className="fw-bold">UrbanBite Tiffin Services</h1>
        <p className="mt-2 fs-5">Fresh. Healthy. Home Delivered.</p>
      </div>

      <div className="container py-5">

        <h2 className="fw-semibold mb-3">About Us</h2>
        <p className="fs-6">
          Welcome to <strong>UrbanBite</strong> — your trusted partner for fresh,
          delicious, home-style tiffin services delivered right to your doorstep.
          We started with a simple idea: <em>“Healthy food should be affordable and accessible.”</em>
        </p>

        <p className="fs-6">
          Every meal is prepared fresh using high-quality ingredients.
          Whether you're a working professional, student, or simply away from home,
          UrbanBite ensures <strong>taste, hygiene, and timely delivery.</strong>
        </p>
         <div className="mt-4">
    <h3 className="fw-bold text-success mb-3">Our Journey & Success</h3>

    <p className="lead">
        When we started UrbanBite, our goal was simple — offer fresh homemade meals,
        delivered on time, at a price that everyone could afford. We began our journey
        with just 20 customers from a single neighborhood, preparing every meal in a
        small home kitchen.
    </p>

    <p>
        Word spread quickly as people started recommending us to friends, colleagues,
        and neighbours. We focused on what mattered the most:
    </p>

    <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item">✔ Healthy ingredients & hygienic cooking</li>
        <li className="list-group-item">✔ Consistent taste & weekly menu rotation</li>
        <li className="list-group-item">✔ Reliable delivery & friendly customer support</li>
        <li className="list-group-item">✔ Special discounts for students & working professionals</li>
    </ul>

    <p>
        Within a few months, UrbanBite grew from <strong>20 customers to 500+</strong>
        subscribers. Today, our tiffins reach corporate offices, colleges, hostels and
        residential homes across the city. We proudly serve more than
        <strong> 2000 meals every week</strong>.
    </p>

    <h4 className="fw-bold text-success mt-4 mb-3">Awards & Recognition</h4>

    <p>
        Our dedication to quality service has been recognized across the food and
        startup community. Over the years, we have received:
    </p>

    <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item">🏆 <strong>Best Local Food Startup 2023</strong> – City Business Awards</li>
        <li className="list-group-item">🎖 <strong>Excellence in Hygiene & Safety</strong> – Health Department Certification</li>
        <li className="list-group-item">🥇 <strong>Top Rated Tiffin Service</strong> (4.9/5) – Reviewed by 1,200+ customers</li>
    </ul>

    <p>
        These awards reflect not just our food, but our passion. The smiles we receive
        every day inspire us to work harder, innovate, and continue serving meals made
        with love.
    </p>

    <p className="fw-bold text-center display-6 text-success mt-3">
        UrbanBite — Fresh Food. Happy People.
    </p>
</div>

        <div className="row g-3 my-4">
          <div className="col-md-4">
            <img
              src="https://www.cubeonebiz.com/blog/wp-content/uploads/2023/04/onebiz-How-to-take-your-tiffin-service-business-online.png"
              className="img-fluid rounded shadow"
              style={{ height: "220px", objectFit: "cover", width: "100%" }}
              alt="Tiffin"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7f-NGpLlj_pAKYWeejuC2q-GgV1Fcb-BkQ&s"
              className="img-fluid rounded shadow"
              style={{ height: "220px", objectFit: "cover", width: "100%" }}
              alt="Tiffin"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIoPAla-6Wg2G0Y7EMmjJv7q3-jLyJMUCdQ&s"
              className="img-fluid rounded shadow"
              style={{ height: "220px", objectFit: "cover", width: "100%" }}
              alt="Delivery"
            />
          </div>
        </div>

        <h2 className="fw-semibold mt-4 mb-2">Why Choose Us?</h2>

        <ul className="list-group mb-4">
          <li className="list-group-item">✔ Fresh & Home-style Food</li>
          <li className="list-group-item">✔ Affordable Monthly Plans</li>
          <li className="list-group-item">✔ On-time Delivery</li>
          <li className="list-group-item">✔ Vegetarian & Non-Veg Options</li>
          <li className="list-group-item">✔ Hygienic Cooking & Packaging</li>
        </ul>

        <h2 className="fw-semibold mt-4 mb-2">Our Vision</h2>
        <p className="fs-6">
          We aim to become the most trusted tiffin service provider by
          offering meals that remind you of <strong>home-cooked goodness</strong>.
          Eat healthy, stay healthy — we ensure your busy life never compromises
          on nutrition and taste.
        </p>

      </div>

    </>
  );
};

export default About;
