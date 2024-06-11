import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
  Welcome to our store, a sanctuary where every purchase echoes with the promise of hope and compassion. At the heart of our mission lies a deep-seated commitment to making the world a better place, one act of kindness at a time. We believe in the power of collective effort and the profound impact it can have on the lives of those in need.
</p>

<p className="lead text-center">
  In the spirit of this belief, we are proud to announce that all our profits will be donated to support humanitarian efforts in Palestine. This decision is not just a charitable gesture, but a heartfelt commitment to stand in solidarity with the Palestinian people who endure immense challenges every day.
</p>

<p className="lead text-center">
  Palestine is a land of rich history and culture, yet its people face extraordinary adversities. Families are often torn apart, and children grow up amidst uncertainty and conflict. In these dire circumstances, basic necessities like food, medical care, and education become luxuries many cannot afford. It is in these dark times that our shared humanity must shine the brightest.
</p>

<p className="lead text-center">
  Every item you purchase from our store is a beacon of hope. Each sale contributes directly to providing essential aid to those who need it most. From delivering vital medical supplies and food packages to ensuring access to clean water and safe shelter, your support will bring tangible relief and comfort to countless lives.
</p>

<p className="lead text-center">
  We are driven by the stories of resilience and the unwavering spirit of the Palestinian people. Their strength and courage in the face of adversity inspire us to do more, to be better. By shopping with us, you become a part of this extraordinary journey of compassion. Together, we can offer more than just support; we can offer a lifeline, a glimmer of hope for a brighter tomorrow.
</p>

<p className="lead text-center">
  Our pledge is more than a financial contribution. It is a testament to the power of empathy and the belief that every individual can make a difference. We are committed to transparency and accountability, ensuring that every dollar donated reaches those who need it the most.
</p>

<p className="lead text-center">
  Join us in this noble cause. Let your purchases be a testament to your compassion and a symbol of solidarity with the people of Palestine. Together, we can weave a tapestry of hope, where every thread represents a life touched, a spirit uplifted, and a community strengthened.
</p>

<p className="lead text-center">
  Thank you for being a part of our mission. Your support not only sustains our store but also breathes life into our commitment to helping those who face unimaginable hardships. With every purchase, you are not just buying a product; you are making a profound impact on the world.
</p>

<p className="lead text-center">
  In unity and hope
</p>


        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage