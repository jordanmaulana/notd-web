import Link from "next/link";
import { JSDOM } from "jsdom";
import { getDomainName } from "@/lib/string_utility";
import Image from "next/image";
import { cache } from "react";

interface MetaTags {
  [key: string]: string;
}

interface ExtractedMeta {
  title?: string;
  description?: string;
  image?: string;
}

const extractMetaTags = cache(
  async (url: string): Promise<ExtractedMeta | undefined> => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const dom = new JSDOM(html);
      const document = dom.window.document;

      const metaTags: MetaTags = Array.from(
        document.querySelectorAll("meta"),
      ).reduce((tags: MetaTags, meta: HTMLMetaElement) => {
        const name =
          meta.getAttribute("name") ||
          meta.getAttribute("property") ||
          meta.getAttribute("itemprop");
        const content = meta.getAttribute("content");

        if (name && content) {
          tags[name] = content;
        }

        return tags;
      }, {});

      return {
        title:
          document.title || metaTags["og:title"] || metaTags["twitter:title"],
        description:
          metaTags["description"] ||
          metaTags["og:description"] ||
          metaTags["twitter:description"],
        image:
          metaTags["image"] ||
          metaTags["og:image"] ||
          metaTags["twitter:image"],
      };
    } catch (error) {
      console.error("Error fetching Open Graph details", error);
      return;
    }
  },
);

async function LinkPreview({ url }: { url: string }) {
  console.time("Link Render");
  const data = await extractMetaTags(url);
  console.timeEnd("Link Render");

  if (!data) {
    return <p>Failed to fetch link preview.</p>;
  }
  return (
    <Link
      href={url}
      target="_blank"
      className="flex h-[120px] w-full cursor-pointer items-center gap-3 rounded-xl border border-slate-50/20 text-left"
      style={{
        textDecoration: "none",
      }}
    >
      <div className="h-full w-[40%] object-cover">
        {data.image && (
          <Image
            src={data.image}
            alt="Link Preview"
            className="m-0 h-full w-[340px] rounded-l-lg border-[1px] border-slate-50/10 object-cover"
            width={340}
            height={120}
            objectFit="contain"
          />
        )}
      </div>
      <div className="w-[60%] p-4">
        <h3 className="mb-1 line-clamp-2 text-sm font-bold">{data.title}</h3>
        <p className="line-clamp-2 text-xs">{data.description}</p>
        <span className="text-xs opacity-50">{getDomainName(url)}</span>
      </div>
    </Link>
  );
}

export default LinkPreview;
