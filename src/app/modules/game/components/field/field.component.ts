import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ROW, ROW_PROVIDERS } from '../../providers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [ROW_PROVIDERS],
})
export class FieldComponent implements OnInit, AfterViewInit {
  @ViewChild('field', { read: ElementRef })
  public field: ElementRef<HTMLDivElement> | undefined;

  constructor(
    @Inject(Renderer2) private readonly renderer: Renderer2,
    @Inject(ROW) public readonly rows$: Observable<number[][]>
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
