import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { dataType } from '../../types/types'

@Component({
  selector: 'app-render-item',
  templateUrl: './render-item.component.html',
  styleUrls: ['./render-item.component.scss']
})
export class RenderItemComponent implements OnInit {

  public topFrameToggle: boolean = false
  public currentIndex!: number
  @Input()
  public propsData!: dataType[]

  @Output()
  public idPost: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() { }

  topFrameToggleFn(haveToggle: boolean, currentIndex: number) {
    this.topFrameToggle = haveToggle
    this.currentIndex = currentIndex
  }
  getSingleId(id: string) {
    this.idPost.emit(id)
  }
}
