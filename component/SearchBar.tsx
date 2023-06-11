"use client";

import React, { useState } from "react";
import { SearchMenufacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearcButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [menufacturer, setMenufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (menufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(model.toLowerCase(), menufacturer.toLowerCase());
  };
  const updateSearchParams = (model: string, menufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (menufacturer) {
      searchParams.set("menufacturer", menufacturer);
    } else {
      searchParams.delete("menufacturer");
    }

    const newPathName = `${
      window.location.protocol
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenufacturer
          setMenufacturer={setMenufacturer}
          menufacturer={menufacturer}
        />
        <SearcButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearcButton otherClasses="sm:hidden" />
      </div>
      <SearcButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
