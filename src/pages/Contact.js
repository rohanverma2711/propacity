import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { googleSheetApi } from "../api-config";

import { propacityApi } from "../api-config";

const Contact = () => {
  const [success, setSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const navigate = useNavigate();

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleApi();
    handleSubmitSheet();
  };
  const handleApi = async () => {
    // API URL

    try {
      // Make a POST request to the API
      const response = await fetch(propacityApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        setSuccessMessage(true);

        // Optionally, you can reset the form or perform other actions upon successful submission
      } else {
        console.error(
          "Failed to submit lead:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const handleSubmitSheet = () => {
    axios.post(googleSheetApi, formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border gap-[53px] tracking-[normal] mq675:gap-[26px] mq800:flex-wrap mq800:pl-4 mq800:pt-4 mq800:pb-4 mq800:box-border font-poppins">
      <div className="h-screen flex-1 relative min-w-[344px] max-w-full mq450:min-w-full">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-dodgerblue w-[500px]">
          <div className="absolute top-[0px] left-[0px] bg-dodgerblue w-full h-full hidden" />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
            alt=""
            src="/image-136@2x.png"
          />
        </div>
        <img
          className="absolute top-[1px] left-[0px] w-full h-full object-cover z-[2]"
          loading="eager"
          alt=""
          src="/untitled1-2@2x.png"
        />
      </div>
      <div className="h-4 w-4 relative overflow-hidden shrink-0 hidden" />
      <div className="w-[500px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[402px] max-w-full mq450:min-w-full mq800:flex-1">
        {success ? (
          <>
            <div className="text-5xl ">Thanks for registering! </div>
            <div className="text-lgi">
              Our experts will get in touch with you shortly
            </div>
            <button
              className="cursor-pointer [border:none] mt-10 p-3 bg-gray-200 w-[326px] rounded-4xs overflow-hidden flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap hover:bg-slategray"
              onClick={() => navigate("/")}
            >
              <div className="w-[294px] relative text-[16px] leading-[16px] font-semibold font-poppins text-white text-center flex items-center justify-center">
                Back to Home Page
              </div>
            </button>
          </>
        ) : (
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full mq450:gap-[19px]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-end justify-start pt-[35px] px-0 pb-0 box-border relative max-w-full">
                <div className="w-[356px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[24px] max-w-full">
                  <h1 className="m-0 self-stretch h-12 relative text-[32px] tracking-[-0.5px] font-semibold font-poppins text-darkslategray text-left inline-block mq450:text-[19px] mq800:text-[26px]">
                    Book Site Tour
                  </h1>
                </div>
                <img
                  className="h-12 w-12 absolute my-0 mx-[!important] top-[0px] right-[0px] overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/cross.svg"
                />
              </div>
              <div className="relative text-gray-700">
                <label className="text-xs text-grey">Name</label>
                <input
                  className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 mt-4  pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.84364 7.99993C8.60877 7.99993 9.34257 7.69891 9.88361 7.16309C10.4246 6.62727 10.7286 5.90055 10.7286 5.14279C10.7286 4.38503 10.4246 3.6583 9.88361 3.12248C9.34257 2.58666 8.60877 2.28564 7.84364 2.28564C7.0785 2.28564 6.3447 2.58666 5.80367 3.12248C5.26263 3.6583 4.95868 4.38503 4.95868 5.14279C4.95868 5.90055 5.26263 6.62727 5.80367 7.16309C6.3447 7.69891 7.0785 7.99993 7.84364 7.99993ZM9.76694 5.14279C9.76694 5.64796 9.5643 6.13245 9.20361 6.48966C8.84293 6.84687 8.35373 7.04755 7.84364 7.04755C7.33354 7.04755 6.84434 6.84687 6.48366 6.48966C6.12297 6.13245 5.92033 5.64796 5.92033 5.14279C5.92033 4.63761 6.12297 4.15313 6.48366 3.79592C6.84434 3.43871 7.33354 3.23803 7.84364 3.23803C8.35373 3.23803 8.84293 3.43871 9.20361 3.79592C9.5643 4.15313 9.76694 4.63761 9.76694 5.14279ZM13.6135 12.7618C13.6135 13.7142 12.6519 13.7142 12.6519 13.7142H3.03538C3.03538 13.7142 2.07373 13.7142 2.07373 12.7618C2.07373 11.8095 3.03538 8.95231 7.84364 8.95231C12.6519 8.95231 13.6135 11.8095 13.6135 12.7618ZM12.6519 12.758C12.6509 12.5237 12.5038 11.819 11.8518 11.1733C11.2248 10.5523 10.0449 9.90469 7.84364 9.90469C5.64146 9.90469 4.46247 10.5523 3.83547 11.1733C3.18348 11.819 3.0373 12.5237 3.03538 12.758H12.6519Z"
                      fill="#333333"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative text-gray-700">
                <label className="text-xs text-grey">Email</label>
                <input
                  className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                  >
                    <path
                      d="M0.0737305 3.17984V7.98431C0.0737305 8.49791 0.279741 8.99047 0.646443 9.35363C1.01314 9.7168 1.5105 9.92082 2.02909 9.92082H9.85054C10.3691 9.92082 10.8665 9.7168 11.2332 9.35363C11.5999 8.99047 11.8059 8.49791 11.8059 7.98431V2.17479C11.8059 1.6612 11.5999 1.16864 11.2332 0.805471C10.8665 0.442306 10.3691 0.238281 9.85054 0.238281H2.02909C1.5105 0.238281 1.01314 0.442306 0.646443 0.805471C0.279741 1.16864 0.0737305 1.6612 0.0737305 2.17479V3.17984ZM2.02909 1.20654H9.85054C10.1098 1.20654 10.3585 1.30855 10.5419 1.49013C10.7252 1.67171 10.8282 1.91799 10.8282 2.17479V2.8913L5.93982 5.49784L1.05141 2.8913V2.17479C1.05141 1.91799 1.15442 1.67171 1.33777 1.49013C1.52112 1.30855 1.7698 1.20654 2.02909 1.20654ZM1.05141 3.99123L5.70811 6.47384C5.77932 6.51181 5.85894 6.53168 5.93982 6.53168C6.0207 6.53168 6.10031 6.51181 6.17153 6.47384L10.8282 3.99123V7.98431C10.8282 8.24111 10.7252 8.48739 10.5419 8.66897C10.3585 8.85056 10.1098 8.95257 9.85054 8.95257H2.02909C1.7698 8.95257 1.52112 8.85056 1.33777 8.66897C1.15442 8.48739 1.05141 8.24111 1.05141 7.98431V3.99123Z"
                      fill="#333333"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative text-gray-700">
                <label className="text-xs text-grey">Mobile</label>
                <input
                  className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.4873 1.95509L4.93647 2.11967C4.44517 2.26623 4.00639 2.54877 3.67178 2.934C3.33718 3.31924 3.12068 3.79114 3.04778 4.29414C2.81929 5.86976 3.33012 7.71205 4.56181 9.82481C5.79041 11.9322 7.14288 13.29 8.63152 13.8842C9.10983 14.0752 9.63343 14.126 10.1401 14.0308C10.6467 13.9356 11.1151 13.6983 11.4896 13.3471L11.9073 12.9555C12.1779 12.7016 12.3463 12.359 12.3811 11.9915C12.4159 11.6239 12.3148 11.2563 12.0965 10.957L11.0533 9.52462C10.9123 9.33124 10.7137 9.18642 10.4854 9.11045C10.257 9.03448 10.0104 9.03118 9.78012 9.101L8.20224 9.57871L8.16147 9.58633C7.9876 9.61147 7.58678 9.2389 7.08672 8.381C6.56358 7.48348 6.45434 6.95852 6.59897 6.8229L7.40214 6.08157C7.69544 5.81059 7.89574 5.45549 7.97493 5.06607C8.05413 4.67664 8.00825 4.27243 7.84374 3.91014L7.33598 2.78938C7.18281 2.45178 6.9108 2.18094 6.57075 2.02741C6.2307 1.87389 5.84586 1.84818 5.48807 1.95509H5.4873ZM6.63359 3.10176L7.14211 4.22252C7.241 4.43984 7.26865 4.68238 7.22118 4.91607C7.17371 5.14975 7.05351 5.36284 6.87747 5.52538L6.07276 6.26748C5.55731 6.74976 5.7281 7.5749 6.41972 8.76195C7.07134 9.8789 7.66525 10.4305 8.30302 10.3345L8.39842 10.3147L10.0048 9.82938C10.0815 9.80602 10.1638 9.80705 10.2399 9.83233C10.3161 9.85761 10.3824 9.90587 10.4294 9.97033L11.4726 11.4027C11.5819 11.5524 11.6325 11.7363 11.6151 11.9201C11.5977 12.104 11.5134 12.2754 11.378 12.4023L10.9603 12.794C10.6928 13.0446 10.3583 13.214 9.99649 13.2819C9.63469 13.3499 9.2608 13.3135 8.91925 13.1772C7.61294 12.656 6.37818 11.4164 5.22804 9.44386C4.0756 7.46671 3.60939 5.78519 3.80941 4.40233C3.86145 4.04295 4.01611 3.70578 4.25518 3.43054C4.49425 3.15531 4.80777 2.95347 5.1588 2.84881L5.7104 2.68424C5.88924 2.63102 6.08152 2.64403 6.25138 2.72085C6.42124 2.79768 6.55709 2.93306 6.63359 3.10176Z"
                      fill="#333333"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] p-3 bg-gray w-[326px] rounded-8xs overflow-hidden flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap hover:bg-slategray"
              onClick={handleSubmit}
            >
              <div className="w-[294px] relative text-[16px] leading-[16px] font-semibold font-poppins text-white text-center flex items-center justify-center">
                Book Now
              </div>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
