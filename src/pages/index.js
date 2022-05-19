import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Modal from "../components/Modal/Modal";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Timeline />
        <Projects modal tempData />
        <Technologies />
        <Acomplishments />
        <Modal />
      </Layout>
    </>
  );
};

export default Home;
