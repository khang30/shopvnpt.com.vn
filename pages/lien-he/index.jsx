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
            <iframe
              src="https://maps.app.goo.gl/GBanhcQnUQ4abeLu6"
              width="full"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default LienHe;
