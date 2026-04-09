interface CategoryNavProps {
  filter: string;
  onFilterChange: (category: string) => void;
}

const categories = [
  { id: "all", label: "All" },
  { id: "breaking", label: "Breaking" },
  { id: "health", label: "Health" },
  { id: "religion", label: "Religion" },
  { id: "weather", label: "Weather" },
  { id: "politics", label: "Politics" },
  { id: "culture", label: "Culture" },
];

export default function CategoryNav({ filter, onFilterChange }: CategoryNavProps) {
  return (
    <nav className="flex justify-center gap-1 px-4 py-2 bg-primary-foreground/5 overflow-x-auto no-scrollbar">
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
  );
}
