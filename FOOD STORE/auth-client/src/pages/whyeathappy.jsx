// WhyEatHappy.jsx
import React from 'react';
import Footer from '../Shared/Footer'; // Assuming you have a Footer component
import {Navbar} from '../Shared/Navbar'; // Assuming you have a Navbar component
import logo from "../assets/Logo.svg";

const WhyEatHappy = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="hero text-center mb-8">
          <div className="container">
            <h1 className="text-3xl font-bold">Why Eat Happy?</h1>
            <p className="mb-4">Eat Happy Food Store is dedicated to providing delicious and nutritious food options for our customers. Here are some reasons why you should choose Eat Happy:</p>
            <ul className="list-disc list-inside">
              
            </ul>
          </div>
        </section>

        <section className="company-details text-center mb-8 bg-gray-100 py-8">
  <div className="container mx-auto px-4 bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Company Details</h2>
    <p className="mb-4 text-gray-700">
      Eat Happy Food Store has been serving customers since 2024. We are committed to delivering high-quality food products that meet the needs of our diverse customer base. Our menu includes a wide variety of dishes, ranging from traditional favorites to innovative creations.
    </p>
    <p className="mb-4 text-gray-700">
      Our company values include sustainability, integrity, and customer satisfaction. We believe in transparency and strive to maintain open communication with our customers. Our dedicated team works tirelessly to ensure that every aspect of our operation reflects these values.
    </p>
    <p className="mb-4 text-gray-700">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore, aut id voluptate odio dolorem nobis exercitationem, velit sequi distinctio tenetur aliquid corrupti asperiores placeat perspiciatis ab totam, eligendi in! At Eat Happy, we take pride in our community involvement and support various local initiatives. We are dedicated to making a positive impact on the communities we serve. From sponsoring local events to participating in food donation programs, we are committed to giving back to those in need.
    </p>
  </div>
</section>


      </main>

      
    </div>
  );
}

export default WhyEatHappy;
