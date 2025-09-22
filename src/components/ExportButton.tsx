import { Button, DownloadTrigger, FormatByte } from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";

export function ExportButton() {
  const data = "alisson koerich"

  return (
    <DownloadTrigger
      data={data}
      fileName="sample.txt"
      mimeType="text/plain"
      asChild
    >
      <Button variant="outline">
        <LuDownload />
      </Button>
    </DownloadTrigger>
  );
}
