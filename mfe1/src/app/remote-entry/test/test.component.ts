import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnInit {

  ngOnInit(): void {
    try {
      const url = process.env['NX_API_URL'];
      console.log(url)
    } catch (error) {
      alert(error)
    }
      
  }
}
