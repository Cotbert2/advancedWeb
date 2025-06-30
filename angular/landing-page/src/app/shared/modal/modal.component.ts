import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isModalVisible = false;
  @Output() close = new EventEmitter<void>();
  isDragging = false;
  offsetX = 0;
  offsetY = 0;
  modalPosition = { x: 800, y: 100 };



  closeModal() {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).id === 'overlay') {
      this.closeModal();
    }
  }

  onMouseDown(event: MouseEvent) {
    const modal = (event.target as HTMLElement).closest('.modal') as HTMLElement;
    if (!modal) return;

    this.isDragging = true;
    const rect = modal.getBoundingClientRect();
    this.offsetX = event.clientX - rect.left;
    this.offsetY = event.clientY - rect.top;
    document.body.style.userSelect = 'none';
  }

  onMouseUp() {
    this.isDragging = false;
    document.body.style.userSelect = '';
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const x = Math.min(Math.max(0, event.clientX - this.offsetX), window.innerWidth - 300);
    const y = Math.min(Math.max(0, event.clientY - this.offsetY), window.innerHeight - 200);
    this.modalPosition = { x, y };
  }
}
