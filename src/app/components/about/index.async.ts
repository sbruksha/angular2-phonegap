import {Component, OnInit} from 'angular2/core';
import {NGReact} from './components/ng-react/index';

@Component({
    selector: 'about',
    template: require('./template.html'),
    styles: [require('./style.scss')],
    providers: [],
    directives: [],
    pipes: []
})

export class About implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        NGReact.initialize('Hello From React!');
    }
}
