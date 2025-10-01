import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
items = [
{title:'Experienced Doctors', desc:'Board-certified specialists across fields.'},
{title:'Modern Equipment', desc:'Latest diagnostic and treatment tools.'},
{title:'Patient-first Approach', desc:'Personalized care plans.'}
];
}
