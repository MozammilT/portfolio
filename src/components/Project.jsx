import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { AnimatePresence } from "motion/react";
import { LinkPreview } from "@/components/link-preview";

const Project = ({
  name,
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <LinkPreview url={href} className="text-white">
            <p className="text-3xl font-semibold text-white">{name}</p>
            <p className="text-xl text-neutral-300 mt-2">{title}</p>
          </LinkPreview>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <AnimatePresence>
        {isHidden && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            closeModal={() => setIsHidden(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
