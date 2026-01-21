"use client";



import { deleteProduct } from "./actions";

type ProductFormProps = {
  initial: {
    id?: number;
    name: string;
    price_dollars: string | number;
    price_cents: string | number;
    type: "perfume" | "bag" | "watch" | "other";
    gender_category: "men" | "women" | "unisex";
    stock: number | string;
  };
  action: (formData: FormData) => Promise<void>;
  showId?: boolean;
  onClose?: () => void;
};

export default function ProductForm({
  initial,
  action,
  showId,
  onClose,
}: ProductFormProps) {
  const rowClass = "border-b px-4 py-";

  return (
    <form
      action={action}
      onSubmit={onClose}
      encType="multipart/form-data"
      className="flex flex-col gap-4 px-0"
    >
      {showId && initial.id !== undefined && (
        <>
          <div className="bg-background text-gray-400 rounded  text-xl p-0">
            <span className="font-bold ">ID: </span> {initial.id}
          </div>
          <input type="hidden" name="id" value={initial.id} />
        </>
      )}
      <div
        className="
          w-full 
          max-h-[70vh]
          overflow-y-auto
          bg-background 
          border border-border 
          rounded-xl 
          shadow-xl 
          px-5
          py-6
          space-y-6
        "
      >
        {/* NAME */}
        <div className="rowClass">
          <span className="font-bold block mb-2">NAME</span>
          <input
            type="text"
            name="name"
            defaultValue={initial.name}
            placeholder="Test Product"
            className="border p-2 rounded w-full text-center text-xl"
            required
          />
        </div>

        {/* PRICE */}
        <div className="rowClass">
          <span className="font-bold block mb-2">PRICE</span>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="price_dollars"
              defaultValue={initial.price_dollars}
              placeholder="$ DOLLAR"
              className="border p-2 rounded text-center text-xl"
            />

            <input
              type="text"
              name="price_cents"
              defaultValue={initial.price_cents}
              placeholder="CENT"
              className="border p-2 rounded text-center text-xl"
            />
          </div>
        </div>

        {/* STOCK */}
        <div className="rowClass">
          <span className="font-bold block mb-2">STOCK</span>
          <input
            type="number"
            name="stock"
            min={0}
            defaultValue={initial.stock}
            placeholder="STOCK"
            className="border p-2 rounded w-full text-center text-xl"
            required
          />
        </div>

        {/* TYPE */}
        <div className="rowClass">
          <span className="font-bold block mb-2">TYPE</span>
          <select
            name="type"
            defaultValue={initial.type}
            className="border p-2 rounded w-full text-center text-xl"
          >
            <option value="perfume">Perfume</option>
            <option value="bag">Bag</option>
            <option value="watch">Watch</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* GENDER */}
        <div className="rowClass">
          <span className="font-bold block mb-2">GENDER</span>
          <select
            name="gender_category"
            defaultValue={initial.gender_category}
            className="border p-2 rounded w-full text-center text-xl"
          >
            <option value="unisex">Unisex</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>

        {/* IMAGES */}
        <div className="rowClass">
          <span className="font-bold block mb-2">IMAGES</span>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            className="border p-2 rounded w-full"
          />
        </div>




      {/* DELETE PRODUCT */}
      {showId && initial?.id && (
        <div className={""}>
          <input type="hidden" name="id" value={initial.id} />

          <button
            formAction={deleteProduct}
            type="submit"
            className="
              px-15 py-2 rounded-md text-md font-semibold
              bg-red-600 text-white hover:bg-red-700
              transition
            "
          >
            Delete Product
          </button>
        </div>
      )}


      </div>

      <button
        type="submit"
        className="px-12 py-4 rounded-full font-bold uppercase bg-transparent hover:bg-foreground hover:text-background shadow-[inset_0_0_0_2px_#616467] transition"
      >
        {showId ? "SAVE CHANGES" : "ADD PRODUCT"}
      </button>












    </form>
  );
}
