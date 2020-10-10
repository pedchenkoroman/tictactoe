import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent implements OnInit, AfterViewInit {
  @ViewChild('field', { read: ElementRef })
  public field: ElementRef<HTMLDivElement> | undefined;

  public readonly rows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  constructor(@Inject(Renderer2) private readonly renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
