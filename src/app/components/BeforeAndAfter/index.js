import styles from "./beforeAndAfter.module.css";

export default function BeforeAndAfter() {
  const content = [
    {
      id: 1,
      video:
        "https://blissfulmethod.com/wp-content/uploads/SITE_BLISSFUL_1-1.mp4",
    },
    {
      id: 2,
      video:
        "https://blissfulmethod.com/wp-content/uploads/SITE_BLISSFUL_2.mp4",
    },
    {
      id: 3,
      video:
        "https://blissfulmethod.com/wp-content/uploads/SITE_BLISSFUL_3.mp4",
    },
  ];
  return (
    <div className="bg-cultured">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-5xl font-semibold text-aqua p-10">
          Inainte si dupa
        </h1>
        <div className="flex gap-5 p-5 pb-10 max-md:flex-wrap">
          {content.map((item) => (
            <div
              key={item.id}
              className={`${styles.videoBox} max-w-xs rounded-xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
            >
              <video autoPlay muted loop playsInline>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
