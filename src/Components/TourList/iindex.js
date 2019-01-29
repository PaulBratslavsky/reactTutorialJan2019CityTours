import React, { Component } from 'react';
import './TourList.scss';
import TourItem from '../TourItem';

import { tourData } from '../../tourData';

class TourList extends Component {

        state = {
            tours: tourData
        };

    onClickRemoveTour = (id) => {
        const { tours } = this.state;
        const sortedTours = tours.filter( item => item.id !== id ); 

        this.setState({
            tours: sortedTours
        });

        console.log("Remove Icon Clicked!");
    }
    

    render() {

        const { tours } = this.state;

        return(
            <section className="tour-list">
                {tours.map( tour => {
                    return(
                        <TourItem 
                            key={tour.id} 
                            tour={tour} 
                            onClickRemoveTour={this.onClickRemoveTour}
                        />
                    );
                })}
            </section>
        )
    }
}

export default TourList;

