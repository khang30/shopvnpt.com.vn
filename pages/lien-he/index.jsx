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
              <span className="text-text">Khu vực Chợ Lớn VNPT HCM</span>
            </div>
            <div>
              <span className="block text-lg font-bold">Địa chỉ:</span>
              <span className="text-text">
                Số 2 Hùng Vương, Phường 1, Quận 10, Thành phố Hồ Chí Minh
              </span>
            </div>
            <div>
              <span className="block text-lg font-bold">Liên hệ: </span>
              <span className="text-text">
                Hotline: 0913.999.033 <br /> Mail: minhtam.hcm@vnpt.vn
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6154964461007!2d106.6789866!3d10.764087700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1e617e7577%3A0xb47d54b07c95b307!2zMiDEkC4gSMO5bmcgVsawxqFuZywgUGjGsOG7nW5nIDEsIFF14bqtbiAxMCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1694070360705!5m2!1svi!2s"
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
