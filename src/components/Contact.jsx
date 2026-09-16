import Header from "./Header";
import DynamicIcons from "./DynamicIcons";
export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="w-full flex flex-col items-center justify-center bg-gray-100  pt-8 pb-10 gap-6"
      >
        {/* Row container: Stacked on mobile, side-by-side on desktop */}
        <div className="mt-6 flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-5 md:flex-row md:items-start md:gap-16">
          <div className="flex flex-col items-center md:min-w-50 md:items-start">
            <h1>
              Monday - Saturday:
              <span className="font-semibold "> Open</span>
            </h1>
            <h1>
              Sunday:
              <span className="font-semibold"> Closed</span>
            </h1>
            <h1 className="font-bold">
              Appointment Only - <br />{" "}
              <span className="font-medium text-sm text-center">
                via DM or Website
              </span>
            </h1>
          </div>

          {/* Section 1: Phone & Email */}
          <section className="flex flex-col items-center space-y-3 md:min-w-50 md:items-start">
            <div className="flex gap-2">
              <DynamicIcons iconName="phone" />
              <p>+123-456-7890</p>
            </div>
            <div className="flex gap-2">
              <DynamicIcons iconName="mail" />
              <p>examplemail@gmail.com</p>
            </div>
          </section>

          {/* Section 2: Location */}
          <section className="flex flex-col items-center space-y-2 md:min-w-50">
            <DynamicIcons iconName="map-pin" size={18} />
            <h1 className="text-sm text-center leading-relaxed">
              Location, City/Town, <br />
              State, Country.
            </h1>
          </section>

          {/* Section 3: Socials */}
          {/* <section className="flex flex-col items-center space-y-3 min-w-50">
            <h1 className="text-tColor font-semibold italic text-sm">
              Connect with us
            </h1>
            <div className="flex gap-4">
              <DynamicIcons
                iconName={faWhatsapp}
                color="text-green-600"
                link="https://wa.me/message/WOE2QIJLGWLAK1"
              />
              <Icon
                size="text-2xl"
                iconName={faInstagram}
                color="text-pink-600"
                link="https://www.instagram.com/hemass_artistry"
              />
              <Icon
                size="text-2xl"
                iconName={faFacebook}
                color="text-blue-600"
                link="https://www.facebook.com/profile.php?id=61577907793515"
              />
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}
