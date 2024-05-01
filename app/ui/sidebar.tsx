import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-1/6 h-fit hidden lg:block min-w-64 border-r-2 p-5 flex-col justify-center sticky top-14">
      <Image
        className="rounded-full"
        src="/buffalo.jpg"
        alt="avt"
        width={100}
        height={100}
      />
      <div className="">
        Tui là Phúc, sinh ra ở Hà Tĩnh. Nhà không có nhiều điều kiện lắm nên tìm
        đường vô Sài Gòn học. Cứ tưởng học xong sau này sẽ trở thành ông nọ bà
        kia, nhưng cuộc đời đưa đẩy giờ đang làm thằng tạo bugs cho Zalo. Trang
        này để tui viết lại 1 ít kiến thức giải trí những lúc xì chét. Với lâu
        lâu có cái xem lại, chứ nơ ron thần kinh yếu hay quên.
      </div>
      <div className="flex flex-row justify-end mt-4">
        <div>
            nguyenhongphuc98
        </div>
        <Image
            className="ml-2"
            src='/icons8-mail-24.png'
            width={24}
            height={24}
            alt="gmail"
        />
      </div>
    </div>
  );
}
