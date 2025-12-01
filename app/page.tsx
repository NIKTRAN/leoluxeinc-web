import Image from "next/image";







export default function Home() {
  return (

    <div>

      <div className="relative h-[70vh] lg:h-[90vh] w-screen overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/stock/leoluxebg.png"
          // width={500}
          // height={500}
          alt="Background"
          fill 

          
          className="
            object-cover
            invert dark:invert-0
          "

          priority   
        />

        {/* Logo on top */}
        <Image
          src="/images/brand-assets/leoluxeinc-logo.svg"
          width={200}
          height={200}
          alt="LEO LUXE INC logo"
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-10
            h-[200px]
            w-auto
            invert dark:invert-0
            pointerEvents: none
          "
        />
        




      </div>







      <div className="h-[100px] w-[100vw] overflow-hidden">

        {/* <Image
          src="/images/stock/leoluxebg.png"
          width={500}
          height={500}
          alt="Picture"
          className="
          h-full 
          w-full 
          object-cover
          "
        /> */}
      </div>


      <div className="h-[100vh] w-[100vw] overflow-hidden">

        <Image
          src="/images/stock/leoluxebg.png"
          width={500}
          height={500}
          alt="Picture"
          className="
          h-full 
          w-full 
          object-cover

          invert dark:invert-0
          "
        />
      </div>




    </div>


  );
}
