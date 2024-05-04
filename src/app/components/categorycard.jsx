import { useRouter } from "next/navigation";

const CategoryCard = (props) => {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`categories/${category}`);
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg cursor-pointer">
      <div className="p-4">
        <h2
          className="text-gray-800 text-lg font-semibold "
          onClick={() => handleCategoryClick(props.category)}
        >
          {props.category}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;
