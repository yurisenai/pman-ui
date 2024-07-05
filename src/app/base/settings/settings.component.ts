import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  isDarkMode: boolean = false;

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    this.applyDarkMode();
  }

  toggleDarkMode() {
    if (this.isDarkMode) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
    this.applyDarkMode();
  }

  applyDarkMode() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}