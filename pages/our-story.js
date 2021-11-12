import Image from "next/image";
import { useRef } from "react";

import PageLayout from "components/PageLayout";
import styles from "styles/OurStory.module.css";

const OurStory = () => {
  const proposalVideoRef = useRef();

  return (
    <PageLayout title="Our Story">
      <div className={styles.main}>
        <section className={styles.proposalShort}>
          <video width="100%" height="100%" autoPlay muted loop playsInline>
            <source src="/videos/proposal-vid-short.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={`${styles.title} text-center`}>
            <h1 className="display-1">Kelub</h1>
            <h1 className="display-1">&</h1>
            <h1 className="display-1">Victoria</h1>
            <h2 className="display-3">Our Story</h2>
          </div>
          <button
            className={`${styles.proposalRefer} btn btn-light`}
            onClick={() =>
              proposalVideoRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            See Proposal Video!
          </button>
        </section>

        <section className={`${styles.story} container-fluid py-3 px-4`}>
          <div className="row">
            <div className="col-lg-6 container-img">
              <h2 className="display-5 text-center">
                More Than a Coincidence!
              </h2>
              <hr />
              <div className={styles.image}>
                <Image
                  src="/imgs/our-story-2.jpg"
                  layout="fill"
                  alt="Kelub and Victoria's first date"
                  objectFit="cover"
                  objectPosition="40%"
                />
              </div>
              <div className={styles.blurb}>
                <p>
                  So I can honestly say that the way I met Kelub was not by
                  coincidence, God knew exactly what he was doing. My dad
                  starting pastoring his church in Ottawa (which tbh I wasn’t
                  pleased about in the beginning). The first week we were there
                  we didn’t say anything to each other, I actually thought he
                  was my brother’s age (because of his baby face😅).
                </p>
                <p>
                  The second week we went back they were doing a Bible study in
                  the morning and I was sitting in the bench across from him. He
                  looked over at me and mouthed to me asking whether I had a
                  lesson booklet. I didn’t understand what he was saying and I
                  guess he interpreted it as “let’s share” haha. So he got up
                  from where he was sitting and came and sat beside me.
                  Throughout the lesson we were cracking jokes and in my head I
                  was surprised that he had a similar sense of humour as me.
                </p>
                <p>
                  Fast forward to after church, they were having a meeting that
                  we weren’t apart of. He looked over at me and asked if I
                  wanted to go for a ride. **Disclaimer: to this day I still
                  question my judgment with my response because I really had no
                  clue who this guy was (beyond our couple of jokes in the
                  morning) but I said yes**🤦🏾‍♀️. That would be the first of many
                  car rides we took together. He showed me around Ottawa and
                  when we got back, he asked for my number “in case we needed to
                  keep in touch now that I’d be attending his church more often”
                  (slick 😉).
                </p>
                <p>
                  We ended up texting after the car ride and everyday after
                  that…..And the rest is history. Before we knew it we became
                  best friends and I could talk to him about anything and
                  everything. He laughed at my jokes, put up with my ice
                  crunching (if you know you know lol) and made everything we
                  did together an adventure! It’s crazy to believe that we went
                  from a car ride, to making huge life decisions together but I
                  honestly could not picture doing life with anyone else! ❤️
                </p>
              </div>
            </div>
            <div className="col-lg-6 container-img">
              <h2 className="display-5 text-center">A Blessing in Disguise!</h2>
              <hr />
              <div className={styles.image}>
                <Image
                  src="/imgs/our-story-1.jpg"
                  layout="fill"
                  alt="K surprising V with tickets to see Wicked"
                  objectFit="cover"
                  objectPosition="20%"
                />
              </div>
              <div className={styles.blurb}>
                <p>
                  I remember overhearing my parents on a Saturday in April a few
                  years ago talking about how Pastor George and his family were
                  coming to our church to oversee operations and didn’t really
                  think anything of it at the time. In fact, the first week they
                  came, I don’t think we even spoke to each other but it’s funny
                  how God orchestrates your life in ways you can’t even imagine!
                </p>
                <p>
                  They came back a second week and I figured I should talk to
                  her since they’d be coming to our church regularly — to make
                  her feel welcome and such. During the teaching lesson I looked
                  over and noticed she seemed a bit out of sorts so I asked if
                  she wanted to share my book (she claims she didn’t hear this
                  but she replied yes so…). Anyway, if you know me, you know I
                  like to crack jokes and I think I threw around some lame
                  church ones and she ended up laughing and we continued
                  exchanging ones throughout the whole lesson until Sis. George
                  had to turn around and give us the look 👀 .
                </p>
                <p>
                  That same day, Pastor George had scheduled a meeting we
                  weren’t part of and normally I would drive home but Victoria
                  enjoyed talking to me so much that she asked me to stay and I
                  obliged. I figured if I was going to stay, we might as well do
                  something and so I took her to see the Byward Market. Driving
                  back to church I made a left turn and didn’t see a woman
                  crossing and Victoria pipes up, “SO YOU GONE KILL HER EH?” 😂
                  which was funny because the whole day she was so reserved and
                  if you know Victoria that’s not her at all. At the time I was
                  just so shocked I couldn’t say anything but funny enough this
                  was one of the things I ended up loving most about her.
                </p>
                <p>
                  Fast forward to present and I’m so glad to have met Victoria,
                  she’s my best friend, my biggest supporter and rock. I don’t
                  think it’s a coincidence that the most growth in my life has
                  come during our time spent together. I can’t imagine doing
                  anything without her, from watching tv shows, baking and
                  attending basketball games - everything is an adventure! I’m
                  excited for what’s come ahead and the shenanigans we’ll be
                  getting ourselves into!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.proposalMain} ref={proposalVideoRef}>
          <iframe
            id="ytplayer"
            type="text/html"
            height="90%"
            src="https://www.youtube.com/embed/RKJfktJWXtU?autoplay=0"
            frameBorder="0"
          ></iframe>
        </section>
      </div>
    </PageLayout>
  );
};

export default OurStory;
