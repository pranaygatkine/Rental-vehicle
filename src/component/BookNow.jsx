import React from 'react';
import './Styles.css';
import VehiclesData from './VehiclesData';

export default class BookNow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            day: "----",
            vNo: "----",
            mileage: "----",
            petrol: "----",
            kilometers: 0,
            hours: 0,
            pickup: '----',
            drop: '----',
            vehicleList: [],
            price: 0,
        }
    }
    updateDay = (e) => {
        const newDay = e.target.value;

        this.setState({
            day: newDay
        })
    }

    updateKilometer = (e) => {
        const newKm = e.target.value;

        this.setState({
            kilometers: newKm
        })
    }

    updateHour = (e) => {
        const newHour = e.target.value;

        this.setState({
            hours: newHour
        })
    }

    updatePickup = (e) => {
        const newPickup = e.target.value;

        this.setState({
            pickup: newPickup
        })
    }

    updateDrop = (e) => {
        const newDrop = e.target.value;

        this.setState({
            drop: newDrop
        })
    }

    handleForm = () => {
        localStorage.setItem('vehicles', JSON.stringify(VehiclesData));
        if (this.state.day === "weekdays") {
            const estimate = 15 + (4 * this.state.kilometers) + (0.3 * this.state.hours);

            this.setState({
                price: estimate,
                vNo: Math.floor(Math.random() * (+9999 - +1111)) + +1111,
                mileage: Math.floor(Math.random() * (+6000 - +1010)) + +1010,
                petrol: Math.floor(Math.random() * (+7 - +1)) + +1
            })

            if (this.state.petrol == 1) {
                alert('LOW FUEL... BOOK AGAIN...');
            }
        }
        else {
            const estimate = 25 + (6 * this.state.kilometers) + (0.5 * this.state.hours);

            this.setState({
                price: estimate,
                vNo: Math.floor(Math.random() * (+9999 - +1111)) + +1111,
                mileage: Math.floor(Math.random() * (+6000 - +1010)) + +1010,
                petrol: Math.floor(Math.random() * (+7 - +1)) + +1
            })
        }

    }
    componentDidMount() {
        const myList = JSON.parse(localStorage.getItem('vehicles'));
        this.setState({
            vehicleList: myList
        })
    }
    render() {
        //console.log(this.state.vehicleList)
        return (
            <div className="conatiner d-flex mt-5 booking-style">
                <img style={{ marginLeft: "10%" }} src="https://apiwp.thelocal.com/cdn-cgi/image/format=webp,width=1200,quality=75/https://apiwp.thelocal.com/wp-content/uploads/2024/07/zac-wolff-Deg3WmL3xWE-unsplash.jpg" alt="See me" />
                <div className="float-right mr-5 justify-content">
                    <div className="booking text-center">
                        <h3 style={{ color: "blue" }}>Book Here</h3>
                        <form style={{ marginTop: "30px" }}>
                            <label>
                                Select Day:
                                <select onChange={e => this.updateDay(e)}>
                                    <option value="-----">-</option>

                                    <option value="Sunday">Sunday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thrusday">Thrusday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                </select>
                            </label>
                            <label>
                                How many Kilometers:
                                <input type="number" value={this.state.kilometers} onChange={e => this.updateKilometer(e)} />
                            </label>
                            <label>
                                How many Hours:
                                <input type="number" value={this.state.hours} onChange={e => this.updateHour(e)} />
                            </label>
                            <label>
                                Pickup Location:
                                <br />
                                <select onChange={e => this.updatePickup(e)}>
                                    <option value="check">Select Your Location</option>

                                    <option value="Pune">Pune-Viman Nagar</option>
                                    <option value="Pune">Pune-Lohegaon</option>
                                    <option value="Pune">Pune-Kharadi</option>
                                    <option value="Pune">Pune-Shivaji Nagar</option>
                                    <option value="Pune">Pune-Hinjewadi</option>
                                    <option value="Pune">Pune-Balewadi</option>
                                    <option value="Pune">Pune-Koregaon park</option>
                                    <option value="Pune">Pune-Warje</option>
                                    <option value="Pune">Pune-Wakad</option>
                                    <option value="Pune">Pune-FC Road</option>
                                    <option value="Pune">Pune-Sadashiv Peth</option>
                                    <option value="Pune">Pune-Saras baug</option>
                                    <option value="Pune">Pune-Kalyani Nagar</option>
                                    <option value="Pune">Pune-Baner</option>
                                    <option value="Pune">Pune-Aundh</option>
                                    <option value="Pune">Pune-Akurdi</option>
                                    <option value="Pune">Pune-Alandi</option>
                                    <option value="Pune">Pune-Bhosari</option>
                                    <option value="Pune">Pune-Budhwarpeth</option>
                                    <option value="Pune">Pune-Bavdhan</option>
                                    <option value="Pune">Pune-Camp</option>
                                    <option value="Pune">Pune-Chakan</option>
                                    <option value="Pune">Pune-Chikhali</option>
                                    <option value="Pune">Pune-Chintamani Nagar</option>
                                    <option value="Pune">Pune-Dhanakwadi</option>
                                    <option value="Pune">Pune-Dattawadi</option>
                                    <option value="Pune">Pune-Dekkan</option>
                                    <option value="Pune">Pune-Dhanore</option>
                                    <option value="Pune">Pune-Dagdusheth</option>
                                    <option value="Pune">Pune-Dhighi</option>
                                    <option value="Pune">Pune-EON FREE ZONE</option>
                                    <option value="Pune">Pune-Ganesh Peth</option>
                                    <option value="Pune">Pune-Guruwar Peth</option>
                                    <option value="Pune">Pune-Hadpasar</option>
                                    <option value="Pune">Pune-Hinge Khurd</option>
                                    <option value="Pune">Pune-Induri</option>
                                    <option value="Pune">Pune-Junnur</option>
                                    <option value="Pune">Pune-Jejuri</option>
                                    <option value="Pune">Pune-Kamshet</option>
                                    <option value="Pune">Pune-Katraj</option>
                                    <option value="Pune">Pune-Kothrud</option>
                                    <option value="Pune">Pune-Khadkwasla dam</option>
                                    <option value="Pune">Pune-Lavasa</option>
                                    <option value="Pune">Pune-Lonavala</option>
                                    <option value="Pune">Pune-Lonikand</option>
                                    <option value="Pune">Pune-Magarpatta</option>
                                    <option value="Pune">Pune-Moshi</option>
                                    <option value="Pune">Pune-Nanapeth</option>
                                    <option value="Pune">Pune-Nigdi</option>
                                    <option value="Pune">Pune-Nana Peth</option>
                                    <option value="Pune">Pune-Panshet</option>
                                    <option value="Pune">Pune-Pashan</option>
                                    <option value="Pune">Pune-Pimple Saudagar</option>
                                    <option value="Pune">Pune-Pimpli</option>
                                    <option value="Pune">Pune-Pimpri Chinchwad</option>
                                    <option value="Pune">Pune-Purandar</option>
                                    <option value="Pune">Pune-Ravet</option>
                                    <option value="Pune">Pune-Rajangaon</option>
                                    <option value="Pune">Pune-Ram Nagar</option>
                                    <option value="Pune">Pune-Ramtekdi</option>
                                    <option value="Pune">Pune-Sangamwadi</option>
                                    <option value="Pune">Pune-Shirur</option>
                                    <option value="Pune">Pune-Sinhagad</option>
                                    <option value="Pune">Pune-Swargate</option>
                                    <option value="Pune">Pune-Shaniwar Wada</option>
                                    <option value="Pune">Pune-Talwade</option>
                                    <option value="Pune">Pune-Talegaon</option>
                                    <option value="Pune">Pune-Tathwade</option>
                                    <option value="Pune">Pune-Uday Bagh</option>
                                    <option value="Pune">Pune-Undri</option>
                                    <option value="Pune">Pune-Uttam Nagar</option>
                                    <option value="Pune">Pune-Vadgaon</option>
                                    <option value="Pune">Pune-Vishrantwadi</option>
                                    <option value="Pune">Pune-Wakadi</option>
                                    <option value="Pune">Pune-Wadegaon</option>
                                    <option value="Pune">Pune-Wagholi</option>
                                    <option value="Pune">Pune-Yashwant Nagar</option>
                                    <option value="Pune">Pune-Yavat</option>
                                    <option value="Pune">Pune-Yerwada</option>
                                    <option value="Pune">Pune-Yewalewadi</option>
                                </select>
                            </label>
                            <br />
                            <label>
                                Drop Location:
                                <br />
                                <select onChange={e => this.updateDrop(e)}>
                                    <option value="check">Select Your Destination</option>

                                    <option value="">Pune-Viman Nagar</option>
                                    <option value="Pune">Pune-Lohegaon</option>
                                    <option value="Pune">Pune-Kharadi</option>
                                    <option value="Pune">Pune-Shivaji Nagar</option>
                                    <option value="Pune">Pune-Hinjewadi</option>
                                    <option value="Pune">Pune-Balewadi</option>
                                    <option value="Pune">Pune-Koregaon park</option>
                                    <option value="Pune">Pune-Warje</option>
                                    <option value="Pune">Pune-Wakad</option>
                                    <option value="Pune">Pune-FC Road</option>
                                    <option value="Pune">Pune-Sadashiv Peth</option>
                                    <option value="Pune">Pune-Saras baug</option>
                                    <option value="Pune">Pune-Kalyani Nagar</option>
                                    <option value="Pune">Pune-Baner</option>
                                    <option value="Pune">Pune-Aundh</option>
                                    <option value="Pune">Pune-Akurdi</option>
                                    <option value="Pune">Pune-Alandi</option>
                                    <option value="Pune">Pune-Bhosari</option>
                                    <option value="Pune">Pune-Budhwarpeth</option>
                                    <option value="Pune">Pune-Bavdhan</option>
                                    <option value="Pune">Pune-Camp</option>
                                    <option value="Pune">Pune-Chakan</option>
                                    <option value="Pune">Pune-Chikhali</option>
                                    <option value="Pune">Pune-Chintamani Nagar</option>
                                    <option value="Pune">Pune-Dhanakwadi</option>
                                    <option value="Pune">Pune-Dattawadi</option>
                                    <option value="Pune">Pune-Dekkan</option>
                                    <option value="Pune">Pune-Dhanore</option>
                                    <option value="Pune">Pune-Dagdusheth</option>
                                    <option value="Pune">Pune-Dhighi</option>
                                    <option value="Pune">Pune-EON FREE ZONE</option>
                                    <option value="Pune">Pune-Ganesh Peth</option>
                                    <option value="Pune">Pune-Guruwar Peth</option>
                                    <option value="Pune">Pune-Hadpasar</option>
                                    <option value="Pune">Pune-Hinge Khurd</option>
                                    <option value="Pune">Pune-Induri</option>
                                    <option value="Pune">Pune-Junnur</option>
                                    <option value="Pune">Pune-Jejuri</option>
                                    <option value="Pune">Pune-Kamshet</option>
                                    <option value="Pune">Pune-Katraj</option>
                                    <option value="Pune">Pune-Kothrud</option>
                                    <option value="Pune">Pune-Khadkwasla dam</option>
                                    <option value="Pune">Pune-Lavasa</option>
                                    <option value="Pune">Pune-Lonavala</option>
                                    <option value="Pune">Pune-Lonikand</option>
                                    <option value="Pune">Pune-Magarpatta</option>
                                    <option value="Pune">Pune-Moshi</option>
                                    <option value="Pune">Pune-Nanapeth</option>
                                    <option value="Pune">Pune-Nigdi</option>
                                    <option value="Pune">Pune-Nana Peth</option>
                                    <option value="Pune">Pune-Panshet</option>
                                    <option value="Pune">Pune-Pashan</option>
                                    <option value="Pune">Pune-Pimple Saudagar</option>
                                    <option value="Pune">Pune-Pimpli</option>
                                    <option value="Pune">Pune-Pimpri Chinchwad</option>
                                    <option value="Pune">Pune-Purandar</option>
                                    <option value="Pune">Pune-Ravet</option>
                                    <option value="Pune">Pune-Rajangaon</option>
                                    <option value="Pune">Pune-Ram Nagar</option>
                                    <option value="Pune">Pune-Ramtekdi</option>
                                    <option value="Pune">Pune-Sangamwadi</option>
                                    <option value="Pune">Pune-Shirur</option>
                                    <option value="Pune">Pune-Sinhagad</option>
                                    <option value="Pune">Pune-Swargate</option>
                                    <option value="Pune">Pune-Shaniwar Wada</option>
                                    <option value="Pune">Pune-Talwade</option>
                                    <option value="Pune">Pune-Talegaon</option>
                                    <option value="Pune">Pune-Tathwade</option>
                                    <option value="Pune">Pune-Uday Bagh</option>
                                    <option value="Pune">Pune-Undri</option>
                                    <option value="Pune">Pune-Uttam Nagar</option>
                                    <option value="Pune">Pune-Vadgaon</option>
                                    <option value="Pune">Pune-Vishrantwadi</option>
                                    <option value="Pune">Pune-Wakadi</option>
                                    <option value="Pune">Pune-Wadegaon</option>
                                    <option value="Pune">Pune-Wagholi</option>
                                    <option value="Pune">Pune-Yashwant Nagar</option>
                                    <option value="Pune">Pune-Yavat</option>
                                    <option value="Pune">Pune-Yerwada</option>
                                    <option value="Pune">Pune-Yewalewadi</option>
                                </select>
                            </label>
                        </form>
                        <button onClick={() => this.handleForm()}>BOOK NOW</button>
                    </div>
                </div>
                <div className="booking text-center">
                    <h3 style={{ color: "blue" }}>Invoice</h3>
                    <p>Vehcile No: {"MH " + (Math.floor(Math.random() * (+66 - +1)) + +1) + " DI " + this.state.vNo}</p>
                    <p>Mileage: {this.state.mileage}</p>
                    <p>Petrol: {this.state.petrol}</p>
                    <p>Location: {this.state.pickup.toUpperCase()}</p>
                    <p>Day: {this.state.day.toUpperCase()}</p>
                    <p>Pickup: {this.state.pickup.toUpperCase()}</p>
                    <p>Drop: {this.state.drop.toUpperCase()}</p>
                    <h6>Estimated Price:</h6>
                    <p>{this.state.price}</p>
                </div>
            </div>
        )
    }
}