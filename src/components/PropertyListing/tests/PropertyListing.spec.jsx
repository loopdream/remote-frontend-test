import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

const MOCK_PROPERTIES = [
    {
        id: 45877824,
        bedrooms: 2,
        summary:
            'A stunning two bedroom apartment on the 31st floor offering 814 Sq. Ft of living space with views towards Millwall Dock and the O2 Arena and River Thames.',
        displayAddress: 'The Madison, Marsh Wall, London, E14',
        propertyType: 'Apartment',
        price: 987000,
        branchName: 'JLL, Stratford',
        propertyUrl: '/property-for-sale/property-45877824.html',
        contactUrl: '/property-for-sale/contactBranch.html?propertyId=45877824',
        propertyTitle: '2 bedroom apartment for sale',
        mainImage:
            'https://media.rightmove.co.uk/dir/crop/10:9-16:9/151k/150773/45877824/150773_CTS160277_IMG_13_0001_max_476x317.jpg',
    },
    {
        id: 64409009,
        bedrooms: 3,
        summary:
            'A BRIGHT and SPACIOUS THREE BEDROOM apartment with an OPEN PLAN LIVING/DINING area. The PERFECT space for ENTERTAINING and spending time with family and friends. The MASTER BEDROOM boasts an ENSUITE and UNDERFLOOR HEATING throughout the apartment for the cold days. ',
        displayAddress: 'Eastfields Avenue,\r\nLondon,\r\nSW18 1LP ',
        propertyType: 'Apartment',
        price: 1400000,
        branchName: 'Frasers Property',
        propertyUrl: '/property-for-sale/property-64409009.html',
        contactUrl: '/property-for-sale/contactBranch.html?propertyId=64409009',
        propertyTitle: '3 bedroom apartment for sale',
        mainImage:
            'https://media.rightmove.co.uk/dir/crop/10:9-16:9/98k/97688/64409009/97688_5C_1102_IMG_09_0000_max_476x317.jpg',
    },
    {
        id: 46943880,
        bedrooms: 5,
        summary:
            'A stunning detached five bedroom freehold house which is currently divided into two flats and has a great opportunity for further expansion in the loft or back (STPP). Great location and fantastic opportunity to make this property an amazing home or investment property.',
        displayAddress: 'Denbigh Road, London, W5',
        propertyType: 'Terraced',
        price: 1300000,
        branchName: 'Dendrow Ltd , London',
        propertyUrl: '/property-for-sale/property-46943880.html',
        contactUrl: '/property-for-sale/contactBranch.html?propertyId=46943880',
        propertyTitle: '5 bedroom terraced house for sale',
        mainImage:
            'https://media.rightmove.co.uk/dir/crop/10:9-16:9/81k/80830/46943880/80830_2346858_IMG_01_0004_max_476x317.jpg',
    },
    {
        id: 63646517,
        bedrooms: 1,
        summary:
            'JOHNS&CO presents a stunning luxury fifth floor, river & courtyard facing, one bedroom apartment, c.574 sq. ft. with a private winter garden. Located within the brand new Embassy Gardens development surrounding the new US Embassy in Nine Elms. The apartment features walnut parquet flooring, marbl...',
        displayAddress: 'Capital Building, Embassy Gardens, Nine Elms, SW11',
        propertyType: 'Apartment',
        price: 899995,
        branchName: 'JOHNS&CO, Nine Elms',
        propertyUrl: '/property-for-sale/property-63646517.html',
        contactUrl: '/property-for-sale/contactBranch.html?propertyId=63646517',
        propertyTitle: '1 bedroom apartment for sale',
        mainImage:
            'https://media.rightmove.co.uk/dir/crop/10:9-16:9/137k/136148/63646517/136148_2336859_IMG_01_0006_max_476x317.jpg',
    },
    {
        id: 65254247,
        bedrooms: 3,
        summary:
            'The ultimate in luxury Docklands living, this three bedroom apartment will be set within a new landmark tower that forms part of the impressive Harbour Central development. Comprising over 1,000 sq. ft. this property will be designed to combine style with modern convenience. ',
        displayAddress: 'Harbour Central,\r\nMaine Tower, Harbour Central, Docklands, E14 9EZ',
        propertyType: 'Apartment',
        price: 1190000,
        branchName: 'Galliard Homes Ltd',
        propertyUrl: '/property-for-sale/property-65254247.html',
        contactUrl: '/property-for-sale/contactBranch.html?propertyId=65254247',
        propertyTitle: '3 bedroom apartment for sale',
        mainImage:
            'https://media.rightmove.co.uk/dir/crop/10:9-16:9/142k/141872/65254247/141872_3102MaineTower_IMG_00_0000_max_476x317.jpg',
    },
];

describe('PropertyListing', () => {
    it('should render five property cards', async () => {
        render(<PropertyListing properties={MOCK_PROPERTIES} />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
