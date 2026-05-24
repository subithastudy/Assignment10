import { useState } from "react";

import productsData from "../data/products";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortOptions from "./SortOptions";

const ProductList = () => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sortOption, setSortOption] = useState("");

    let filteredProducts = productsData.filter((product) => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        return matchesSearch && matchesCategory;
    });

    // Sorting products based on price low to high
    if (sortOption === "low-high") {
        filteredProducts.sort(
            (a, b) => a.price - b.price
        );
    }

    // Sorting products based on price high to low
    if (sortOption === "high-low") {
        filteredProducts.sort(
            (a, b) => b.price - a.price
        );
    }

    // Sorting products based on rating
    if (sortOption === "rating") {
        filteredProducts.sort(
            (a, b) => b.rating - a.rating
        );
    }

    return (
        <div className="container">

            <div className="controls">

                {/* Display Search Bar */}
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                {/* Display Category Filter */}
                <CategoryFilter
                    category={category}
                    setCategory={setCategory}
                />

                {/* Display Sort Options */}
                <SortOptions
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                />

            </div>

            <div className="results-info">

                {
                    search && (
                        <h2>
                            Search Results for:
                            <span class="text-primary"> {search} </span>
                        </h2>
                    )
                }

                {/* Display number of items found */}
                <p class="text-dark fw-bold">
                    {filteredProducts.length}
                    {" "}
                    item(s) found
                </p>

            </div>

            {
                filteredProducts.length === 0 ? (

                    // Display message if serach item(s) is not found
                    <h2 className="no-items text-dark">
                        No items found
                    </h2>

                ) : (

                    <div className="product-grid">

                        {
                            filteredProducts.map((product) => (

                                // Display products if found
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />

                            ))
                        }

                    </div>

                )
            }

        </div>
    );
};

export default ProductList;