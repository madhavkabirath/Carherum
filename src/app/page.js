"use client"
import { NextUIProvider } from "@nextui-org/react";
import HomeTopBanner from "@/components/HomeTopBanner";
import MostSearchedPage from "./MostSearch/page";
import RecommendPage from "./Recommend/page";
import ElectricPage from "./Electric/page"
import Brand from "@/components/Brand";
const Home = () => {
  return (
    <NextUIProvider>
    <div>
      <HomeTopBanner />

      

      {/* <div className="container mx-auto  color-white-600">
        <h1 className="text-3xl text-black font-bold ">Most Search Cars</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card
            title="Car 1"
            description="This is the description for Card 1."
            image="https://images10.gaadi.com/usedcar_image/3791534/original/processed_img2963577__used_car_2963577_1706222607.jpg?imwidth=320"
          />
          <Card
            title="Car 2"
            description="This is the description for Card 2."
            image="https://images10.gaadi.com/usedcar_image/3791930/original/5c7355e9-6bf8-421a-8f2d-ff788e93000a__43.jpg?imwidth=320"
          />
          <Card
            title="Car 3"
            description="This is the description for Card 3."
            image="https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg"
          />
          <Card
            title="Car 4"
            description="This is the description for Card 4."
            image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
          />
          <Card
            title="Car 2"
            description="This is the description for Card 2."
            image="https://images10.gaadi.com/usedcar_image/3791534/original/processed_img2963577__used_car_2963577_1706222607.jpg?imwidth=320"
          />
          <Card
            title="Car 3"
            description="This is the description for Card 3."
            image="https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg"
          />
          <Card
            title="Car 4"
            description="This is the description for Card 4."
            image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
          />
          <Card
            title="Car 1"
            description="This is the description for Card 1."
            image="https://images10.gaadi.com/usedcar_image/3791930/original/5c7355e9-6bf8-421a-8f2d-ff788e93000a__43.jpg?imwidth=320"
          />
        </div>
      </div> */}
      <MostSearchedPage />
      <RecommendPage />
      <ElectricPage />
      <Brand />
      
    </div>
     </NextUIProvider>
  );
};

export default Home;


