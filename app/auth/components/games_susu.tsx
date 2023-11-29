/* eslint-disable @next/next/no-img-element */
import { games } from "@/data/gamelist"

export default function GameListPage() {

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map((game) => (
        <li key={game.id} className="bg-white p-4 rounded shadow">
          
          <img src={game.thumbnail} alt={game.title} className="mb-2 w-full h-32 object-cover" />
          <h2 className="text-xl font-bold">{game.title}</h2>
          <p className="text-gray-700 mb-2">{game.short_description}</p>
          <a href={game.game_url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Play Game
          </a>
        </li>
      ))}
    </ul>
    )

}