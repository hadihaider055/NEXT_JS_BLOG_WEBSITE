import Image from "next/image";
import Link from "next/link";

export default function CardComponent({ blog }) {
  const { title, description, category, author, date, thumbnail, slug } =
    blog.fields;
  return (
    <Link href={`blogs/${slug}`}>
      <div className="cursor-pointer rounded-lg w-72 mt-6 overflow-hidden mx-auto">
        <div className="card-body">
          <Image
            src={"https:" + thumbnail.fields.file.url}
            alt={thumbnail.fields.title}
            width={288}
            height={250} 
            placeholder="blur"
            blurDataURL={"https:" + thumbnail.fields.file.url}
          />
          <div className="p-4 border border-t-0 border-indigo-400">
            <div className="bg-gray-200 max-w-full p-1">
              <p>{category}</p>
            </div>
            <h5 className="card__title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="flex item-center justify-between mt-5">
              <p className="text-gray-500 font-light text-sm">{author}</p>
              <p className="text-gray-500 font-light text-sm">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
