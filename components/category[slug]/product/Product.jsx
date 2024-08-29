import React from "react";

import styles from "./product.module.scss";

import { Label } from "../../carousel/labels/Label";

import Image from "next/image";
import Link from "next/link";

export const Product = ({ filteredProducts }) => {
  console.log("Gettting thisssss", filteredProducts);

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
            <p>{product.name}</p>

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
