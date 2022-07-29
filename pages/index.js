import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../assets/mobile/image-hero.jpg";
import HeroDesktop from "../assets/desktop/image-hero.jpg";
import LeaderMobile from "../assets/mobile/image-interactive.jpg";
import LeaderDesktop from "../assets/desktop/image-interactive.jpg";
import DeepEarthMobile from "../assets/mobile/image-deep-earth.jpg";
import DeepEarthDesktop from "../assets/desktop/image-deep-earth.jpg";
import NightArcade from "../assets/mobile/image-night-arcade.jpg";
import NightArcadeDesktop from "../assets/desktop/image-night-arcade.jpg";
import SoccerTeam from "../assets/mobile/image-soccer-team.jpg";
import SoccerTeamDesktop from "../assets/desktop/image-soccer-team.jpg";
import TheGrid from "../assets/mobile/image-grid.jpg";
import TheGridDesktop from "../assets/desktop/image-grid.jpg";
import Above from "../assets/mobile/image-from-above.jpg";
import AboveDesktop from "../assets/desktop/image-from-above.jpg";
import Borealis from "../assets/mobile/image-pocket-borealis.jpg";
import BorealisDesktop from "../assets/desktop/image-pocket-borealis.jpg";
import Curiosity from "../assets/mobile/image-curiosity.jpg";
import CuriosityDesktop from "../assets/desktop/image-curiosity.jpg";
import FishEye from "../assets/mobile/image-fisheye.jpg";
import FishEyeDesktop from "../assets/desktop/image-fisheye.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>loopstudios-landing-page-main</title>
        <meta name="description" content="Landing page for loostudio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.hero_img_mobile}>
            <Image
              src={Hero}
              layout="responsive"
              width={750}
              height={1300}
              priority
              alt="hero image"
            />
          </div>
          <div className={styles.hero_img_desktop}>
            <Image
              className={styles.test}
              src={HeroDesktop}
              layout="responsive"
              width={1440}
              height={650}
              priority
              alt="hero image"
            />
          </div>

          <h1 className={styles.hero_title}>
            IMMERSIVE EXPERIENCES THAT DELIVER
          </h1>
        </div>
        <div className={styles.container}>
          <section className={styles.leader}>
            <div className={styles.leader_img_mobile}>
              <Image
                className={styles.leader_img}
                src={LeaderMobile}
                layout="responsive"
                width={654}
                height={448}
                alt="leader image"
              />
            </div>
            <div className={styles.leader_img_desktop}>
              <Image
                className={styles.leader_img}
                src={LeaderDesktop}
                layout="responsive"
                width={654}
                height={448}
                alt="leader image"
              />
            </div>

            <div className={styles.leader_details}>
              <div className={styles.leader_title}>
                The leader in interactive VR
              </div>
              <p className={styles.leader_text}>
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </section>
          <section className={styles.creation}>
            <div className={styles.creation_title}>OUR CREATIONS</div>
            <div className={styles.creation_pictures}>
              <div className={styles.creation_item}>
                <div className={styles.DeepEarthMobile}>
                  <Image
                    src={DeepEarthMobile}
                    layout="responsive"
                    width={654}
                    height={240}
                    alt="deep earth image"
                  />
                </div>
                <div className={styles.DeepEarthDesktop}>
                  <Image
                    className={styles.creation_img}
                    src={DeepEarthDesktop}
                    layout="responsive"
                    width={256}
                    height={450}
                    alt="deep earth image"
                  />
                </div>

                <div className={styles.creation_item_tag}>
                  <div>DEEP</div>
                  <div>EARTH</div>
                </div>
              </div>
              <div className={styles.creation_item}>
                <div className={styles.NightArcadeMobile}>
                  <Image
                    src={NightArcade}
                    layout="responsive"
                    width={654}
                    height={240}
                    alt="night arcade image"
                  />
                </div>
                <div className={styles.NightArcadeDesktop}>
                  <Image
                    src={NightArcadeDesktop}
                    layout="responsive"
                    width={256}
                    height={450}
                    alt="night arcade image"
                  />
                </div>
                <div className={styles.creation_item_tag}>
                  <div>NIGHT</div> <div>ARCADE</div>
                </div>
              </div>
              <div className={styles.creation_item}>
                <div className={styles.SoccerTeamMobile}>
                  <Image
                    src={SoccerTeam}
                    layout="responsive"
                    width={654}
                    height={240}
                    alt="soccer team image"
                  />
                </div>
                <div className={styles.SoccerTeamDesktop}>
                  <Image
                    src={SoccerTeamDesktop}
                    layout="responsive"
                    width={256}
                    height={450}
                    alt="soccer team image"
                  />
                </div>

                <div className={styles.creation_item_tag}>
                  <div>SOCCER</div>
                  <div>TEAM VR</div>
                </div>
              </div>
              <div className={styles.creation_item}>
                <div className={styles.TheGridMobile}>
                  <Image
                    src={TheGrid}
                    layout="responsive"
                    width={654}
                    height={240}
                    alt="the grid image"
                  />
                </div>
                <div className={styles.TheGridDesktop}>
                  <Image
                    src={TheGridDesktop}
                    layout="responsive"
                    width={256}
                    height={450}
                    alt="the grid image"
                  />
                </div>

                <div className={styles.creation_item_tag}>
                  <div>THE</div>
                  <div>GRID</div>
                </div>
              </div>
              <div className={styles.creation_item}>
                <div className={styles.AboveMobile}>
                  <Image
                    src={Above}
                    layout="responsive"
                    width={654}
                    height={240}
                    alt="the above image"
                  />
                </div>
                <div className={styles.AboveDesktop}>
                  <Image
                    src={AboveDesktop}
                    layout="responsive"
                    width={256}
                    height={450}
                    alt="the above image"
                  />
                </div>

                <div className={styles.creation_item_tag}>
                  <div>FROM UP</div>
                  <div>ABOVE VR</div>
                </div>
              </div>
              <div className={styles.creation_item}>
                <div className={styles.BorealisMobile}>
                  <Image
                    src={Borealis}
                    layout="responsive"
                    width={654}
                    height={240}
                    alt="borealis image"
                  />
                </div>
                <div className={styles.BorealisDesktop}>
                  <Image
                    src={BorealisDesktop}
                    layout="responsive"
                    width={256}
                    height={450}
                    alt="borealis image"
                  />
                </div>

                <div className={styles.creation_item_tag}>
                  <div>POCKET</div>
                  <div>BOREALIS</div>
                </div>
              </div>
              <div className={styles.creation_item}>
                <div className={styles.CuriosityMobile}>
                  <Image
                    src={Curiosity}
                    layout="responsive"
                    width={654}
                    height={240}
                    alt="curiosity image"
                  />
                </div>
                <div className={styles.CuriosityDesktop}>
                  <Image
                    src={CuriosityDesktop}
                    layout="responsive"
                    width={256}
                    height={450}
                    alt="curiosity image"
                  />
                </div>

                <div className={styles.creation_item_tag}>
                  <div>THE</div>
                  <div>CURIOSITY</div>
                </div>
              </div>
              <div className={styles.creation_item}>
                <div className={styles.FishEyeMobile}>
                  <Image
                    src={FishEye}
                    layout="responsive"
                    width={654}
                    height={240}
                    alt="fish eye image"
                  />
                </div>
                <div className={styles.FishEyeDesktop}>
                  <Image
                    src={FishEyeDesktop}
                    layout="responsive"
                    width={256}
                    height={450}
                    alt="fish eye image"
                  />
                </div>

                <div className={styles.creation_item_tag}>
                  <div>MAKE IT</div>
                  <div>FISHEYE</div>
                </div>
              </div>
            </div>
            <div className={styles.creation_btn}>SEE ALL</div>
          </section>
        </div>
      </main>
    </>
  );
}
