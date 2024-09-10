const AddToCartBtn = ({ onChange }) => {
    return (
        <button
            onChange={() => onChange()}
            className="btn bg-[#E8E8E8] text-[#BB8506] uppercase border border-t-0 border-x-0 border-b-2 border-b-[#BB8506] text-lg px-8"
        >
            Add to cart
        </button>
    );
};

export default AddToCartBtn;
