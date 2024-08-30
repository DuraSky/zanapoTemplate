import React, { useState, useEffect } from "react";
import { FilterComponent } from "./filterComponent/FilterComponent";
import { MobileFilterComponent } from "./mobileFilterComponent/MobileFilterComponent";
import { Product } from "./product/Product";
import { SortBar } from "./sortBar/SortBar";

import styles from "./productListing.module.scss";

export const ProductListing = ({
  filterCategories,
  handleCheckboxChange,
  filteredProducts,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container-fluid" id={styles.filterAndProducts}>
      <div className="row">
        {isMobile ? (
          <div className={`${styles.mobileButton} d-flex justify-content-end`}>
            <MobileFilterComponent
              filterCategories={filterCategories}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        ) : (
          <div className={`col-2`}>
            <FilterComponent
              filterCategories={filterCategories}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        )}
        <div className="col-12 col-md-10">
          {/* <div className="row"> */}
          <SortBar />
          {/* </div> */}
          <Product filteredProducts={filteredProducts} />
        </div>
      </div>
    </section>
  );
};
