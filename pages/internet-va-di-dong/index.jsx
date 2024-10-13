import Layout from "@/layouts/Layout";
import InternetDiDong from "@/utils/indidong";
import InternetDiDong1 from "@/utils/indidong copy";
import InternetDiDong2 from "@/utils/indidong_2";
import Link from "next/link";
import React from "react";

function Internet() {
  const data = InternetDiDong;
  const data1 = InternetDiDong1;
  const data2 = InternetDiDong2;
  return (
    <Layout>
      <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
          <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className="border-b-2 inline-block pb-2 md:pb-4 lg:pb-6 border-main sm:pr-2 md:pr-4 lg:pr-6">
          Internet & Di Động
          </span>
        </h2>
        <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
            <h2 className="text-lg md:text-xl lg:text-2xl ">
            <ul className=" py-2 md:py-4 md:p-4 border-main font-family:Arial gap-2 text-justify">
            <li>&emsp; VNPT Home Sành là gói cước internet và điện thoại của VNPT, không bao gồm dịch vụ truyền hình. Gói này cung cấp tốc độ internet cao và dịch vụ điện thoại đáng tin cậy để đáp ứng nhu cầu liên lạc và truy cập 4G của gia đình. VNPT Home Sành giúp người dùng trải nghiệm công nghệ tiện ích và đáng tin cậy tại nhà. Dưới đây là bảng giá mới nhất:</li>
              </ul>
          </h2>
          </div>
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
                      Tốc độ: {value.bangthong}
                    </span>
                    <span className="block font-semibold 	font-style: italic font-family:Arial text-xs md:text-sm lg:text-lg">
                      {value.noidung}
                    </span>
                  </div>

                  <div>
                  <ul className="p-2 md:p-4 lg:p-6 flex flex-col gap-2 text-left font-family:Arial text-xs md:text-sm lg:text-lg">
                      <li>Modem Wifi 2 băng tần</li>
                      <li>Dịch vụ an toàn GreenNet</li>
                      <li>Lắp đặt nhanh trong ngày</li>
                      <li className="text-red-500 font-style: normal font-family:Arial">Khuyến mãi lên đến 2 tháng cước</li>
                    </ul>
                    <Link
                        href="https://zalo.me/0913887868"
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
