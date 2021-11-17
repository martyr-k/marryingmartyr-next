import { Container } from "react-bootstrap";
import Image from "next/image";

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
                  <div>
                    <div className={styles.weddingPartyImage}>
                      <Image
                        src="/imgs/wave.jpg"
                        layout="fill"
                        alt="Waveney Edwards"
                        objectFit="cover"
                        objectPosition="center 20%"
                        priority
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-start">
                      Waveney Edwards
                    </h2>
                    <div className="d-none">
                      <p className="mb-0">
                        So Victoria and I have been best friends since
                        elementary school. We met when her father became the
                        pastor of our church. It has been a long road ever
                        since. We fight like sisters but we also love like
                        twins. My favourite memory of us has to be when we
                        almost burnt down our church. It was during a fasting
                        service (so we shouldn’t have even been eating in the
                        first place 😂) but we were so hungry and we knew there
                        were patties in the kitchen and there was no way we
                        could resist food knowing it was in reach. Now I don’t
                        know how we managed to burn simple patties but it takes
                        each of our half brains to make a full one so that
                        should tell you something. I just remember we were
                        terrified the smoke alarm would go off and everyone
                        would be able to smell our sin 🤣
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div>
                    <div className={`${styles.weddingPartyImage} ms-xxl-auto`}>
                      <Image
                        src="/imgs/bea.jpg"
                        layout="fill"
                        alt="Bea Tongco"
                        objectFit="cover"
                        objectPosition="top"
                        priority
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-end">
                      Bea Tongco
                    </h2>
                    <div className="d-none">
                      <p>
                        Victoria and I first met at the “Vic One: Ryerson
                        Stream” orientation at the University of Toronto - which
                        was made up of other students interested in becoming
                        teachers. I was having a conversation with Victoria’s
                        mom and that’s when we realized we lived in Ajax. I
                        ended up exchanging phone numbers with Victoria but
                        didn’t talk to her until our first day of University. On
                        our first day of Vic One, Victoria and I ran into each
                        other on the Go Train. We sat together and instantly
                        became friends. We spent the next 5 years talking about
                        our lives in detail, catching Go Trains, taking subway
                        rides to classes that were not that far, failing exams,
                        procrastinating on assignments and staying up VERY late
                        to finish those assignments. We became best friends and
                        “twinions” (twin minions) for life! Our friendship is so
                        special to me because we shared important moments in our
                        lives - from graduating to decorating her first
                        classroom. Victoria is one of my best friends and I
                        couldn’t feel more blessed to be a part of her and
                        Kelub’s special day. 😊
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <div>
                    <div className={`${styles.weddingPartyImage} mx-auto`}>
                      <Image
                        src="/imgs/kayla.jpg"
                        layout="fill"
                        alt="Kayla McLean"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <h2 className="text-center mt-2">Kayla McLean</h2>
                    <div className="d-none">
                      <p className="w-75 mx-auto">
                        My Vick ❤️ Where do I even begin? From the moment The
                        George’s arrived at Bathurst (if you know, you know) and
                        we sat together on them hard wooden church benches (you
                        in the middle, always), we’ve been inseparable.
                        TWENTY-TWO YEARS (😱)-and a whole lotta sleepovers,
                        laughter, nonsensical videos (which shall remain in the
                        vault 👀) and heart-to-hearts- later, you’re still my
                        soul seester and best friend—a literal gift to all who
                        know you. I can’t wait to see you step into this new
                        role as wife, with the beautiful grace and light you
                        bring with you always. To you (and my new
                        brother-in-law, Kelub 😉), all my love, God’s greatest
                        blessings and all the happiness in the world. ❤️
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
                        src="/imgs/marissa.jpg"
                        layout="fill"
                        alt="Marissa Blagrove"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-start">
                      Marissa Blagrove
                    </h2>
                    <div className="d-none">
                      <p>
                        Ahhh, reminiscing on the good old days that are still
                        growing!! Victoria, the Zoey to my Chloe! My fellow
                        wedding-lover! As kids we were adventure buddies, hence
                        our little nicknames. We first met at church but our
                        friendship grew after becoming neighbours! As children
                        we went to summer camps, made friendship bracelets, had
                        a club called KRMV, sleepovers and even hid in closets
                        pretending we were in a car LOL (our imaginations are
                        wild, which I’ve always loved about us!) In our youth
                        years, we went to high school together, performed in
                        musicals, sang in church choir and let’s say...girls
                        just wanna have fun!! As adults, we’ve continued to grow
                        as women in our personal careers, while enjoying walks,
                        parties, devotions and retreats. Now I could on and on
                        into full detail of our friendship and the adventures
                        we’ve been through but it’d turn into a novel! Overall,
                        throughout the years, we have experienced many new
                        things together and have learned from each, through the
                        good and bad, side by side. Two extraverts with a
                        passion for children. Two crazy girls who love to be the
                        life of the party. But above all, two sisters in Christ
                        who always got each other&apos;s back. Today, we are
                        soul sisters for life! Now here we are, at the start of
                        another new chapter! Cheers to the moment we’ve spoken
                        about our ENTIRE lives!!
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div>
                    <div className={`${styles.weddingPartyImage} ms-xxl-auto`}>
                      <Image
                        src="/imgs/nykea.jpg"
                        layout="fill"
                        alt="Nykea Lyons"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-end">
                      Nykea Lyons
                    </h2>
                    <div className="d-none">
                      <p>
                        We met when I was in 6th grade and you were in 7th. At
                        that time at Dr. Roberta Bondar we had no idea how
                        special we would become to each other. Fast forward to
                        the end of High School and we meet again in the House of
                        God and I am very grateful for that. Juliet you are a
                        ray of sunshine who gets my jokes. We can be drunk on
                        nothing but laughter. I love your energy, love for God
                        and prayers. My prayer is that Kelub will continue to
                        give you a reason to laugh and fill your days with love.
                        <br />
                        <br />
                        With much love and prayer,
                        <br />
                        <br />
                        Romie aka Nykea
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
                        src="/imgs/kira.jpg"
                        layout="fill"
                        alt="Yakira Kerr"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-start">
                      Yakira Kerr
                    </h2>
                    <div className="d-none">
                      <p>
                        Hey I&apos;m Yakira but my friends call me Kira. I have
                        known Victoria for (I can&apos;t even count the years)
                        all I know is one sunny day she appeared in my life and
                        the rest is history. Our relationship is a wild,
                        adventurous and spontaneous type of friendship. She is
                        truly a one of a kind type of friend! Being around her I
                        can honestly say is never a dull moment! Her laugh is
                        contagious and her jokes are hilarious. She is a dime
                        +99 and having her in my life has been such a blessing.
                        I could go on but I&apos;ll leave you with a quote.
                        <br />
                        <br />
                        &quot;The most beautiful discovery true friends make is
                        that they can grow separately without growing
                        apart.&quot;
                        <br />
                        <br />
                        -Elisabeth Foley
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="me-xxl-5">
                    <div className={`${styles.weddingPartyImage} ms-xxl-auto`}>
                      <Image
                        src="/imgs/leah.jpg"
                        layout="fill"
                        alt="Leah Marty"
                        objectFit="cover"
                        objectPosition="top"
                      />
                    </div>
                    <h2 className="mt-2 text-center text-xxl-end">
                      Leah Marty
                    </h2>
                    <div className="d-none">
                      <p>
                        I first met Victoria at church in Ottawa when she came
                        to visit for the first time and that day I had no clue
                        what was coming in store for the rest of my life. Since
                        that day, there’s been one experience after another but
                        nothing that I would take back. I’ve always wanted to
                        have a sister and now I finally have one. She has
                        already helped me through different situations that only
                        a sister could help another with. I finally have someone
                        that I can talk about makeup with or, talk about clothes
                        with or, give me advice someone who has wayyy more years
                        on me could give. She’s an incredible hard worker and
                        still she has the time to be an even better family
                        member. I wish her prosperity and success in whatever
                        she plans to do in the future, by the grace of God. To
                        Victoria, my newly found sister, my new well of advice,
                        welcome to the family and congratulations on this new
                        journey you will embark on. ❤️
                      </p>
                      <i className="bi bi-x-circle"></i>
                    </div>
                  </div>
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

export default WeddingParty;
