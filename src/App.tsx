import React from 'react';
import { Github, Twitter, Mail, PawPrint, Send } from 'lucide-react';
import SocialLink from './components/SocialLink';
import Avatar from './components/Avatar';
import BubbleBackground from './components/BubbleBackground';



function App() {
  return (
    <>
      <title>SkylarFem :3</title>
      <div className="min-h-screen relative overflow-hidden">
        <BubbleBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full space-y-8 py-12">
            <Avatar
              imageUrl="https://xskyyy.sirv.com/pfp.png"
              name="SkylarFem"
              title="Content Creator // Developer // Administrator"
            />

            <div className="space-y-4">
              <SocialLink
                icon={<PawPrint className="w-5 h-5" />}
                label="BlueSky"
                href="https://bsky.app/profile/skylar.pet"
              />
              <SocialLink
                icon={<Twitter className="w-5 h-5" />}
                label="Twitter"
                href="https://x.com/skylarfem"
              />
              <SocialLink
                icon={<Github className="w-5 h-5" />}
                label="Github"
                href="https://github.com/xskyyy"
              />
              <SocialLink
                icon={<Send className="w-5 h-5" />}
                label="Telegram Channel"
                href="https://t.me/skylarfemme"
              />
              <SocialLink
                icon={<Mail className="w-5 h-5" />}
                label="Email Me"
                href="mailto:sky@skylar.pet"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
