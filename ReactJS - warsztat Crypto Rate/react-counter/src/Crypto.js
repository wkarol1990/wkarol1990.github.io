import React, {Component} from 'react';
import axios from 'axios';
import CryptoList from './CryptoList';

class Crypto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cryptoList: []
        }
    }

    componentDidMount() {
        this.getData();

        setInterval(() => {
            if (this.filterValue.value === '') {
                this.getData();
            }
        }, 5000);
    }

    getData = () => {
        axios.get('https://blockchain.info/pl/ticker')
        .then(response => {
            let data = response.data;
            let newCryptoList = [];
            let oldCryptoList = this.state.cryptoList;

            data = Object.keys(data).map(waluta => {
                let newObject = {
                    waluta: waluta,
                    lastRate: data[waluta].last,
                    symbol: data[waluta].symbol
                };

                let oldObject = oldCryptoList.find(oldObject => {
                    if (oldObject.waluta === newObject.waluta) return oldObject;
                });

                if (oldObject !== undefined) {
                    if(oldObject.lastRate < newObject.lastRate) {
                        newObject.class = 'green';
                    } else if (oldObject.lastRate > newObject.lastRate) {
                        newObject.class = 'red';
                    } else {
                        newObject.class = 'blue';
                    }
                }

                newCryptoList.push(newObject);
            });

            this.setState({cryptoList: newCryptoList})
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onFilter = () => {
        let value = this.filterValue.value.toUpperCase();
        value = value.trim();

        let cryptoList = this.state.cryptoList;

        cryptoList = cryptoList.filter(currentWaluta => {
            return currentWaluta.waluta.search(value) > -1;
        });

        this.setState({cryptoList: cryptoList});
    }

    render() {
        return (
            <div className="header">
                <input 
                    placeholder="Filter..."
                    ref={input => this.filterValue = input}
                    onChange={this.onFilter}
                />
                <CryptoList rates={this.state.cryptoList} />
            </div>
        );
    }
}

export default Crypto;