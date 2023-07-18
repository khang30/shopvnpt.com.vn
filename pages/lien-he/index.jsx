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
                Website bán hàng của NVKD:{" "}
              </span>
              <span className="text-text">Trương Minh Tâm</span>
            </div>
            <div>
              <span className="block text-lg font-bold">Phòng bán hàng:</span>
              <span className="text-text">Khu vực Sài Gòn</span>
            </div>
            <div>
              <span className="block text-lg font-bold">Địa chỉ:</span>
              <span className="text-text">
                69 Ngô Tất Tố, phường 21, quận Bình Thạnh, thành phố Hồ Chí Minh
              </span>
            </div>
            <div>
              <span className="block text-lg font-bold">Liên hệ: </span>
              <span className="text-text">
                Hotline: 0913999033 <br /> Mail: minhtam.hcm.hcm@vnpt.com
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2378256395837!2d106.70907197490799!3d10.79308838935664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b209d28f4f%3A0x78fab096ed849269!2zNjkgTmcuIFThuqV0IFThu5EsIFBoxrDhu51uZyAyMSwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1684072046472!5m2!1svi!2s"
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
