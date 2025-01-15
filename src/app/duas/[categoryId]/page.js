export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/categories");
  const categories = await res.json();

  const paths = categories.map((category) => ({
    params: { categoryId: category.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/subcategories?categoryId=${params.categoryId}`
  );
  const subcategories = await res.json();

  return {
    props: { subcategories },
  };
}
