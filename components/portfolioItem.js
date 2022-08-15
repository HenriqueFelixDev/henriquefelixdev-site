import { ButtonLink } from "./button";

export default function PortfolioItem({ type, title, url, image }) {
    return (
      <article className="shadow-lg rounded-md overflow-clip w-72" data-aos="zoom-in">
        <img className="h-48 w-full object-cover" src={image} alt={`Print de ${title}`} />
        <div className="px-4 py-2">
          <div>
            <h3 className="text-gray-400">{ type }</h3>
          </div>
          <p className="text-xl">{ title }</p>
          <ButtonLink
              className="my-2"
              href={url}
              target="_new"
              >
                Acessar
          </ButtonLink>
        </div>
      </article>
    )
}