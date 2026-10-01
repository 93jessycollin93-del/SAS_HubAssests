"use client";

import PixelDistortion from "@/components/pixel-perfect/shaders/pixel-distortion";
import VoiceRecorder from "../../../registry/new-york/motion-framer/voice-recorder";

const Page = () => {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-white">
      <PixelDistortion
        image="/hello-cvo.svg"
        className="absolute inset-0 z-0 h-full w-full"
        grid={20}
        strength={0.02}
        relax={0.94}
        force={42}
      />
      <VoiceRecorder avatarUrl="/pfp.png" />
    </div>
  );
};

export default Page;
