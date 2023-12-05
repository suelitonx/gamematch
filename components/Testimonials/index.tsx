import { Testimonial } from "@/types/testimonial";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/user.png",
    star: 3,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/user.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/user.png",
    star: 2,
  },
];

const Testimonials = async ({ idjogo }: { idjogo: string }) => {
  //testimonialData[0].designation = idjogo;
  
  const linkAPI = `https://www.sueliton.live/api/collections/avaliacaogm/records?filter=(idjogo=${idjogo})`

  const response = await fetch(linkAPI);

  if(response.status === 200)
  {
    const ratings = await response.json();
    console.log(ratings)
  }
  else
  {
    console.log("ERRO")
  }

  return (


        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

      
  );
};

export default Testimonials;
