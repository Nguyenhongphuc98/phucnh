import { ProfileEvents } from "../lib/data/profile";
import ProfileEventCard from "../ui/profile-event-card";

export default function About() {
  return (
    <div className="px-10">
      <p className="py-10">Hello, chào mừng bạn đến với trang của Phúc. 🫣
🫡</p>
      <h1 className="text-3xl text-sky-500">Hành trình bán mình cho tư bản</h1>
      <div className="flex m-2">
        <div className="w-1 h-10 bg-slate-500"></div>
        <p className="mb-16 m-4 italic">
          Tuy không phải con nhà người ta nhưng mà cũng đã cố gắng hết sức 🥹
        </p>
      </div>

      {ProfileEvents.map((e) => (
        <ProfileEventCard key={e.id} event={e} />
      ))}
    </div>
  );
}
