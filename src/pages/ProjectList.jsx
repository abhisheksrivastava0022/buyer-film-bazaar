import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../store/actions/filmActions';
import { Card, CardContent, Typography, Grid } from '@mui/material';


const ProjectList = () => {
    const [loadData, setLoadData] = useState([]);
    const [pagination, setPagination] = useState({
        totalPosts: 0,
        totalPages: 0,
        currentPage: 1,
        limit: 10,
    });

    // const { getRequestApi } = ApiClient();

    // const loadPreLoadData = async (page = 1) => {
    //     const query = { limit: pagination.limit, page };
    //     console.log(query, "query")

    //     const response = await getRequestApi(`https://119.82.68.149:3001/film-buyer/film`, query);
    //     console.log(response.data, "response")
    //     if (response.status) {
    //         setLoadData(response.data);
    //         setPagination(response.pagination);
    //     }
    // };

    const loadPreLoadData = async (page = 1) => {
        const queryParams = new URLSearchParams({
            limit: pagination.limit,
            page: page,
        });

        try {
            const response = await fetch(`https://119.82.68.149:3001/film-buyer/film?${queryParams}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log(data, "response");

            if (data.status) {
                setLoadData(data.data);
                setPagination({
                    ...pagination,
                    ...data.pagination,
                });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const handlePageChange = (page) => {
        loadPreLoadData(page);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { films, loading, error } = useSelector((state) => state.films);

    useEffect(() => {

        const authCookie = document.cookie.split('; ').find(row => row.startsWith('filmbuyer_access_token'));

        if (!authCookie) {
            navigate('/login');
        } else {
            dispatch(fetchFilms());
        }
    }, [navigate, dispatch]);


    useEffect(() => {
        loadPreLoadData(pagination.currentPage);
    }, [pagination.currentPage]);


    return (
        <>
            <div style={{ maxWidth: '1200px', margin: '2rem auto', padding: '2rem' }}>

                {films.length > 0 ? (
                    <Grid container spacing={3}>
                        {films.map((film) => (
                            <Grid item xs={12} sm={12} md={6} lg={6} key={film.id}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        minHeight: '280px',
                                        borderRadius: '15px',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
                                        },
                                        backgroundColor: '#f9f9f9',
                                    }}
                                >
                                    <CardContent>

                                        <h1>
                                            Title:-{film.title}
                                        </h1>
                                        <h5>
                                            English:-{film.english_title}
                                        </h5>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : !loading && (
                    <p>No Data available.</p>
                )}

                <div class="col-md-12 mt-4">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            {pagination.currentPage > 1 && (
                                <li class="page-item">
                                    <button
                                        class="page-link"
                                        onClick={() =>
                                            handlePageChange(pagination.currentPage - 1)
                                        }
                                    >
                                        Previous
                                    </button>
                                </li>
                            )}
                            {[...Array(pagination.totalPages)].map((_, index) => (
                                <li
                                    class={`page-item ${pagination.currentPage === index + 1 ? "active" : ""
                                        }`}
                                    key={index}
                                >
                                    <button
                                        class="page-link"
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            {pagination.currentPage < pagination.totalPages && (
                                <li class="page-item">
                                    <button
                                        class="page-link"
                                        onClick={() =>
                                            handlePageChange(pagination.currentPage + 1)
                                        }
                                    >
                                        Next
                                    </button>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default ProjectList