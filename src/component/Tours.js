
import Cards from './Cards';

export default function Tours({tours,removeTour}) {
  
  return (
    <div className="container">
        <div>
        <h2 className="title">Tour With Us</h2>
        </div>
        <div className='cards'>
            {
             tours.map( (tour) => {
                return <Cards  key={tour.id } {...tour} removeTour={removeTour}></Cards>

             })

            
            }

        </div>

      
      
    </div>
  )
}
