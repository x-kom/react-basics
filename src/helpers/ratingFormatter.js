const ratingFormatter = (rating) => (
    rating.toFixed(1).replace('.', ',')
);

export default ratingFormatter;
