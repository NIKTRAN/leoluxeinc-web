import Image from "next/image";







export default function Home() {
  return (

    <div>

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
