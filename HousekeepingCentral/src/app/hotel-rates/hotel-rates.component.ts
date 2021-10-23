import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
	selector: 'app-hotel-rates',
	templateUrl: './hotel-rates.component.html',
	styleUrls: ['./hotel-rates.component.sass'],
})
@Injectable()
export class HotelRatesComponent implements OnInit {
	checkInDate: string = '';
	checkOutDate: string = '';
	courtyardPetKey: string = 'g32874-d23414944';
	courtyardNovatoKey: string = 'g32797-d80465';
	courtyardNovatoRate: string = '';
	courtyardPetRate: string = '';
	sheratonKey: string = 'g32874-d252513';
	sheratonRate: string = '';
	hamptonInnKey: string = 'g32874-d12904001';
	hamptonInnRate: string = '';
	hotelPetKey: string = 'g32874-d3836077';
	hotelPetRate: string = '';
	hiltonGardenKey: string = 'g33055-d1011167';
	hiltonGardenRate: string = '';
	loading: boolean = true;
	rates: Array<{ name: string; rate: string }> = [];
	// url =
	//   'https://data.xotelo.com/api/rates?hotel_key=g32797-d80465&chk_in=2021-10-17&chk_out=2021-10-18';
	constructor(private http: HttpClient) {}

	async ngOnInit(): Promise<void> {
		// Setting Check In Date
		var today: any = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		this.checkInDate = yyyy + '-' + mm + '-' + dd;

		// Setting Checkout Date
		var tmrw = new Date();

		tmrw.setDate(tmrw.getDate() + 1);
		var tmrwDD = String(tmrw.getDate()).padStart(2, '0');
		var tmrwMM = String(tmrw.getMonth() + 1).padStart(2, '0'); //January is 0!
		var tmrwYYYY = tmrw.getFullYear();

		this.checkOutDate = tmrwYYYY + '-' + tmrwMM + '-' + tmrwDD;

		// Could definetley have a refactor
		// https://xotelo.com/ is where rates API come from
		await this.http
			.get<any>(
				`https://data.xotelo.com/api/rates?hotel_key=${this.courtyardPetKey}&chk_in=${this.checkInDate}&chk_out=${this.checkOutDate}`
			)
			.subscribe({
				next: (data) => {
					this.courtyardPetRate = data.result.rates[0].rate;
					this.rates.push({
						name: 'Courtyard Petaluma',
						rate: data.result.rates[0].rate,
					});
				},
				error: (error) => {
					console.error('There was an error!', error);
				},
			});

		await this.http
			.get<any>(
				`https://data.xotelo.com/api/rates?hotel_key=${this.courtyardNovatoKey}&chk_in=${this.checkInDate}&chk_out=${this.checkOutDate}`
			)
			.subscribe({
				next: (data) => {
					this.rates.push({
						name: 'Courtyard Novato',
						rate: data.result.rates[0].rate,
					});
				},
				error: (error) => {
					console.error('There was an error!', error);
				},
			});

		await this.http
			.get<any>(
				`https://data.xotelo.com/api/rates?hotel_key=${this.sheratonKey}&chk_in=${this.checkInDate}&chk_out=${this.checkOutDate}`
			)
			.subscribe({
				next: (data) => {
					this.rates.push({
						name: 'Sheraton',
						rate: data.result.rates[0].rate,
					});
				},
				error: (error) => {
					console.error('There was an error!', error);
				},
			});

		await this.http
			.get<any>(
				`https://data.xotelo.com/api/rates?hotel_key=${this.hamptonInnKey}&chk_in=${this.checkInDate}&chk_out=${this.checkOutDate}`
			)
			.subscribe({
				next: (data) => {
					this.rates.push({
						name: 'Hampton Inn Petaluma',
						rate: data.result.rates[0].rate,
					});
				},
				error: (error) => {
					console.error('There was an error!', error);
				},
			});

		await this.http
			.get<any>(
				`https://data.xotelo.com/api/rates?hotel_key=${this.hotelPetKey}&chk_in=${this.checkInDate}&chk_out=${this.checkOutDate}`
			)
			.subscribe({
				next: (data) => {
					console.log(data, this.checkInDate, this.checkOutDate);
					this.rates.push({
						name: 'Hotel Petaluma',
						rate: data.result.rates[0].rate,
					});
				},
				error: (error) => {
					console.error('There was an error!', error);
				},
			});

		await this.http
			.get<any>(
				`https://data.xotelo.com/api/rates?hotel_key=${this.hiltonGardenKey}&chk_in=${this.checkInDate}&chk_out=${this.checkOutDate}`
			)
			.subscribe({
				next: (data) => {
					this.rates.push({
						name: 'Hilton Garden Inn',
						rate: data.result.rates[0].rate,
					});
				},
				error: (error) => {
					console.error('There was an error!', error);
				},
			});
		this.loading = false;
	}
}
