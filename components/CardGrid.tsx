interface Card {
  title: string;
  description: string;
  icon?: string;
}

interface CardGridProps {
  cards: Card[];
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ cards, columns = 3 }: CardGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {cards.map((card, index) => (
        <div key={index} className="card">
          {card.icon && (
            <div className="text-3xl mb-4">{card.icon}</div>
          )}
          <h3 className="text-xl font-semibold text-navy-800 mb-3">
            {card.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
