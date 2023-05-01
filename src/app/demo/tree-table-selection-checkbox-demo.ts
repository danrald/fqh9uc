import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
  selector: 'tree-table-selection-checkbox-demo',
  templateUrl: './tree-table-selection-checkbox-demo.html',
})
export class TreeTableSelectionCheckboxDemo implements OnInit {
  files: TreeNode[];

  selectedNodes: TreeNode[];

  cols: any[];

  constructor(private nodeService: NodeService) {}

  Clickit() {
    console.log(this.selectedNodes);
  }
  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files = files));
    // export interface TreeNode<T = any> {
    // {
    //     label?: string;
    //     data?: T;
    //     icon?: string;
    //     expandedIcon?: any;
    //     collapsedIcon?: any;
    //     children?: TreeNode<T>[];
    //     leaf?: boolean;
    //     expanded?: boolean;
    //     type?: string;
    //     parent?: TreeNode<T>;
    //     partialSelected?: boolean;
    //     style?: string;
    //     styleClass?: string;
    //     draggable?: boolean;
    //     droppable?: boolean;
    //     selectable?: boolean;
    //     key?: string;
    // }

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];
  }
}
