import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-main p-0 md:p-6 text-white bg-[#1E73BE]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-col-2 grid-cols-1">
          <div>
            <h3 className="uppercase text-lg md:text-2xl mb-1 font-bold">
              Thông tin liên hệ
            </h3>
            <ul className="flex flex-col gap-2 text-sm md:text-lg ">
              <li>Website PGD Kinh doanh PBH: Trương Minh Tâm</li>
              <li>Phòng bán hàng: Khu vực Chợ Lớn VNPT HCM</li>
              <li>Địa chỉ: Số 2 Hùng Vương, Phường 1, Quận 10, TP. HCM </li>
              <li>Điện thoại liên hệ: 091.3999.033</li>
              <li>Email: minhtam.hcm@vnpt.vn</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="uppercase mb-1 font-bold text-lg md:text-2xl">
              Sản phẩm - Dịch vụ
            </h3>
            <ul className="flex flex-col gap-2 text-sm md:text-lg ">
              <li className="hover:translate-x-3 transition-all">
                <Link href="/internet-ca-nhan">Internet Cá Nhân</Link>
              </li>
              <li className="hover:translate-x-3 transition-all">
                <Link href="/internet-truyen-hinh">Internet & Truyền Hình</Link>
              </li>

              <li className="hover:translate-x-3 transition-all">
                <Link href="/internet-va-di-dong">Internet Combo</Link>
              </li>
              <li className="hover:translate-x-3 transition-all">
                <Link href="/internet-doanh-nghiep">Internet Doanh Nghiệp</Link>
              </li>
              <li className="hover:translate-x-3 transition-all">
                <Link href="/sim-vinaphone">Sim Vinaphone</Link>
              </li>
            </ul>
          </div>

          <div>
            <Image
              src="/logo-vnpt.jpg"
              alt="logo"
              width={130}
              height={33}
              className="w-auto mt-[15px]"
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-12 right-10 z-50">
        <Link href="https://zalo.me/0913999033" className="">
          <Image
            className="animate-bounce hover:opacity-70 transtion-all mb-4"
            src="/zl.png"
            width={44}
            height={44}
            alt=""
          />
        </Link>
        <Link href="tel:0913999033" className="">
          <Image
            className="hover:opacity-70 transtion-all"
            src="/telephone.png"
            width={44}
            height={44}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
