import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

function PaginationContainer() {

  //hooks
  const { meta } = useLoaderData();
  const navigate = useNavigate();
  const {search, pathname } = useLocation();

  // API data
  const {pageCount, page} = meta.pagination;
  console.log(page);
  const pages = Array.from({length: pageCount}, (_, index)=>{
    return index + 1;
  });

  const handlePageChange = (pageNumber)=>{
    const searchParams = new URLSearchParams(search);
    searchParams.set('path', pageNumber);
    // searchParams.set('_per_page', 10);
    navigate(`${pathname}?${searchParams.toString()}`);
  }

  if(pageCount  < 2) return null;


  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button className='btn btn-xs sm:btn-md join-item' onClick={()=>{
          const prev = page - 1;
          if(prev < 1){
            prev = 1;
          }
          handlePageChange(prev)} }>
          Prev
        </button>
        {
          pages.map( (pageNumber) => {
            return (<button key={pageNumber} className={`btn btn-xs sm:btn-md join-item ${pageNumber === page? 'bg-base-300 border-base-300' : ''}`} onClick={()=>{
                handlePageChange(pageNumber)
              }}>
              {pageNumber}
            </button>)
          })
        }
        <button className='btn btn-xs sm:btn-md join-item' onClick={()=>{ 
          const next = page + 1;

          if(next > pageCount) next = 1;

          handlePageChange(next) } }>
          Next
        </button>
      </div>

    </div>
  )
}

export default PaginationContainer