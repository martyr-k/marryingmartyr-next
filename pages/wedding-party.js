import { Container } from "react-bootstrap";
import Image from "next/image";

import weddingParty from "lib/wedding-party";
import WeddingPartyCard from "components/WeddingPartyCard";
import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import styles from "styles/WeddingParty.module.css";

const WeddingParty = () => {
  const { isLoading } = useAuthenticatedClient("/rsvp");

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PageLayout title="Wedding Party">
      <div className={`${styles.main} py-4`}>
        <Container fluid>
          <h1 className="display-2 text-center">Our Wedding Party</h1>
          <h5 className={`${styles.introduction} text-center mt-4 mb-5`}>
            Click on an image to learn more about the people who will be walking
            down the aisle with us!
          </h5>
          <div className="row">
            <div className="col-lg-6 pe-lg-4 bride mb-5 mb-xxl-0">
              <div className={styles.sectionImage}>
                <Image
                  src="/imgs/bride.jpg"
                  layout="fill"
                  alt="Kelub and Victoria"
                  objectFit="cover"
                  objectPosition="top"
                  priority
                />
              </div>
              <h2 className="text-center mb-5">Bride&apos;s Squad</h2>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...weddingParty[0]}
                    position="left"
                    objectPosition="center 20%"
                    priority
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...weddingParty[1]}
                    position="right"
                    objectPosition="top"
                    priority
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <WeddingPartyCard
                    {...weddingParty[2]}
                    position="center"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...weddingParty[3]}
                    position="left"
                    objectPosition="top"
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...weddingParty[4]}
                    position="right"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...weddingParty[5]}
                    position="left"
                    objectPosition="top"
                    bottom
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...weddingParty[6]}
                    position="right"
                    objectPosition="top"
                    bottom
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4 groom">
              <div className={styles.sectionImage}>
                <Image
                  src="/imgs/groom.jpg"
                  layout="fill"
                  alt="Kelub and Victoria"
                  objectFit="cover"
                  objectPosition="top"
                  priority
                />
              </div>
              <h2 className="text-center mb-5">Groom&apos;s Boys</h2>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <div>
                    <div className={styles.weddingPartyImage}>
                      <Image
                        src="/imgs/ted.jpg"
                        layout="fill"
                        alt="Ted Nijimbere"
                        objectFit="cover"
                        objectPosition="top"
                        priority
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-start">
                      Ted Nijimbere
                    </h2>
                    <div className="d-none">
                      <p>
                        I met Kelub in my first year of University and he is one
                        of the few people that helped me save my grades from
                        falling into the abyss. From giving me life advices to
                        breaking speed limits together, Kelub is a great friend
                        that I can always count on and I wish him the best in
                        this new adventure.
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div>
                    <div className={`${styles.weddingPartyImage} ms-xxl-auto`}>
                      <Image
                        src="/imgs/braeden.jpg"
                        layout="fill"
                        alt="Braeden Chang"
                        objectFit="cover"
                        objectPosition="center 20%"
                        priority
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-end">
                      Braeden Chang
                    </h2>
                    <div className="d-none">
                      <p>
                        I’ve known Kelub since second year of University & have
                        had several unforgettable experiences with him, from
                        surveying in the pouring rain to “sharing” knowledge
                        during our undergrad studies. Through working with him
                        on various projects and (primarily) through our love for
                        hot deals, fast cars, and dope tech, we’ve made an
                        unbreakable bond throughout the last 7 years.
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <div className="container-person">
                    <div className={`${styles.weddingPartyImage} mx-auto`}>
                      <Image
                        src="/imgs/mohian.jpg"
                        layout="fill"
                        alt="Mohian Rahman"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <h2 className="text-center mt-2">Mohian Rahman</h2>
                    <div className="d-none">
                      <p className="w-75 mx-auto">
                        I met Kelub in the early years of our undergrad through
                        a mutual friend, Braeden. I won’t lie I was intimidated
                        by him at first because he was so big and so
                        intelligent, but he turned out to be a gentle giant. I
                        am grateful for our friendship that has lasted over the
                        years and our admiration for basketball and gadgets,
                        that always sparks interesting conversation. I am so
                        honoured to be part of this special occasion uniting
                        Kelub and Victoria!
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <div>
                    <div className={styles.weddingPartyImage}>
                      <Image
                        src="/imgs/dushawn.jpg"
                        layout="fill"
                        alt="Dushawn Francis"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-start">
                      Dushawn Francis
                    </h2>
                    <div className="d-none">
                      <p>
                        First things first, I wan’t to say CONGRATULATIONS to
                        the Groom and Bride I hope they live a wonderful life
                        together as a great family. I have known Kelub for as
                        long as I can remember. We have had a lot of funny
                        memories together all they way back when I was little
                        child. I remember one time me and my little brother were
                        over at his house, and we were up late very late. Kelub
                        thought it was a great idea to try and scare us. It
                        worked real good. He told us the Freddy Krueger was
                        going to be scratching the windows. And then he started
                        telling us he’s outside waiting for us. Kelub kept
                        playing with the lights and everything. Scarred us for
                        the whole week. That’s just one of many many moments. If
                        I got into everything it would be a book. Anyways, big
                        big congratulations to Kelub and Victoria, I wish you
                        both the best, and I will be there when you guys will
                        need a baby sitter. CONGRATS!!!
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div>
                    <div className={`${styles.weddingPartyImage} ms-xxl-auto`}>
                      <Image
                        src="/imgs/daniel.jpg"
                        layout="fill"
                        alt="Daniel Richmond"
                        objectFit="cover"
                        objectPosition="center 40%"
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-end">
                      Daniel Richmond
                    </h2>
                    <div className="d-none">
                      <p>
                        Hi my name is Daniel one of Kelub&apos;s best friends.
                        Kelub, my brother, and I were always having fun when we
                        were together. There was never a dull moment, but my
                        favorite memory has to be when he stayed over at my
                        house for the summer and a bat managed to find it&apos;s
                        way into my house. We were woken up by the screams of my
                        sister and mom around 1 o&apos;clock and the battle that
                        ensued between us and the bat took almost 5 hours before
                        we won. Needless to say it was hilarious!
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <div className="ms-xxl-5">
                    <div className={styles.weddingPartyImage}>
                      <Image
                        src="/imgs/phil.jpg"
                        layout="fill"
                        alt="Philip George"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-start">
                      Philip George
                    </h2>
                    <div className="d-none">
                      <p>
                        So I was thinking about what story I could use that
                        would be funny, that is also reflective of the kind of
                        relationship I have with Kelub. It feels like I’ve known
                        Kelub forever, so picking one particular memory is a
                        little difficult (It was probably even harder to pick a
                        proper picture for the occasion lol 😭😭) if I were to
                        pick a memory, I guess it would be the first time I went
                        driving with Kelub. Kelub is similar to me and my father
                        in so many ways which is really helpful to this story.
                        It’s like this, driving a car, with my mom or my sister
                        in the passenger seat, can be a hair raising, heart
                        stops beating moment. The two of them are known for
                        common freakouts. So once I was driving and Kelub sat at
                        the front with me, which was a much more pleasant
                        experience than hearing screaming 😭. In any case, He
                        might’ve been too calm because I was driving and
                        switching lanes, and I didn’t even realize someone was
                        in my blind spot. My sister just screamed but Kelub
                        calmly held the wheel and stopped me before I could go
                        over. Since that first day, and the days after, I’ve
                        been a lot more comfortable on the road-thanks Kelub! In
                        any case I love both of you! You know what they say,
                        you’re not losing a sister you’re gaining a brother, so
                        congratulations to both of you. I am also thankful for
                        gaining another real cool family; the way they fit in
                        with us is crazy! 🖤
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="me-xxl-5">
                    <div className={`${styles.weddingPartyImage} ms-xxl-auto`}>
                      <Image
                        src="/imgs/brian.jpg"
                        layout="fill"
                        alt="Brian Richmond"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-end">
                      Brian Richmond
                    </h2>
                    <div className="d-none">
                      <p>
                        I knew Kelub since we were kids! The one story I can
                        never forget is when he stayed with us for a short
                        period of time one summer, and it was hilarious every
                        single day 😂 especially that one morning when a bat, no
                        not the one used for baseball I mean an ACTUAL FLYING
                        BAT got into my moms room and everyone stayed up for
                        hours trying to get rid of it LOL. I’ve never seen him
                        that annoyed and tired before but he was a real one for
                        staying up with us the entire time and now it’s a story
                        we can always look back on and laugh about!!!
                        <br />
                        <br />
                        P.S.
                        <br />
                        <br />
                        We both never really liked taking pictures so I KNOW
                        there isn’t one of us together (we’ll change that on the
                        wedding day tho 😉)
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export async function getStaticProps() {
  return {
    props: { weddingParty },
  };
}

export default WeddingParty;
