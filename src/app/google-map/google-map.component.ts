import { google } from 'google-maps'
import { AfterViewInit, Component, OnInit } from '@angular/core'
declare var google: any
@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
    location: Location
    // selectedMarker: Marker
    origin: any
    destination: any
    distance: any

    constructor(
    ) { }

    ngOnInit() {
        this.location = {
            latitude: 33.5515788,
            longitude: 73.12305649999999,
            // mapType: 'satelite',
            zoom: 18,
            marker: {
                lat: 33.5515788,
                lng: 73.12305649999999
            }
            // markers: [
            //     {
            //         lat: 33.5515788,
            //         lng: 73.12305649999999
            //     }
            // ]
        }

        this.origin = {
            lat: 33.5515788,
            lng: 73.12305649999999
        }
        this.destination = {
            lat: 33.56167234534084,
            lng: 73.14183921903707
        }
        // this.distance = this.calculateDistance(this.origin, this.destination)
        // this.distance = this.getDistanceFromLatLonInKm(this.origin.lat, this.origin.lng, this.destination.lat, this.destination.lng)
        // console.log('this.distance', this.distance)

    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.distance = this.calculateDistance(this.origin, this.destination)
            console.log('this.distance', this.distance)
        }, 1000)
    }

    calculateDistance(point1, point2) {
        const p1 = new google.maps.LatLng(point1.lat, point1.lng)
        const p2 = new google.maps.LatLng(point2.lat, point2.lng)
        return (
            google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000
        ).toFixed(2)
    }

    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        let R = 6371 // Radius of the earth in kilometers
        let dLat = this.deg2rad(lat2 - lat1) // deg2rad below
        let dLon = this.deg2rad(lon2 - lon1)
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        let d = R * c // Distance in KM
        return d
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    // addMarker(lat: number, lng: number) {
    //     console.log(lat, lng)
    //     this.location.markers.push({
    //         lat,
    //         lng
    //     })
    // }

    // selectMarker(event) {
    //     this.selectedMarker = {
    //         lat: event.latitude,
    //         lng: event.longitude
    //     }
    // }
}

interface Marker {
    lat: number
    lng: number
}

interface Location {
    latitude: number
    longitude: number
    mapType?: string
    zoom?: number
    marker: Marker
    // markers: Array<Marker>
}
