import Layout from "@/layouts/Layout";
import React from "react";

function LienHe() {
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <h2 className="text-2xl uppercase text-text font-semibold text-gray-900">
            Liên hệ
          </h2>

          <div className="flex flex-col gap-5 pt-10">
            <div>
              <span className="block text-lg font-bold">
                Website CV Kinh doanh:{" "}
              </span>
              <span className="text-text">Nguyễn Hữu Tòng</span>
            </div>
            <div>
              <span className="block text-lg font-bold">Đơn vị:</span>
              <span className="text-text">Trung Tâm Viễn thông Hóc Môn - Quận 12 VNPT HCM</span>
            </div>
            <div>
              <span className="block text-lg font-bold">Địa chỉ:</span>
              <span className="text-text">
                12 Bùi Công Trừng, Ấp 3, Xã Nhị Bình, Huyện Hóc Môn, TP HCM
              </span>
            </div>
            <div>
              <span className="block text-lg font-bold">Liên hệ: </span>
              <span className="text-text">
                Hotline: 0913887868 <br /> Mail: 
              </span>
            </div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.748387726419!2d106.68336717428926!3d10.906716948043353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7b0f0ba245b%3A0xe73d55e6dd497ff2!2zMTIgQsO5aSBDw7RuZyBUcuG7q25nLCBOaOG7iyBCw6xuaCwgSMOzYyBNw7RuLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1728789467571!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default LienHe;
