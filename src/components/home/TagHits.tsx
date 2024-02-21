import Link from "next/link";

function TagHits({ tags }: { tags: string[] }) {
  return (
    <div>
      <h3 className="text-[16px] font-semibold">#แท็กฮิต</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Link
            href="#"
            key={index}
            className="inline-flex rounded-full bg-color-primary/5 px-3 py-2 hover:text-color-primary"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TagHits;
