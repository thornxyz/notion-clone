"use client";

import { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/actions";
import { SignIn } from "@clerk/nextjs";
import { Dialog, DialogContent } from "@/components/ui/dialog";

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [showSignInDialog, setShowSignInDialog] = useState(false);

  const handleCreateNewDocument = () => {
    startTransition(async () => {
      const response = await createNewDocument();
      if (response.error === "unauthenticated") {
        setShowSignInDialog(true);
      } else {
        router.push(`/doc/${response.docId}`);
      }
    });
  };

  return (
    <>
      <Button onClick={handleCreateNewDocument} disabled={isPending}>
        {isPending ? "Creating..." : "New Document"}
      </Button>

      <Dialog open={showSignInDialog} onOpenChange={setShowSignInDialog}>
        <DialogContent className="p-0 w-auto [&>button]:hidden">
          <SignIn routing="hash" />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default NewDocumentButton;
