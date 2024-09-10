const ButtonMain = ({ btnText, onClick }) => {
    return (
        <button
            onClick={() => onClick()}
            className="btn btn-outline uppercase px-8 border-0 border-b-2"
        >
            {btnText}
        </button>
    );
};

export default ButtonMain;
