"use client";

import { useState } from "react";
import ProductForm from "./ProductForm";
import { updateProduct } from "./actions";




export default function EditProduct({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          px-4 py-2 rounded-full font-bold uppercase
          bg-transparent hover:bg-foreground hover:text-background
          shadow-[inset_0_0_0_2px_#616467]
          transition duration-200
        "
      >
        Edit
      </button>

      {/* MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-background text-foreground py-8 px-2 rounded-xl shadow-2xl w-[90%] max-w-lg relative"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute -top-5 -right-5 bg-red-600 text-white
                w-10 h-10 flex items-center justify-center rounded-full
                text-5xl leading-none shadow-lg hover:bg-red-700
              "
            >
              ×
            </button>

            {/* PRODUCT FORM */}
            <ProductForm
              initial={{
                id: product.id,
                name: product.name,
                price_dollars: Math.floor(Number(product.price)),
                price_cents: String(product.price).split(".")[1] || "0",
                type: product.type,
                gender_category: product.gender_category,
                stock: product.stock,
              }}
              action={updateProduct}
              showId={true}
              onClose={() => setOpen(false)}
            />





          </div>
        </div>
      )}
    </>
  );
}
