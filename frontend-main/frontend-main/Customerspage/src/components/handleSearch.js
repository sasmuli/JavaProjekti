import React from "react"

export default class restaurantContainer extends React.Component {
    state = {
        restaurants: [],
        startIndex: 0,
        progress: 0,
    }

    componentDidMount() {
        fetch('https://xxxx.com/getRestaurants')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                restaurants: data.Search,
                progress: 0,
                startIndex: 0
            })
        })
    }
}