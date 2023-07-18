import Layout from "@/layouts/Layout";
import simvinaphone from "@/utils/simvinaphone";
import simvinaphone1 from "@/utils/simvinaphone1";
import simvinaphone2 from "@/utils/simvinaphone2";
import Link from "next/link";
import React from "react";

function Internet() {
  const data = simvinaphone;
  const data1 = simvinaphone1;
  const data2 = simvinaphone2;
  return (
    <Layout>
      <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
          <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className="border-b-2 inline-block pb-2 md:pb-4 lg:pb-6 border-main sm:pr-2 md:pr-4 lg:pr-6">
          1. vinaphone trả sau Thoại & Data
          </span>
        </h2>
        <div className="rounded-xl md:shadow-xl text-right p-0 md:p-4 lg:p-10">
            <div className="grid  md:grid-cols-3 grid-cols-2 mb-8 gap-2 md:gap-4 lg:gap-10">
            {data.map((value) => (
              <>
                <div className="border-[1px]  lg:hover:-translate-y-4 transition-all text-center shadow-2xl pb-4 rounded-xl overflow-hidden">
                      <h3 className="uppercase  p-4 bg-main text-white text-center font-bold font-family:Arial bg-[#1E73BE] text-sm md:text-xl lg:text-2xl ">
                    {value.goicuoc}
                  </h3>
                  <div className="border-b-2 mx-0 md:mx-4 lg:mx-6 py-2 md:py-4 lg:py-6">
                        <span className="block font-bold text-red-500 font-style: italic font-family:Arial text-sm md:text-lg lg:text-xl">
                      {value.giacuoc} VNĐ/Tháng
                    </span>
                    <span className="block font-semibold 	font-style: italic font-family:Arial text-xs md:text-sm lg:text-lg" >
                      Sim trả sau
                    </span>
                    {/* <span className="block font-semibold italic">
                      {value.noidung}
                    </span> */}
                  </div>

                  <div>
                  <span className="p-2 md:p-4 lg:p-6 flex flex-col gap-2 text-left font-family:Arial text-xs md:text-sm lg:text-lg">
                      <li>{value.noidung1}</li>
                      <li>{value.noidung2}</li>
                      <li>{value.noidung3}</li>
                      {/* <li className="text-red-500 font-style: normal font-family:Arial">Khuyến mãi đến 3 tháng cước</li> */}
                    </span>

                    <Link
                        href="https://zalo.me/0913999033"
                        target="_blank"
                        className="bg-main hover:bg-[#DC2323] hover:text-white  transition-all py-2 px-4 rounded-3xl mt-6 text-white uppercase bg-[#1E73BE] text-xs md:text-sm lg:text-lg"
                      >
                        Liên hệ ngay
                      </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
          <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className="border-b-2 inline-block pb-2 md:pb-4 lg:pb-6 border-main sm:pr-2 md:pr-4 lg:pr-6">
          2. vinaphone trả sau Thoại 
          </span>
        </h2>
        <div className="rounded-xl md:shadow-xl text-right p-0 md:p-4 lg:p-10">
            <div className="grid  md:grid-cols-3 grid-cols-2 mb-8 gap-2 md:gap-4 lg:gap-10">
            {data2.map((value) => (
              <>
                <div className="border-[1px]  hover:-translate-y-4 transition-all text-center shadow-2xl pb-4 rounded-xl overflow-hidden">
                      <h3 className="uppercase  p-4 bg-main text-white text-center font-bold font-family:Arial bg-[#1E73BE] text-sm md:text-xl lg:text-2xl ">
                    {value.goicuoc}
                  </h3>
                  <div className="border-b-2 mx-0 md:mx-4 lg:mx-6 py-2 md:py-4 lg:py-6">
                        <span className="block font-bold text-red-500 font-style: italic font-family:Arial text-sm md:text-lg lg:text-xl">
                    {value.giacuoc} VNĐ/Tháng
                    </span>
                    <span className="block font-semibold 	font-style: italic font-family:Arial text-xs md:text-sm lg:text-lg" >
                      Sim trả sau
                    </span>
                    {/* <span className="block font-semibold italic">
                      {value.noidung}
                    </span> */}
                  </div>

                  <div>
                  <span className="p-2 md:p-4 lg:p-6 flex flex-col gap-2 text-left font-family:Arial text-xs md:text-sm lg:text-lg">
                      {/* <li>{value.noidung1}</li> */}
                      <li>{value.noidung2}</li>
                      <li>{value.noidung3}</li>
                      {/* <li className="text-red-500 font-style: normal font-family:Arial">Khuyến mãi đến 3 tháng cước</li> */}
                    </span>

                    <Link
                        href="https://zalo.me/0913999033"
                        target="_blank"
                        className="bg-main hover:bg-[#DC2323] hover:text-white  transition-all py-2 px-4 rounded-3xl mt-6 text-white uppercase bg-[#1E73BE] text-xs md:text-sm lg:text-lg"
                      >
                        Liên hệ ngay
                      </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
          <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className="border-b-2 inline-block pb-2 md:pb-4 lg:pb-6 border-main sm:pr-2 md:pr-4 lg:pr-6">
          3. vinaphone trả sau Data
          </span>
        </h2>
        <div className="rounded-xl md:shadow-xl text-right p-0 md:p-4 lg:p-10">
            <div className="grid  md:grid-cols-3 grid-cols-2 mb-8 gap-2 md:gap-4 lg:gap-10">
            {data1.map((value) => (
              <>
                <div className="border-[1px]  hover:-translate-y-4 transition-all text-center shadow-2xl pb-4 rounded-xl overflow-hidden">
                      <h3 className="uppercase  p-4 bg-main text-white text-center font-bold font-family:Arial bg-[#1E73BE] text-sm md:text-xl lg:text-2xl ">
                    {value.goicuoc}
                  </h3>
                  <div className="border-b-2 mx-6 py-6 ">
                    <span className="block text-2xl font-bold text-red-500 font-style: italic font-family:Arial">
                    {value.giacuoc} VNĐ/Tháng
                    </span>
                    <span className="block font-semibold font-style: italic font-family:Arial">
                      Sim trả sau
                    </span>
                    {/* <span className="block font-semibold italic">
                      {value.noidung}
                    </span> */}
                  </div>

                  <div>
                    <span className="p-2 md:p-4 lg:p-6 flex flex-col gap-2 text-left font-family:Arial text-xs md:text-sm lg:text-lg">
                      <li>{value.noidung1}</li>
                      {/* <li>{value.noidung2}</li>
                      <li>{value.noidung3}</li> */}
                      {/* <li className="text-red-500 font-style: normal font-family:Arial">Khuyến mãi đến 3 tháng cước</li> */}
                    </span>

                    <Link
                        href="https://zalo.me/0913999033"
                        target="_blank"
                        className="bg-main hover:bg-[#DC2323] hover:text-white  transition-all py-2 px-4 rounded-3xl mt-6 text-white uppercase bg-[#1E73BE] text-xs md:text-sm lg:text-lg"
                      >
                        Liên hệ ngay
                      </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Internet;
