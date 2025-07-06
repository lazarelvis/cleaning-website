"use client";

export default function TikTokEmbed() {
  return (
    <div className="flex items-center">
      <div
        className={` max-w-xs rounded-xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
      >
        <video autoPlay muted loop playsInline>
          <source src="/katy-basarabia-cleaning.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
