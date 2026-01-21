"use client";

import { useState } from "react";
import ProductForm from "./ProductForm";
import { insertProduct } from "./actions";

export default function InsertProduct() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 left-1/2 -translate-x-1/2 z-10
          px-6 py-4 rounded-full font-bold uppercase
          bg-transparent hover:bg-foreground hover:text-background
          shadow-[inset_0_0_0_2px_#616467]
          transition duration-200
        "
      >
        Add Product
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
                absolute -top-10 -right-5 bg-red-600 text-white
                w-10 h-10 flex items-center justify-center rounded-full
                text-5xl leading-none shadow-lg hover:bg-red-700
              "
            >
              ×
            </button>

            {/* PRODUCT FORM */}
            <ProductForm
              initial={{
                name: "Test Product",
                price_dollars: "",
                price_cents: "",
                type: "perfume",
                gender_category: "unisex",
                stock: "0",
              }}
              action={insertProduct}
              showId={false}
              onClose={() => setOpen(false)}
            
            />

          </div>
        </div>
      )}
    </>
  );
}
