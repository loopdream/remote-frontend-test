import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import { PROPERTIES_API_URL } from '../../constants';

const App = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProperties = async (url = PROPERTIES_API_URL) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProperties(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                {loading && <p>Loading properties...</p>}
                {!loading && properties.length >= 1 ? (
                    <PropertyListing properties={properties} />
                ) : (
                    <p>No properties found</p>
                )}
            </main>
        </div>
    );
};

export default App;
