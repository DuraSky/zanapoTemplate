import React from "react";

import styles from "./product.module.scss";

import { Label } from "../../carousel/labels/Label";

import Image from "next/image";
import Link from "next/link";
import { Ratings } from "../../carousel/ratings/Ratings";

export const Product = ({ filteredProducts }) => {
  //console.log("Gettting thisssss", filteredProducts);

  return (
    <div className={`${styles.allProducts}`}>
      {filteredProducts.map((product) => (
        <div className={styles.product} key={product.variant_id}>
          <Link href={"#"}>
            <Image
              src={`https://zanapo.cz/${product.image}`}
              width={100}
              height={100}
              alt={product.name}
            />
            <div>
              <p>{product.name}</p>
              <p>{product.description_short}</p>
            </div>

            <Ratings
              ratingAverage={product.rating_average}
              ratingCount={product.rating_count}
            />

            <div>
              <p>{product.price_f}</p>
              <button>Koupit</button>
            </div>

            <div style={{ color: product.availability_color }}>
              <p>{product.availability_text}</p>
              <p>Můžete mít v pondělí 2. 9.</p>
            </div>
            <div className={styles.labelsContainer}>
              {product.labels &&
                product.labels.map((label, labelIndex) => (
                  <Label
                    key={labelIndex}
                    title={label.title}
                    color={label.color}
                  />
                ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
