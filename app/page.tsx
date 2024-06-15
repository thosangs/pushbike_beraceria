'use client';

import { Button, Link } from "@nextui-org/react";


export default function Home() {
  return (

    // <div className="container h-screen mx-auto flex justify-center items-center">
    //   <div className="overflow-x-auto w-full px-4 my-auto">
    //     <div className="flex flex-col gap-8 items-center w-full">
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="overflow-x-auto w-full px-4 py-8">
        <div className="flex flex-col gap-8 items-center">
          <Button href="/regulasi"
            as={Link}
            showAnchorIcon
            color="danger"
            variant="bordered"
            className="text-xl bold"
            style={{ width: "100%", height: "60px" }}
          >
            Regulasi
          </Button>
          <Button href="/jadwal"
            as={Link}
            showAnchorIcon
            color="primary"
            variant="bordered"
            className="text-xl bold"
            style={{ width: "100%", height: "60px" }}
          >
            Jadwal
          </Button>
          <Button href="/livescore"
            as={Link}
            showAnchorIcon
            color="success"
            variant="bordered"
            className="text-xl bold"
            style={{ width: "100%", height: "60px" }}
          >
            Livescore
          </Button>
        </div >
      </div >
    </div >
  );
}
