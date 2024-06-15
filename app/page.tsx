'use client';

import { Button, Link } from "@nextui-org/react";


export default function Home() {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="overflow-x-auto">
        <div className="flex flex-col gap-4 items-center">
          <Button href="/regulasi"
            as={Link}
            showAnchorIcon
            color="primary"
            variant="bordered"
            style={{ width: "100%", height: "60px" }}
          >
            Regulasi
          </Button>
          <Button href="/jadwal"
            as={Link}
            showAnchorIcon
            color="primary"
            variant="bordered"
            style={{ width: "100%", height: "60px" }}
          >
            Jadwal
          </Button>
          <Button href="/livescore"
            as={Link}
            showAnchorIcon
            color="primary"
            variant="bordered"
            style={{ width: "100%", height: "60px" }}
          >
            Livescore
          </Button>
        </div>
      </div>
    </div>
  );
}
