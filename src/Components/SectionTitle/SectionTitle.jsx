/* eslint-disable react/prop-types */
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="font-mono text-yellow-600 text-xl font-semibold mb-2">{subHeading}</p>
            <h3 className="text-3xl uppercase font-bold py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;