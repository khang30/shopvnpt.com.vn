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
                Website PGD Kinh doanh:{" "}
              </span>
              <span className="text-text">Trương Minh Tâm</span>
            </div>
            <div>
              <span className="block text-lg font-bold">Phòng bán hàng:</span>
              <span className="text-text">Khu vực Chợ Lớn</span>
            </div>
            <div>
              <span className="block text-lg font-bold">Địa chỉ:</span>
              <span className="text-text">
                Số 2 Hùng Vương, Phường 1, Quận 10, thành phố Hồ Chí Minh
              </span>
            </div>
            <div>
              <span className="block text-lg font-bold">Liên hệ: </span>
              <span className="text-text">
                Hotline: 0913999033 <br /> Mail: minhtam.hcm.hcm@vnpt.com
              </span>
            </div>
            <iframe
              src="https://goo.gl/maps/wyYmLTf8S7vh7o72A"
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
