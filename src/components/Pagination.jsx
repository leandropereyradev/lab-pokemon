import { onTop } from "../script/scripts";

const Pagination = ({
  pkmsPerPage,
  currentPage,
  setCurrentPage,
  totalPkms,
}) => {
  const pageNurmers = [];

  for (let i = 1; i <= Math.ceil(totalPkms / pkmsPerPage); i++) {
    pageNurmers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);

    onTop();
  };

  const onNextPage = () => {
    setCurrentPage((prev) => prev + 1);

    onTop();
  };

  const onSelectedPage = (numPage) => {
    setCurrentPage(numPage);

    onTop();
  };

  return (
    <nav className="pagination-container">
      {totalPkms && (
        <>
          <button
            className="btn-direction"
            onClick={onPreviousPage}
            disabled={currentPage === 1 && true}
          >
            Previous
          </button>
          <ul>
            {pageNurmers.map((numPage) => (
              <li key={numPage}>
                <button
                  className={`${numPage === currentPage && "active"}`}
                  onClick={() => onSelectedPage(numPage)}
                >
                  {numPage}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="btn-direction"
            onClick={onNextPage}
            disabled={currentPage >= pageNurmers.length && true}
          >
            Next
          </button>
        </>
      )}
    </nav>
  );
};

export default Pagination;
