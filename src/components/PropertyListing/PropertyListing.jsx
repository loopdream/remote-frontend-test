import React from 'react';
import PropTypes from 'prop-types';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ properties }) => {
    return (
        <ul className="PropertyListing">
            {properties?.map((property) => (
                <li key={property.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};
PropertyListing.propTypes = {
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            bedrooms: PropTypes.number.isRequired,
            summary: PropTypes.string.isRequired,
            displayAddress: PropTypes.string.isRequired,
            propertyType: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            branchName: PropTypes.string.isRequired,
            propertyUrl: PropTypes.string.isRequired,
            contactUrl: PropTypes.string.isRequired,
            propertyTitle: PropTypes.string.isRequired,
            mainImage: PropTypes.string.isRequired,
        })
    ),
};

export default PropertyListing;
