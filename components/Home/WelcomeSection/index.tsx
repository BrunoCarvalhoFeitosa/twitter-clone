"use client"
import LoginIllustration from "@/public/svg/LoginIllustration"

const WelcomeSection = () => {
  return (
    <div className="w-full lg:flex lg:flex-col lg:justify-between lg:w-[55%] lg:h-[100vh] px-[20px] md:px-[46px] lg:px-[74px] py-[48px] bg-[#1D9BF0]">
      <div>
        <h2 className="text-[24px] md:text-[40px] leading-[34px] md:leading-[50px] font-bold text-white">
          Veja o que <br /> está acontecendo agora
        </h2>
        <h3 className="mt-3 text-[16px] text-white">
          Inscreva-se no Twitter hoje mesmo.
        </h3>
      </div>
      <div className="flex justify-center my-14">
        <LoginIllustration width="450" height="280" />
      </div>
      <div className="flex justify-center">
        <p className="text-[12px] text-white">
          © 2023 Twitter, Inc.
        </p>
      </div>
    </div>
  )
}

export default WelcomeSection