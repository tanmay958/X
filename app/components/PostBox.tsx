"use client";

import Image from "next/image";
import { LuFileImage } from "react-icons/lu";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Chain } from "@/client/zeus";
import axios from "axios";
const chain = Chain("http://localhost:8000/graphql");

export default function PostBox({ session }: any) {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const queryClient = useQueryClient();

  const handleInputChangeFile = useCallback((input: HTMLInputElement) => {
    return async (event: Event) => {
      event.preventDefault();
      const file: File | null | undefined = input.files?.item(0);
      if (!file) return;

      const { getPreSignUrl } = await chain("query")({
        getPreSignUrl: [
          {
            id: Number(session.id),
            imageType: file.type,
          },
          true,
        ],
      });
      if (getPreSignUrl) {
        toast.loading("Uploading...", { id: "2" });
        await axios.put(getPreSignUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
        toast.success("Upload Completed", { id: "2" });
        const url = new URL(getPreSignUrl);
        const myFilePath = `${url.origin}${url.pathname}`;
        setImageURL(myFilePath);
      }
    };
  }, []);
  const handleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    const handlerFn = handleInputChangeFile(input);

    input.addEventListener("change", handlerFn);

    input.click();
  }, [handleInputChangeFile]);

  const { mutateAsync: submitTweet, isPending } = useMutation({
    mutationFn: async () => {
      try {
        const data = await chain("mutation")({
          createTweet: [
            {
              payload: {
                content: input,
                imageUrl: imageURL,
                userid: Number(session.id),
              },
            },
            {
              id: true,
            },
          ],
        });
      } catch (err) {
        console.log(err);
      }
    },
    onSuccess: () => {
      toast.success("posted sucessfully");
      setInput("");
      setImageURL("");
      queryClient.invalidateQueries({ queryKey: ["use-Tweets"] });
    },
    onError: () => {
      toast.error("try again");
    },
  });
  return (
    <div className="grid grid-cols-12 pb-5 pt-2 border-b border-slate-800">
      <div className="col-span-1 py-2 pl-2">
        <Image
          src={session.user.image}
          alt="nothing"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="col-span-10 px-2 pt-2  border-b border-slate-700 max-h-[80vh]">
        <textarea
          placeholder={"What is Happing?!"}
          id="myTextbox"
          value={input}
          className={`bg-transparent w-full focus:outline-none text-xl ${
            isPending ? "pointer-events-none" : ""
          }`}
          // className="bg-transparent w-full focus:outline-none text-xl "
          rows={4}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      {imageURL && (
        <Image
          src={imageURL}
          alt="tweet-image"
          width={300}
          height={300}
          className="col-span-10 rounded-lg shadow-md w-fit h-fit col-start-2"
        />
      )}
      <div className="col-span-10  col-start-2 px-2 pt-2">
        <div className="flex justify-between items-center">
          <div className="text-[#1D9BF0] text-xl">
            <LuFileImage onClick={handleSelectImage} />
          </div>
          <div>
            <button
              // className="px-3 py-1 bg-[#1D9BF0] rounded-full font-extrabold  "
              onClick={() => {
                submitTweet();
              }}
              className={`px-3 py-1 bg-[#1D9BF0] rounded-full font-extrabold ${
                isPending || input.length === 0
                  ? "opacity-50 pointer-events-none"
                  : ""
              }`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
