import CounterOne from "../Common/Counter/CounterOne";
import FooterTwo from "../Common/Footer/FooterTwo";
import HeaderOne from "../Common/Header/HeaderOne";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import About from "../Home-1/About/About";
// import Blog from "../Home-1/Blog/Blog";
import Client from "../Home-1/Client/Client";
import Cta from "../Home-1/Cta/Cta";
import Hero from "../Home-1/Hero/Hero";
import Portfolio from "../Home-1/Portfolio/Portfolio";
import Process from "../Home-1/Process/Process";
import Service from "../Home-1/Service/Service";
// import Team from "../Home-1/Team/Team";
import Testimonial from "../Home-1/Testimonial/Testimonial";
import WhyChoose from "../Home-1/WhyChoose/WhyChoose";

const HomeOne = () => {
  return (
    <Wrapper>
      <div style={{ overflow: "hidden" }}>
        <HeaderOne />
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Service /></section>
        <section id="connect"><Cta /></section>
        <section id="why"><WhyChoose /></section>
        <section id="process"><Process /></section>
        <section id="project"><Portfolio /></section>
        <section id="counter"><CounterOne /></section>
        <section id="testimonials"><Testimonial /></section>
        {/* <section id="team"><Team /></section> */}
        <section id="clients"><Client /></section>
        {/* <section id="blog"><Blog /></section> */}
        <section id="footer"><FooterTwo /></section>
        <ScrollTopButton />
      </div>
    </Wrapper>
  );
};

export default HomeOne;
