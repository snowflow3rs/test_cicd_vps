import  { useState } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const MovieWebsite = () => {
  const allMovies = [
    { id: 1, title: 'The Matrix', year: 1999, rating: 8.7, description: 'A computer programmer discovers a mysterious world...' },
    { id: 2, title: 'Inception', year: 2010, rating: 8.8, description: 'A thief who enters the dreams of others...' },
    { id: 3, title: 'Interstellar', year: 2014, rating: 8.6, description: 'Astronauts travel through a wormhole...' },
    { id: 4, title: 'The Dark Knight', year: 2008, rating: 9.0, description: 'Batman faces his greatest challenge...' },
    { id: 5, title: 'Pulp Fiction', year: 1994, rating: 8.9, description: 'Various interconnected crime stories...' },
    { id: 6, title: 'Fight Club', year: 1999, rating: 8.8, description: 'An insomniac office worker forms an underground club...' },
    { id: 7, title: 'Forrest Gump', year: 1994, rating: 8.8, description: 'The life journey of a man with low IQ...' },
    { id: 8, title: 'The Godfather', year: 1972, rating: 9.2, description: 'The aging patriarch of a crime dynasty...' },
    { id: 5, title: 'Pulp Fiction', year: 1994, rating: 8.9, description: 'Various interconnected crime stories...' },
    { id: 6, title: 'Fight Club', year: 1999, rating: 8.8, description: 'An insomniac office worker forms an underground club...' },
    { id: 7, title: 'Forrest Gump', year: 1994, rating: 8.8, description: 'The life journey of a man with low IQ...' },
    { id: 8, title: 'The Godfather', year: 1972, rating: 9.2, description: 'The aging patriarch of a crime dynasty...' },
    { id: 5, title: 'Pulp Fiction', year: 1994, rating: 8.9, description: 'Various interconnected crime stories...' },
    { id: 6, title: 'Fight Club', year: 1999, rating: 8.8, description: 'An insomniac office worker forms an underground club...' },
    { id: 7, title: 'Forrest Gump', year: 1994, rating: 8.8, description: 'The life journey of a man with low IQ...' },
    { id: 8, title: 'The Godfather', year: 1972, rating: 9.2, description: 'The aging patriarch of a crime dynasty...' },
    { id: 5, title: 'Pulp Fiction', year: 1994, rating: 8.9, description: 'Various interconnected crime stories...' },
    { id: 6, title: 'Fight Club', year: 1999, rating: 8.8, description: 'An insomniac office worker forms an underground club...' },
    { id: 7, title: 'Forrest Gump', year: 1994, rating: 8.8, description: 'The life journey of a man with low IQ...' },
    { id: 8, title: 'The Godfather', year: 1972, rating: 9.2, description: 'The aging patriarch of a crime dynasty...' },
    { id: 5, title: 'Pulp Fiction', year: 1994, rating: 8.9, description: 'Various interconnected crime stories...' },
    { id: 6, title: 'Fight Club', year: 1999, rating: 8.8, description: 'An insomniac office worker forms an underground club...' },
    { id: 7, title: 'Forrest Gump', year: 1994, rating: 8.8, description: 'The life journey of a man with low IQ...' },
    { id: 8, title: 'The Godfather', year: 1972, rating: 9.2, description: 'The aging patriarch of a crime dynasty...' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3;
  const totalPages = Math.ceil(allMovies.length / moviesPerPage);
  console.log(totalPages);
  
  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Skip to start/end
  const skipToStart = () => setCurrentPage(1);
  const skipToEnd = () => setCurrentPage(totalPages);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Popular Movies</h1>

      <div className="grid gap-6">
        {currentMovies.map(movie => (
          <div key={movie.id} className="w-full">
            <div>
              <div>{movie.title} ({movie.year})</div>
              <div>Rating: {movie.rating}/10</div>
            </div>
            <div>
              <p>{movie.description}</p>
            </div>
            <div className="bg-gray-50">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>w

      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={skipToStart}
          disabled={currentPage === 1}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Skip to first page"
        >
          <ChevronsLeft className="w-5 h-5" />
        </button>
        
        {getPageNumbers().map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-4 py-2 rounded ${
              currentPage === number 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-100'
            }`}
          >
            {number}
          </button>
        ))}
        
        <button
          onClick={skipToEnd}
          disabled={currentPage === totalPages}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Skip to last page"
        >
          <ChevronsRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MovieWebsite;