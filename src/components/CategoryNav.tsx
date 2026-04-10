interface CategoryNavProps {
  filter: string;
  onFilterChange: (category: string) => void;
}

const categories = [
  { id: "all", label: "All" },
  { id: "breaking", label: "Breaking" },
  { id: "technology", label: "Technology" },
  { id: "entertainment", label: "Entertainment" },
  { id: "fashion", label: "Fashion" },
  { id: "world", label: "World" },
  { id: "health", label: "Health" },
  { id: "religion", label: "Religion" },
  { id: "weather", label: "Weather" },
  { id: "politics", label: "Politics" },
  { id: "culture", label: "Culture" },
];

export default function CategoryNav({ filter, onFilterChange }: CategoryNavProps) {
  return (
    <div className="overflow-x-auto no-scrollbar bg-primary-foreground/5">
      <nav className="flex gap-1 px-3 py-2 min-w-max mx-auto w-fit">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onFilterChange(cat.id)}
            className={`nav-pill ${filter === cat.id ? "active" : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
