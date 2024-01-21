import { useNavigate } from "react-router-dom";
const Desktop = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[9181px] relative bg-gray-200 overflow-hidden flex flex-col items-center justify-start gap-[87px] tracking-[normal] mq450:gap-[22px] mq750:gap-[43px] mq1050:h-auto">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src="/untitled1-1@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[159px] box-border max-w-full shrink-0 text-left text-xs text-white font-poppins lg:pb-[103px] lg:box-border mq450:pb-11 mq450:box-border mq1050:pb-[67px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-center justify-start  pb-[140px] pr-5 pl-[26px] box-border relative gap-[104px] bg-[url('/public/untitled1-2@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full lg:pt-[246px] lg:pb-[91px] lg:box-border mq450:gap-[26px] mq750:gap-[52px] mq750:pt-40 mq750:pb-[59px] mq750:box-border">
          <img
            className="w-[1440px] relative h-[1377px] object-cover hidden max-w-full z-[0]"
            alt=""
            src="/untitled1-2@2x.png"
          />
          <div className="w-[1210px] flex flex-row items-center justify-between min-h-[258px] gap-[20px] max-w-full mq1050:flex-wrap">
            <img
              className="h-[54px] w-[184px] relative object-cover z-[1]"
              loading="eager"
              alt=""
              src="/untitled3-1@2x.png"
            />
            <div className="w-[487px] flex flex-row items-start justify-start py-5 pr-[39px] pl-0 box-border  max-w-full mq750:gap-[22px]">
              <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
                <div className="h-[19px] relative font-medium inline-block shrink-0 z-[1]">
                  HOME
                </div>
              </div>
              <div className="h-[19px] flex-1 relative font-medium inline-block z-[1]">
                OVERVIEW
              </div>
              <div className="h-[19px] flex-1 relative font-medium inline-block z-[1]">
                AMENITIES
              </div>
              <div className="flex-[0.8] flex flex-col items-start justify-start py-0 pr-3 pl-0">
                <div className="h-[19px] relative font-medium inline-block shrink-0 z-[1]">
                  GALLERY
                </div>
              </div>
              <div className="h-[19px] flex-1 relative font-medium inline-block z-[1]">
                CONTACT
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] pt-[11px] pb-2.5 pr-9 pl-[37px] bg-mediumseagreen-200 rounded-lg flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-mediumaquamarine"
              onClick={() => navigate("/contact")}
            >
              <div className="h-10 w-[159px] relative rounded-lg bg-mediumseagreen-200 hidden" />
              <div className="relative text-xs font-medium font-poppins text-white text-left z-[2]">
                ENQUIRE NOW
              </div>
            </button>
          </div>
          <button className="cursor-pointer pt-[17px] pb-5 pr-6 pl-5 bg-[transparent] w-[241px] rounded-lg box-border flex flex-row items-center justify-center z-[1] border-[1.5px] border-solid border-white hover:bg-gainsboro-300 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-gainsboro-100">
            <div className="h-14 w-[241px] relative rounded-lg box-border hidden border-[1.5px] border-solid border-white" />
            <div className="relative text-[14px] tracking-[0.13em] font-medium font-poppins text-white text-left z-[2]">
              MUMBAI
            </div>
          </button>
          <div className="w-[706px] flex flex-col items-center justify-start max-w-full text-center text-[160px] font-gabriela">
            <h1 className="m-0 self-stretch h-[174px] relative text-inherit tracking-[-0.04em] font-medium font-inherit inline-block shrink-0 z-[2] mq450:text-21xl mq1050:text-45xl">
              PROJECT
            </h1>
            <div className="flex flex-col items-center justify-start max-w-full mt-[-22px] text-[128px]">
              <h1 className="m-0 h-[174px] relative text-inherit tracking-[-0.04em] font-normal font-inherit inline-block shrink-0 z-[1] mq450:text-[32px] mq1050:text-32xl">
                ARANYA
              </h1>
              <h1 className="m-0 relative text-11xl capitalize font-light font-sharpe-personal text-mediumspringgreen z-[1] mt-[-260x] mq450:text-lg mq1050:text-[24px]">
                pirimal groups
              </h1>
            </div>
          </div>
          <div className="w-40 h-[150px] absolute my-0 mx-[!important] right-[680px] bottom-[-180px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute top-[31px] left-[36px] w-[87px] h-[87px] overflow-hidden object-contain z-[2]"
                loading="eager"
                alt=""
                src="/arrowup-1-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1242px] h-[220px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[29px] max-w-full text-left text-[23px] text-white font-poppins lg:h-auto">
        <h2 className="m-0 h-[35px] relative text-inherit capitalize font-light font-inherit inline-block mq450:text-lg">
          search your configuration
        </h2>
        <div className="self-stretch h-24 relative max-w-full text-smi-9 text-darkgray-100 lg:h-auto lg:min-h-[96]">
          <div className="absolute top-[0px] left-[0px] rounded-mid bg-white w-full h-full hidden" />
          <div className="absolute top-[0px] left-[0px] rounded-mid bg-white w-full flex flex-row items-end justify-between py-2.5 pr-[11px] pl-16 box-border gap-[20px] h-full max-w-full z-[1] lg:flex-wrap lg:pl-8 lg:box-border">
            <div className="h-24 w-[1202px] relative rounded-mid bg-white hidden max-w-full" />
            <div className="flex flex-row items-center justify-start gap-[101px] max-w-full mq450:gap-[25px] mq1050:flex-wrap mq1050:gap-[50px]">
              <div className="flex flex-col items-start justify-start pt-0 pb-[3px] pr-[30px] pl-0">
                <div className="flex flex-row items-center justify-start gap-[20px]">
                  <div className="h-[57px] w-[59px] relative rounded-4xs bg-aliceblue z-[2]">
                    <div className="absolute top-[0px] left-[0px] rounded-4xs bg-aliceblue w-full h-full hidden mix-blend-normal" />
                    <img
                      className="absolute top-[9px] left-[9px] w-[41.5px] h-[41.5px] overflow-hidden z-[3]"
                      loading="eager"
                      alt=""
                      src="/location-1-1.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <div className="flex flex-col items-start justify-start py-0 pr-px pl-0">
                      <div className="relative capitalize font-light z-[2]">
                        location
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-0 text-lg-6 text-gray-300">
                        <div className="h-7 relative capitalize font-light inline-block z-[3]">
                          south mumbai
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[72px] flex flex-row items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                  <div className="w-[0.72px] flex-1 relative box-border z-[2] border-r-[0.7px] border-solid border-darkgray-200" />
                </div>
                <div className="w-[59px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border">
                  <div className="self-stretch h-[57px] relative rounded-4xs bg-aliceblue z-[2]">
                    <div className="absolute top-[0px] left-[0px] rounded-4xs bg-aliceblue w-full h-full hidden mix-blend-normal" />
                    <img
                      className="absolute top-[9px] left-[9px] w-[41.5px] h-[41.5px] overflow-hidden z-[3]"
                      loading="eager"
                      alt=""
                      src="/home-1.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative capitalize font-light z-[2]">
                    Property Type
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-0 text-lg-6 text-black">
                    <div className="h-7 relative capitalize font-light inline-block z-[3]">
                      2 BHK
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[72px] flex flex-row items-center justify-start gap-[18px]">
                <div className="self-stretch w-[15px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                  <div className="w-[0.72px] flex-1 relative box-border z-[2] border-r-[0.7px] border-solid border-darkgray-200" />
                </div>
                <div className="w-[59px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border">
                  <div className="self-stretch h-[57px] relative rounded-4xs bg-aliceblue z-[2]">
                    <div className="absolute top-[0px] left-[0px] rounded-4xs bg-aliceblue w-full h-full hidden mix-blend-normal" />
                    <img
                      className="absolute top-[9px] left-[9px] w-[41.5px] h-[41.5px] overflow-hidden z-[3]"
                      loading="eager"
                      alt=""
                      src="/rupee.png"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative capitalize font-light z-[2]">
                    Budget
                  </div>
                  <div className="h-7 relative text-lg-6 capitalize font-light text-black inline-block z-[3]">
                    90 L - 1.5 Cr
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[81px] rounded-lg bg-mediumseagreen-200 flex flex-row items-center justify-center pt-5 px-5 pb-[23px] box-border z-[2]">
              <div className="h-[76px] w-[81px] relative rounded-lg bg-mediumseagreen-200 hidden" />
              <img
                className="h-[33px] w-[33px] relative rounded-md overflow-hidden shrink-0 z-[3]"
                loading="eager"
                alt=""
                src="/searchinterfacesymbol-2.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-[281px] h-px relative box-border hidden border-t-[1px] border-solid border-black" />
      <div className="w-[281px] h-px relative box-border hidden border-t-[1px] border-solid border-black" />
      <div className="w-[281px] h-px relative box-border hidden border-t-[1px] border-solid border-black" />
      <div className="w-[281px] h-px relative box-border hidden border-t-[1px] border-solid border-black" />
      <div className="w-[281px] h-px relative box-border hidden border-t-[1px] border-solid border-black" />
      <div className="w-[281px] h-px relative box-border hidden border-t-[1px] border-solid border-black" />
      <div className="w-[281px] h-px relative box-border hidden border-t-[1px] border-solid border-black" />
      <div className="w-[281px] h-px relative box-border hidden border-t-[1px] border-solid border-black" />
      <div className="w-[281px] h-px relative box-border hidden border-t-[1px] border-solid border-black" />
      <img
        className="w-[15px] h-[15px] relative overflow-hidden shrink-0 hidden"
        alt=""
      />
      <section className="w-[1244px] flex flex-row items-end justify-start py-0 px-5 box-border gap-[106px] min-h-[1171px] max-w-full shrink-0 text-left text-mini text-mediumspringgreen font-poppins mq450:gap-[26px] mq750:gap-[53px] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[363px] min-h-[1084px] max-w-full mq450:min-w-full mq1050:min-h-[auto]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
            <div className="w-[475px] h-[609px] relative max-w-full">
              <img
                className="absolute top-[39.3px] left-[0px] w-[399.1px] h-[476.7px] object-contain"
                alt=""
                src="/frame-caption@2x.png"
              />
              <img
                className="absolute top-[0px] left-[115.3px] w-[359.9px] h-[452.4px] object-contain z-[1]"
                alt=""
                src="/frame-caption@2x.png"
              />
              <img
                className="absolute top-[39.3px] left-[0px] w-[399.1px] h-[476.7px] object-contain z-[2]"
                alt=""
                src="/frame-caption@2x.png"
              />
              <img
                className="absolute top-[0px] left-[115.3px] w-[359.9px] h-[452.4px] object-contain z-[3]"
                loading="eager"
                alt=""
                src="/frame-caption@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
              <div className="w-[258px] flex flex-row items-start justify-start">
                <div className="h-[22px] flex-1 relative tracking-[0.08em] inline-block">
                  2 BED EXCLUSIVE RESIDENCES
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full text-45xl text-white font-gabriela">
                <h1 className="mb-20 h-[91px] flex-1 relative text-inherit tracking-[-0.02em] font-medium font-inherit inline-block max-w-full mq450:text-19xl mq1050:text-32xl">
                  2BHK - EAST WING
                </h1>
              </div>
            </div>
            <div className="w-[546px] relative text-base tracking-[0.09em] leading-[150%] font-light text-gainsboro-200 flex items-center max-w-full">
              <span className="w-full">
                <p className="m-0">• All bedrooms with en-suite bathrooms</p>
                <p className="m-0">• Apartments with harbour views</p>
                <p className="m-0">
                  • Master bedroom with corner windows offering panoramic views
                </p>
                <p className="m-0">• All shafts on the external face</p>
                <p className="m-0">• Kitchen with dry balcony</p>
                <p className="m-0">{`• Ease of combining apartments to create exclusive wing apartment with expansive living & dining area`}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[539px] flex flex-col items-end justify-start gap-[103px] min-w-[539px] max-w-full mq450:gap-[26px] mq750:gap-[51px] mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[31px] mq750:gap-[15px]">
              <div className="flex flex-row items-start justify-start">
                <div className="h-[23px] relative tracking-[0.08em] inline-block">
                  MUMBAI
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-45xl text-white font-gabriela">
                <h1 className="mb-20 h-[91px] relative text-inherit tracking-[-0.02em] font-medium font-inherit whitespace-pre-wrap inline-block mq450:text-19xl mq1050:text-32xl">{`OUR APARTMENTS  `}</h1>
              </div>
            </div>
            <div className="self-stretch h-[178px] relative text-base tracking-[0.09em] leading-[150%] font-light text-gainsboro-200 inline-block shrink-0">{`Presenting Piramal Aranya, a high rise gated sanctuary that offers luxuriant 2, 3 & 4 BHK homes inclusive of advanced wellness technologies, dual-aspect blue and green views and a world-class lifestyle crafted alongside the world’s leading partners at Rani Baug, Byculla, South Mumbai.`}</div>
          </div>
          <div className="w-[475px] h-[516px] relative max-w-full">
            <img
              className="absolute top-[39.3px] left-[0px] w-[399.1px] h-[476.7px] object-contain mix-blend-color-dodge"
              alt=""
              src="/progress-bar-frame@2x.png"
            />
            <img
              className="absolute top-[0px] left-[115.3px] w-[359.9px] h-[452.4px] object-contain z-[1]"
              alt=""
              src="/progress-bar-frame@2x.png"
            />
            <img
              className="absolute top-[39.3px] left-[0px] w-[399.1px] h-[476.7px] object-contain mix-blend-color-dodge z-[2]"
              alt=""
              src="/progress-bar-frame@2x.png"
            />
            <img
              className="absolute top-[0px] left-[115.3px] w-[359.9px] h-[452.4px] object-contain z-[3]"
              loading="eager"
              alt=""
              src="/progress-bar-frame@2x.png"
            />
          </div>
        </div>
      </section>
      <section className="w-[1284px] flex flex-row items-start justify-start py-0 pr-10 pl-5 box-border min-h-[390px] max-w-full shrink-0 text-left text-45xl text-mediumspringgreen font-gabriela">
        <div className="flex-1 flex flex-col items-start justify-start gap-[72px] max-w-full mq450:gap-[18px] mq750:gap-[36px]">
          <div className="self-stretch h-[0.5px] relative box-border border-t-[0.5px] border-solid border-darkgray-100" />
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq1050:flex-wrap">
            <div className="w-[146px] flex flex-col items-start justify-start gap-[19px]">
              <div className="w-[136px] relative tracking-[-0.05em] font-medium inline-block mq450:text-19xl mq1050:text-32xl">
                50+
              </div>
              <div className="relative text-xs leading-[162%] font-light font-poppins text-white z-[1]">
                AMENITIES
              </div>
            </div>
            <div className="w-[179px] flex flex-col items-start justify-start gap-[19px]">
              <div className="w-[142px] relative tracking-[-0.05em] font-medium inline-block mq450:text-19xl mq1050:text-32xl">
                250
              </div>
              <div className="relative text-xs leading-[162%] font-light font-poppins text-white z-[1]">
                APARTMENTS
              </div>
            </div>
            <div className="w-[260px] flex flex-row items-center justify-start">
              <div className="w-[260px] flex flex-col items-start justify-start">
                <div className="w-[196px] flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="h-[91px] w-[206px] relative tracking-[-0.05em] font-medium inline-block shrink-0 mq450:text-19xl mq1050:text-32xl">{`9,290 `}</div>
                </div>
                <div className="self-stretch relative text-xs leading-[162%] font-light font-poppins text-white z-[1]">
                  RECEREATIONAL SPACE
                </div>
              </div>
              <div className="w-[58px] relative text-mini tracking-[-0.05em] font-medium whitespace-pre-wrap inline-block shrink-0 z-[1] ml-[-102px]">{`SQ.MT    `}</div>
            </div>
            <div className="w-[216px] flex flex-col items-start justify-start gap-[10px]">
              <div className="w-[177px] relative tracking-[-0.05em] font-medium inline-block mq450:text-19xl mq1050:text-32xl">
                1,200
              </div>
              <div className="self-stretch relative text-xs leading-[162%] font-light font-poppins text-white z-[1]">
                SLOT CAR PARKING
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0 text-left text-base text-mediumspringgreen font-poppins">
        <div className="self-stretch bg-white flex flex-col items-center justify-start pt-[136px] pb-[46px] pr-0.5 pl-px box-border gap-[169px] max-w-full lg:pt-[88px] lg:pb-[30px] lg:box-border mq450:gap-[42px] mq450:pt-[37px] mq450:box-border mq750:gap-[84px] mq1050:pt-[57px] mq1050:pb-5 mq1050:box-border">
          <div className="self-stretch relative bg-white h-[1646px] hidden" />
          <div className="flex flex-col items-center justify-start py-0 px-5 box-border gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="w-[223px] flex flex-row items-start justify-start py-0 pr-0 pl-[39px] box-border">
              <div className="flex-1 relative tracking-[0.01em] font-semibold z-[1]">
                ARANYA’S SERVICES
              </div>
            </div>
            <h1 className="m-0 relative text-[60px] tracking-[-0.02em] leading-[105%] font-medium font-gabriela text-black text-center z-[1] mq450:text-[36px] mq450:leading-[38px] mq1050:text-[48px] mq1050:leading-[50px]">
              30+ PREMIUM AMENTIES
            </h1>
          </div>
          <div className="w-[1243px] flex flex-row items-start justify-start py-0 pr-9 pl-5 box-border min-h-[311px] max-w-full text-center text-xl text-black">
            <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:flex-wrap">
                <div className="flex flex-row items-center justify-start py-0 pr-6 pl-0 gap-[10px] text-left">
                  <div className="h-[70px] w-[71px] rounded-41xl bg-aliceblue flex flex-row items-center justify-center pt-[21px] px-[21px] pb-[22px] box-border z-[1]">
                    <div className="h-[70px] w-[71px] relative rounded-41xl bg-aliceblue hidden" />
                    <img
                      className="h-[27px] w-[27px] relative overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/call-1.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <h2 className="m-0 relative text-inherit leading-[105%] font-semibold font-inherit z-[1] mq450:text-base mq450:leading-[17px]">
                      RECEPTION
                    </h2>
                    <div className="relative text-3xs leading-[105%] capitalize font-light text-center z-[1]">
                      6 area for receptionist serve 24/7
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[13px]">
                  <div className="h-[70px] w-[71px] rounded-41xl bg-aliceblue flex flex-row items-center justify-center py-5 pr-5 pl-[21px] box-border z-[1]">
                    <div className="h-[70px] w-[71px] relative rounded-41xl bg-aliceblue hidden" />
                    <img
                      className="h-[30px] w-[30px] relative overflow-hidden shrink-0 z-[2]"
                      loading="eager"
                      alt=""
                      src="/security-1.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <h2 className="m-0 relative text-inherit leading-[105%] font-semibold font-inherit z-[1] mq450:text-base mq450:leading-[17px]">
                      SECURITY
                    </h2>
                    <div className="relative text-3xs leading-[105%] capitalize font-light z-[1]">
                      Security team with 24/7 camera system
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-[25px] pl-0 gap-[14px] text-left">
                  <button className="cursor-pointer [border:none] pt-3.5 pb-[25px] pr-[23px] pl-[17px] bg-aliceblue h-[70px] w-[71px] rounded-41xl flex flex-row items-start justify-start box-border z-[1]">
                    <div className="h-[70px] w-[71px] relative rounded-41xl bg-aliceblue hidden" />
                    <img
                      className="h-[31px] w-[31px] relative overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/carparking-1.svg"
                    />
                  </button>
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <h2 className="m-0 relative text-inherit leading-[105%] font-semibold font-inherit z-[1] mq450:text-base mq450:leading-[17px]">
                      FIRE ALARM
                    </h2>
                    <div className="relative text-3xs leading-[105%] capitalize font-light text-center z-[1]">
                      Automatic fire extinguishing system
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-between gap-[20px]">
                <div className="flex flex-row items-center justify-start py-0 pr-[25px] pl-0 gap-[14px] text-left">
                  <button className="cursor-pointer [border:none] pt-3.5 pb-[25px] pr-[23px] pl-[17px] bg-aliceblue h-[70px] w-[71px] rounded-41xl flex flex-row items-start justify-start box-border z-[1]">
                    <div className="h-[70px] w-[71px] relative rounded-41xl bg-aliceblue hidden" />
                    <img
                      className="h-[31px] w-[31px] relative overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/carparking-1.svg"
                    />
                  </button>
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <h2 className="m-0 relative text-inherit leading-[105%] font-semibold font-inherit z-[1] mq450:text-base mq450:leading-[17px]">
                      PARKING
                    </h2>
                    <div className="relative text-3xs leading-[105%] capitalize font-light text-center z-[1]">
                      Parking area with extra capacity
                    </div>
                  </div>
                </div>
                <div className="w-[285px] flex flex-row items-center justify-start gap-[13px]">
                  <button className="cursor-pointer [border:none] pt-4 px-4 pb-[21px] bg-aliceblue h-[70px] w-[71px] rounded-41xl flex flex-row items-center justify-center box-border z-[1]">
                    <div className="h-[70px] w-[71px] relative rounded-41xl bg-aliceblue hidden" />
                    <img
                      className="h-[33px] w-[33px] relative overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/boardmeeting-1.svg"
                    />
                  </button>
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-1">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[10px]">
                      <h2 className="m-0 relative text-inherit leading-[105%] font-semibold font-inherit z-[1] mq450:text-base mq450:leading-[17px]">
                        CONFERENCE ROOM
                      </h2>
                      <div className="relative text-3xs leading-[105%] capitalize font-light z-[1]">
                        5 conference room setup in each block
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-[25px] pl-0 gap-[14px] text-left">
                  <button className="cursor-pointer [border:none] pt-3.5 pb-[25px] pr-[23px] pl-[17px] bg-aliceblue h-[70px] w-[71px] rounded-41xl flex flex-row items-start justify-start box-border z-[1]">
                    <div className="h-[70px] w-[71px] relative rounded-41xl bg-aliceblue hidden" />
                    <img
                      className="h-[31px] w-[31px] relative overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/carparking-1.svg"
                    />
                  </button>
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <h2 className="m-0 relative text-inherit leading-[105%] font-semibold font-inherit z-[1] mq450:text-base mq450:leading-[17px]">
                      CONDITIONING
                    </h2>
                    <div className="relative text-3xs leading-[105%] capitalize font-light text-center z-[1]">
                      ensure ventilation and air conditioning
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1050:flex-wrap">
                <div className="w-[286px] flex flex-row items-center justify-start gap-[14px] text-left">
                  <button className="cursor-pointer [border:none] py-[21px] pr-[21px] pl-[22px] bg-aliceblue h-[70px] w-[71px] rounded-41xl flex flex-row items-center justify-center box-border z-[1]">
                    <div className="h-[70px] w-[71px] relative rounded-41xl bg-aliceblue hidden" />
                    <img
                      className="h-7 w-7 relative overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/shoppingcart-1.svg"
                    />
                  </button>
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <h2 className="m-0 relative text-inherit leading-[105%] font-semibold font-inherit z-[1] mq450:text-base mq450:leading-[17px]">
                      SUPERMARKET
                    </h2>
                    <div className="relative text-3xs leading-[105%] capitalize font-light text-center z-[1]">
                      5 supermarket in each block
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <button className="cursor-pointer [border:none] pt-[18px] px-[18px] pb-[21px] bg-aliceblue h-[70px] w-[71px] rounded-41xl flex flex-row items-center justify-center box-border z-[1]">
                    <div className="h-[70px] w-[71px] relative rounded-41xl bg-aliceblue hidden" />
                    <img
                      className="h-[31px] w-[31px] relative overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/massage-1.svg"
                    />
                  </button>
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <h2 className="m-0 relative text-inherit leading-[105%] font-semibold font-inherit z-[1] mq450:text-base mq450:leading-[17px]">
                      SPA AND MASSAGE
                    </h2>
                    <div className="relative text-3xs leading-[105%] capitalize font-light z-[1]">
                      Spa and Massage service for better health
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 pr-[25px]  gap-[14px] text-left">
                  <button className="cursor-pointer [border:none] pt-3.5 pb-[25px] pr-[23px] pl-[17px] bg-aliceblue h-[70px] w-[71px] rounded-41xl flex flex-row items-start justify-start box-border z-[1]">
                    <div className="h-[70px] w-[71px] relative rounded-41xl bg-aliceblue hidden" />
                    <img
                      className="h-[31px] w-[31px] relative overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/carparking-1.svg"
                    />
                  </button>
                  <div className="flex flex-col items-start justify-start gap-[10px]">
                    <h2 className="m-0 relative text-inherit leading-[105%] font-semibold font-inherit z-[1] mq450:text-base mq450:leading-[17px]">
                      4 SEASON POOL
                    </h2>
                    <div className="relative text-3xs leading-[105%] capitalize font-light text-center z-[1]">
                      5 star indoor swimming 4 seasons
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[2]"
            loading="eager"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
        <div className="self-stretch bg-ghostwhite flex flex-col items-center justify-start pt-[72px] pb-[69px] pr-[21px] pl-5 box-border gap-[126px] max-w-full z-[1] mt-[-46px] lg:gap-[63px] mq450:gap-[16px] mq750:gap-[31px] mq750:pb-[29px] mq750:box-border mq1050:pt-[72px] mq1050:pb-[45px] mq1050:box-border">
          <div className="w-[1440px] relative bg-ghostwhite h-[1017px] hidden max-w-full" />
          <div className="w-[352px] flex flex-col items-center justify-start gap-[21px] max-w-full">
            <div className="relative tracking-[0.01em] font-medium z-[2]">
              THE ADVANTAGES
            </div>
            <h1 className="m-0 self-stretch h-[81px] relative text-45xl tracking-[0.01em] font-normal font-gabriela text-black inline-block shrink-0 z-[2] mq450:text-19xl mq1050:text-32xl">
              AMENITIES
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-[52px] max-w-full text-lgi lg:flex-wrap mq750:gap-[26px]">
            <div className="h-[496px] w-[263px] flex flex-row items-start justify-start py-0 pr-[7px] pl-0 box-border gap-[32px] mq450:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="w-px flex-1 relative box-border z-[2] border-r-[1px] border-solid border-darkgray-100" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[45px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <b className="h-[29px] relative tracking-[0.01em] uppercase inline-block z-[2]">
                    1
                  </b>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-black">
                    <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                      <h3 className="m-0 h-[58px] relative text-inherit tracking-[0.01em] uppercase font-bold font-inherit inline-block z-[2]">
                        <p className="m-0">{`top CLASS `}</p>
                        <p className="m-0">{`CLUB & FACILITIES`}</p>
                      </h3>
                    </div>
                    <img
                      className="w-56 h-[219px] relative object-cover z-[2]"
                      loading="eager"
                      alt=""
                      src="/rectangle-72@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[216px] relative text-3xs tracking-[0.01em] leading-[178%] capitalize text-black inline-block z-[2]">
                  <p className="[margin-block-start:0] [margin-block-end:21px]">{`With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.
`}</p>
                  <p className="[margin-block-start:0] [margin-block-end:21px]"></p>
                </div>
              </div>
            </div>
            <div className="h-[578px] w-[261px] flex flex-col items-start justify-start pt-[82px] px-0 pb-0 box-border mq750:pt-[72px] mq750:box-border">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[32px] mq450:gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="w-px flex-1 relative box-border z-[2] border-r-[1px] border-solid border-darkgray-100" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[49px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                    <b className="h-[29px] relative tracking-[0.01em] uppercase inline-block z-[2]">
                      2
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-black">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                        <h3 className="m-0 h-[58px] relative text-inherit tracking-[0.01em] uppercase font-bold font-inherit inline-block z-[2]">
                          <p className="m-0">{`Tower Exclusive `}</p>
                          <p className="m-0">{`Amenities & Facilities`}</p>
                        </h3>
                      </div>
                      <img
                        className="w-56 h-[219px] relative object-cover z-[2]"
                        loading="eager"
                        alt=""
                        src="/rectangle-73@2x.png"
                      />
                    </div>
                  </div>
                  <div className="w-[216px] relative text-3xs tracking-[0.01em] leading-[178%] capitalize text-black inline-block z-[2]">
                    <p className="[margin-block-start:0] [margin-block-end:13px]">{`With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.
`}</p>
                    <p className="[margin-block-start:0] [margin-block-end:13px]"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[569px] flex flex-row items-start justify-start gap-[29px] max-w-full">
              <div className="h-[496px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                <div className="w-px flex-1 relative box-border z-[2] border-r-[1px] border-solid border-darkgray-100" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[27px] max-w-[calc(100%_-_29px)]">
                <b className="h-[29px] relative tracking-[0.01em] uppercase inline-block z-[2]">
                  3
                </b>
                <div className="self-stretch h-[571px] relative max-w-full text-black mq750:h-auto mq750:min-h-[571]">
                  <h3 className="m-0 absolute top-[0px] left-[6px] text-inherit tracking-[0.01em] uppercase font-bold font-inherit z-[3]">
                    <p className="m-0">{`Recreational `}</p>
                    <p className="m-0">{`Amenities & Facilities
`}</p>
                  </h3>
                  <div className="absolute top-[75px] left-[0px] w-full flex flex-row items-start justify-start gap-[32px] max-w-full text-3xs mq750:flex-wrap mq750:gap-[16px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] pb-0 pr-[25px] pl-0 box-border min-w-[164px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[54px]">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                          <img
                            className="h-[219px] w-56 relative object-cover z-[2]"
                            loading="eager"
                            alt=""
                            src="/rectangle-74@2x.png"
                          />
                        </div>
                        <div className="w-[216px] relative tracking-[0.01em] leading-[178%] capitalize inline-block z-[2]">
                          <p className="[margin-block-start:0] [margin-block-end:13px]">{`With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.
`}</p>
                          <p className="[margin-block-start:0] [margin-block-end:13px]"></p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[496px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                      <div className="w-px flex-1 relative box-border z-[2] border-r-[1px] border-solid border-darkgray-100" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[45px] text-lgi text-mediumspringgreen">
                      <div className="flex flex-col items-start justify-start gap-[27px]">
                        <b className="h-[29px] relative tracking-[0.01em] uppercase inline-block z-[2]">
                          4
                        </b>
                        <div className="flex flex-col items-start justify-start gap-[22px] text-black">
                          <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                            <h3 className="m-0 h-[58px] relative text-inherit tracking-[0.01em] uppercase font-bold font-inherit inline-block z-[2]">
                              <p className="m-0">Multipurpose</p>
                              <p className="m-0"> Games Room</p>
                            </h3>
                          </div>
                          <img
                            className="w-56 h-[219px] relative object-cover z-[2]"
                            loading="eager"
                            alt=""
                            src="/rectangle-75@2x.png"
                          />
                        </div>
                      </div>
                      <div className="w-[216px] relative text-3xs tracking-[0.01em] leading-[178%] capitalize text-black inline-block z-[2]">
                        <p className="[margin-block-start:0] [margin-block-end:13px]">{`With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.
`}</p>
                        <p className="[margin-block-start:0] [margin-block-end:13px]"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[118px] box-border max-w-full shrink-0 text-left text-31xl text-mediumspringgreen font-new-york-large lg:pl-[59px] lg:box-border mq750:pl-[29px] mq750:box-border">
        <div className="w-[1430px] flex flex-col items-start justify-start gap-[46px] max-w-[108%] shrink-0 mq750:gap-[23px]">
          <div className="w-[770px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[14px] min-h-[384px] max-w-full text-white">
            <h1 className="m-0 self-stretch h-[180px] relative text-inherit leading-[120%] font-normal font-inherit inline-block mq450:text-11xl mq450:leading-[36px] mq1050:text-21xl mq1050:leading-[48px]">
              <p className="m-0">SPECTACULAR SURROUNDINGS</p>
              <p className="m-0">AS FAR AS THE EYE CAN SEE</p>
            </h1>
            <div className="w-[589px] h-[178px] relative text-base tracking-[0.09em] font-light font-poppins text-darkgray-100 inline-block shrink-0 max-w-full">
              Piramal Aranya is an ode to perfection. It balances contemporary
              design with the scenic natural beauty of its environment. Every
              residence invites you to soak in the surroundings, from the
              endless greenery of Rani Baug on the western side and the
              shimmering Arabian Sea on the east. Avyan at Piramal Aranya will
              be home to something truly spectacular with premium dual aspect
              living
            </div>
          </div>
          <div className="w-[1342px] overflow-x-auto flex flex-row items-end justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full text-45xl font-gabriela">
            <div className="w-[239px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch relative tracking-[-0.05em] font-medium mq450:text-19xl mq1050:text-32xl">
                66%
              </div>
              <div className="w-52 relative text-xs leading-[162%] font-light font-poppins text-darkgray-100 inline-block z-[1]">
                {" "}
                Botanical garden views
              </div>
            </div>
            <div className="w-[295px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
              <div className="w-[249px] relative tracking-[-0.05em] font-medium inline-block mq450:text-19xl mq1050:text-32xl">
                33%
              </div>
              <div className="w-[283px] relative text-xs leading-[162%] font-light font-poppins text-darkgray-100 inline-block z-[1]">
                Mumbai harbour and botanical garden views
              </div>
            </div>
            <div className="w-[362px] shrink-0 flex flex-col items-start justify-start">
              <div className="self-stretch h-[91px] relative tracking-[-0.05em] font-medium inline-block mq450:text-19xl mq1050:text-32xl">
                66%
              </div>
              <div className="w-[148px] relative text-xs leading-[162%] font-light font-poppins text-darkgray-100 inline-block z-[1] mt-[-10px]">
                {" "}
                Mumbai harbour views
              </div>
            </div>
          </div>
          <div className="w-[1224px] h-[17px] flex flex-row items-start justify-start pt-0 pb-[17px] pr-5 pl-0 box-border max-w-full">
            <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-darkgray-100" />
          </div>
          <div className="w-[1183px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs font-poppins">
            <div className="w-[385px] flex flex-col items-center justify-start max-w-full">
              <div className="relative capitalize z-[1]">LOCATION</div>
              <h1 className="m-0 self-stretch h-[57px] relative text-31xl tracking-[-0.05em] font-medium font-gabriela text-white inline-block shrink-0 mq450:text-11xl mq1050:text-21xl">
                NEIGHBORHOOD
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0 text-left text-xs text-white font-poppins">
        <div className="self-stretch h-[1763px] flex flex-col items-start justify-start pt-0 px-0 pb-[702px] box-border relative gap-[41px] max-w-full lg:h-auto lg:pb-[456px] lg:box-border mq450:gap-[20px] mq450:pb-48 mq450:box-border mq1050:pb-[296px] mq1050:box-border">
          <div className="w-[1679px] h-[1413px] absolute my-0 mx-[!important] right-[-227px] bottom-[0px] text-9xl lg:h-auto lg:min-h-[1413]">
            <div className="absolute top-[0px] left-[238px] w-[1441px] flex flex-row items-start justify-start max-w-full">
              <img
                className="h-[1121px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-normal"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="w-full my-0 mx-[!important] absolute top-[-350px] left-[150px] flex flex-row flex-wrap items-start justify-start pt-0 pb-[376px] pr-[495px] pl-[519px] box-border gap-[45px] max-w-full">
                <div className="w-[calc(100%_-_923px)] absolute my-0 mx-[!important] h-[calc(100%_+_620px)] top-[0px] right-[-215px] bottom-[-620px] left-[1138px] bg-gray-200 [filter:blur(201px)] [transform:_rotate(90deg)] [transform-origin:0_0] z-[2]" />
                <h1 className="my-0 mx-[!important] h-[43px] absolute top-[-7px] left-[-197px] text-inherit capitalize font-semibold font-inherit inline-block z-[3] mq450:text-3xl">
                  Bhau Daji Lad Museum
                </h1>
                <h1 className="my-0 mx-[!important] h-[43px] absolute top-[78px] left-[-197px] text-inherit capitalize font-semibold font-inherit inline-block z-[3] mq450:text-3xl">
                  Magen David Synagogue
                </h1>
                <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[81px]">
                    <div className="w-1 h-1 relative rounded-[50%] bg-mediumspringgreen z-[3]" />
                    <div className="w-1 h-1 relative rounded-[50%] bg-mediumspringgreen z-[3]" />
                  </div>
                </div>
                <div className="h-[142px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border min-w-[246px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full shrink-0">
                    <div className="flex flex-col items-start justify-start gap-[2px] max-w-full">
                      <h1 className="m-0 h-[43px] relative text-inherit capitalize font-semibold font-inherit inline-block shrink-0 z-[3] mq450:text-3xl">
                        St. Paul’s Tamil Church
                      </h1>
                      <div className="flex flex-row items-start justify-start py-0 px-1 text-xs text-darkgray-100">
                        <div className="relative capitalize font-light z-[3]">
                          3.5 Km Away
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                      <h1 className="m-0 h-[43px] relative text-inherit capitalize font-semibold font-inherit inline-block shrink-0 z-[3] mq450:text-3xl">
                        Byculla Club − Fire Temple
                      </h1>
                      <div className="flex flex-row items-start justify-start py-0 px-1 text-xs text-darkgray-100">
                        <div className="relative capitalize font-light z-[3]">
                          3.5 Km Away
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[586px] left-[0px] bg-gray-200 [filter:blur(201px)] w-[727px] h-[827px] z-[2]" />
            <div className="absolute top-[670px] left-[1574px] bg-gray-200 [filter:blur(201px)] w-[579px] h-[1138px] [transform:_rotate(90deg)] [transform-origin:0_0] z-[3]" />
          </div>
          <div className="w-[377px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-darkgray-100">
            <div className="w-[141px] flex flex-col items-start justify-start gap-[9px]">
              <div className="w-7 h-[29px] relative">
                <div className="absolute top-[13px] left-[12px] rounded-[50%] bg-mediumspringgreen w-1 h-1 z-[3]" />
                <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[4] border-[2px] border-solid border-mediumspringgreen" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="relative capitalize font-light z-[3]">
                  3.5 Km Away
                </div>
              </div>
            </div>
          </div>
          <div className="w-[389px] h-[95px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-darkgray-100">
            <div className="w-[129px] flex flex-col items-start justify-start gap-[22px]">
              <div className="w-1 h-1 relative rounded-[50%] bg-mediumspringgreen z-[3]" />
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="relative capitalize font-light z-[3]">
                  3.5 Km Away
                </div>
              </div>
            </div>
          </div>
          <div className="w-[777px] flex-1 flex flex-col items-center justify-start pt-[175px] px-5 pb-[213px] box-border relative gap-[19px] max-w-full text-3xs mq450:pt-[74px] mq450:pb-[90px] mq450:box-border mq1050:pt-[114px] mq1050:pb-[138px] mq1050:box-border">
            <div className="w-[727px] absolute my-0 mx-[!important] h-full top-[0px] bottom-[0px] left-[-12px] bg-gray-200 [filter:blur(201px)] z-[1]" />
            <div className="w-[419px] flex-1 flex flex-row items-start justify-start max-w-full text-31xl font-gabriela">
              <div className="w-[295px] flex flex-col items-start justify-start gap-[10px]">
                <h1 className="m-0 self-stretch h-[84px] relative text-inherit tracking-[-0.05em] font-medium font-inherit inline-block shrink-0 z-[3] mq450:text-11xl mq1050:text-21xl">
                  CONTACT US
                </h1>
                <div className="w-[277px] h-[15px] relative text-xs tracking-[-0.05em] font-poppins text-darkgray-100 inline-block shrink-0 z-[3]">
                  <p className="m-0">
                    Please enter details below and we shall get in touch with
                    you shortly
                  </p>
                  <p className="m-0"></p>
                </div>
              </div>
            </div>
            <div className="w-[419px] flex flex-col items-start justify-start gap-[19px] max-w-full">
              <div className="self-stretch rounded-lg box-border flex flex-row items-start justify-start pt-[15px] px-[22px] pb-4 gap-[23px] max-w-full whitespace-nowrap z-[3] border-[1px] border-solid border-white">
                <div className="h-[46px] w-[419px] relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-white" />
                <img
                  className="h-[15px] w-[15px] relative rounded-lg overflow-hidden shrink-0 min-h-[15px] z-[4]"
                  loading="eager"
                  alt=""
                  src="/user-1-1.svg"
                />
                <div className="relative capitalize font-light z-[4]">
                  full Name
                </div>
              </div>
              <div className="self-stretch rounded-lg box-border flex flex-row items-start justify-start py-[15px] px-[21px] gap-[23px] max-w-full whitespace-nowrap z-[3] border-[1px] border-solid border-white">
                <div className="h-[46px] w-[419px] relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-white" />
                <img
                  className="h-4 w-4 relative rounded-lg overflow-hidden shrink-0 min-h-[16px] z-[4]"
                  loading="eager"
                  alt=""
                  src="/smartphone-1.svg"
                />
                <div className="relative capitalize font-light z-[4]">
                  contact number
                </div>
              </div>
            </div>
            <div className="w-[419px] flex flex-row items-start justify-start pt-0 px-0 pb-[25px] box-border max-w-full">
              <div className="flex-1 rounded-lg box-border flex flex-row items-start justify-start pt-[15px] px-[21px] pb-3.5 gap-[23px] max-w-full whitespace-nowrap z-[3] border-[1px] border-solid border-white">
                <div className="h-[46px] w-[419px] relative rounded-lg box-border hidden max-w-full border-[1px] border-solid border-white" />
                <img
                  className="h-[17px] w-4 relative rounded-lg overflow-hidden shrink-0 min-h-[17px] z-[4]"
                  loading="eager"
                  alt=""
                  src="/smartphone-2.svg"
                />
                <div className="relative capitalize font-light z-[4]">
                  Email Address
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[11px]">
              <button className="cursor-pointer [border:none] py-3.5 pr-[45px] pl-[46px] bg-mediumspringgreen flex flex-row items-center justify-center z-[3] hover:bg-mediumseagreen-100">
                <div className="h-[46px] w-[134px] relative bg-mediumspringgreen hidden" />
                <div className="relative text-xs capitalize font-semibold font-poppins text-white text-left z-[4]">
                  SUBMIT
                </div>
              </button>
            </div>
          </div>
        </div>
        <footer className="self-stretch bg-ghostwhite flex flex-col items-center justify-start pt-[155px] pb-[69px] pr-5 pl-[21px] box-border gap-[202px] max-w-full z-[4] mt-[-608px] text-left text-[25.5px] text-black font-gabriela lg:pt-[155px] lg:pb-[45px] lg:box-border mq450:gap-[50px] mq750:gap-[101px] mq750:pb-[29px] mq750:box-border">
          <div className="w-[1440px] relative bg-ghostwhite h-[1182px] hidden max-w-full" />
          <div className="flex flex-col items-center justify-start gap-[28px] max-w-full">
            <div className="flex flex-col items-center justify-start gap-[11px]">
              <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-4">
                <div className="h-9 relative capitalize font-medium inline-block z-[5] mq450:text-xl">{`Call us `}</div>
              </div>
              <button className="cursor-pointer [border:none] py-10 pr-[41px] pl-10 bg-gray-100 w-[109px] h-[108px] rounded-41xl flex flex-row items-center justify-center box-border z-[5]">
                <div className="h-[108px] w-[109px] relative rounded-41xl bg-gray-100 " />
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0 z-[6]"
                  alt=""
                  src="/call-1-1.svg"
                />
              </button>
            </div>
            <div className="h-[132px] relative text-[93.2px] capitalize inline-block z-[5] mq450:text-9xl mq1050:text-[47px]">
              <b>+ 022</b>
              <span> 506 47538</span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[15px]">
            <div className="h-[51px] w-[51px] relative rounded-41xl bg-mediumspringgreen z-[5]">
              <div className="absolute top-[0px] left-[0px] rounded-41xl bg-mediumspringgreen w-full h-full " />
              <img
                className="absolute top-[14px] left-[14px] w-[23px] h-[23px] overflow-hidden z-[6]"
                loading="eager"
                alt=""
                src="/twitter-3.svg"
              />
            </div>
            <div className="h-[51px] w-[51px] relative rounded-41xl bg-white z-[5]">
              <div className="absolute top-[0px] left-[0px] rounded-41xl bg-white w-full h-full " />
              <img
                className="absolute top-[12px] left-[12px] w-[27px] h-[27px] overflow-hidden z-[6]"
                loading="eager"
                alt=""
                src="/facebook-2.svg"
              />
            </div>
            <div className="h-[51px] w-[51px] relative rounded-41xl bg-white z-[5]">
              <div className="absolute top-[0px] left-[0px] rounded-41xl bg-white w-full h-full " />
              <img
                className="absolute top-[14px] left-[14px] w-6 h-6 overflow-hidden z-[6]"
                loading="eager"
                alt=""
                src="/instagram-2.svg"
              />
            </div>
          </div>
          <div className="w-[450px] flex flex-col items-center justify-start gap-[29px] max-w-full text-xl font-poppins">
            <div className="w-[155px] flex flex-row items-start justify-start py-0 pr-3 pl-0 box-border">
              <img
                className="h-32 flex-1 relative max-w-full  object-cover "
                alt=""
                src="/untitled3-1-1@2x.png"
              />
            </div>
            <h2 className="m-0  h-[30px] relative text-inherit capitalize  z-[5] font-inherit mq450:text-base">
              <span className="font-medium">{` © 2023 `}</span>
              <b>Piramal</b>
              <span className="font-medium">. ALL RIGHTS RESERVED.</span>
            </h2>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Desktop;
