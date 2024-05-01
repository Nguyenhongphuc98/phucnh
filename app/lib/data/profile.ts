import { randomUUID } from "crypto";
import { ProfileModel } from "../type.ts/profile";

export const ProfileEvents: ProfileModel[] = [
  {
    id: randomUUID(),
    time: "November, 1998",
    event: "Hello world",
    description: "3 tháng biết nói, 6 tháng biết bò như bao bạn trẻ khác.",
  },
  {
    id: randomUUID(),
    time: "November, 2000",
    event: "Thay đổi phương thức ăn",
    description: "Từ bú sữa, uống nước gạo chuyển qua ăn cơm.",
  },
  {
    id: randomUUID(),
    time: "August, 2013",
    event: "Học cấp 3",
    description: "Xếp hạng 1 của lớp trong 3 năm liên tiếp.",
  },
  {
    id: randomUUID(),
    time: "August, 2014",
    event: "Học sinh giỏi cấp tỉnh",
    description:
      "Hên được thầy cho đi thi môn tin học, nhà không có máy tính nên ngày đêm tập gõ phím bằng chiếc bàn phím hư. Trời thương nên cho đậu 1 lần.",
  },
  {
    id: randomUUID(),
    time: "August, 2016",
    event: "Bắt đầu biết mùi vị của học bổng",
    description:
      "Từ 1 lần bén duyên nhận học bổng học tập của trường, có tiền để ăn, ở, nộp học phí nên ráng đi kiếm thêm vài cái nữa. Cụ thể là 19 lần trong lúc học ĐH.",
  },
  {
    id: randomUUID(),
    time: "August, 2017",
    event: "Lead CLB học tập",
    description:
      "Làm trưởng ban ban học tập khoa Công nghệ Phần mềm - UIT. Tổ chức training, seminar bổ trợ kiến thức cho SV",
  },
  {
    id: randomUUID(),
    time: "August, 2018",
    event: "Trợ giảng",
    description:
      "Giảng dạy các môn chuyên ngành (OOP, DSA). Gồm các lớp ở hệ Chính quy, Chất lượng cao, Tài năng. UIT-HCMC",
  },
  {
    id: randomUUID(),
    time: "August, 2018",
    event: "Tập tành bán mình cho tư bản",
    description:
      "Hí hửng làm cho Zalo SV 3 ngày. Nội công có hạn đi làm ngày gần 50km chịu không nổi, sốt cao -> xin nghỉ ngay trong đêm, chắc mấy ông manager ngao ngán lắm.",
  },
  {
    id: randomUUID(),
    time: "August, 2018",
    event: "Gõ code mobile, Zalo group",
    description: "Gõ code mobile cho Zalo mobile. Múa Objective-C, Swift.",
  },
  {
    id: randomUUID(),
    time: "August, 2021",
    event: "Gõ code desktop app, Zalo group",
    description:
      "Một lần nữa chuyển domain, qua làm desktop app. Sắp thành phun sờ tăc (overflow).",
  },
  {
    id: randomUUID(),
    time: "August, 2021",
    event: "Tốt nghiệp đại học",
    description: "Tốt nghiệp thủ khoa ngành Kỹ thuật Phần mềm, UIT-HCMC.",
  },
];
