"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#fff] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
          <div className="absolute -z-1 bottom-[-255px] left-0 w-full h-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-8 xl:gap-20 md:justify-between">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-3/5 lg:w-3/4 shadow-solid-8 rounded-lg bg-white  p-7.5 xl:p-15"
            >
              <h2 className="text-black  text-3xl xl:text-sectiontitle2 font-semibold mb-15">
                Send a message
              </h2>
              <div className="embed-tally">
                <iframe
                  src="https://tally.so/embed/w59LyQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  height="400px"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  style={{ border: "none" }}
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 lg:w-[26%] md:p-7.5 xl:pt-15"
            >
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-12.5">
                Find us
              </h2>

              <div className="mb-7 5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  Our Location
                </h4>
                <p> 3rd Floor, Innovation Garage, NITW</p>
              </div>
              <div className="mb-7 5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  Email Address
                </h4>
                <p>
                  <a href="mailto:support@sikka2x.com">support@sikka2x.com</a>
                </p>
              </div>
              {/* <div>
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+009 42334 6343 843</a>
                </p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== */}
    </>
  );
};

export default Contact;
