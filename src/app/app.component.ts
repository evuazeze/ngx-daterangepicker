import {Component, OnInit, ViewChild} from '@angular/core';
import { NgxDateRangePickerOptions } from '../../projects/ngx-daterangepicker/src/public_api';
import {NgxDateRangePickerComponent} from '../../projects/ngx-daterangepicker/src/lib/ngx-daterangepicker/ngx-daterangepicker.component';

@Component({
    selector: 'ld-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    value: string | Object;
    options: NgxDateRangePickerOptions;

    @ViewChild('calendar', {static: true})
    private ngxDateRangePicker: NgxDateRangePickerComponent;

    ngOnInit() {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        this.options = {
            theme: 'default',
            labels: ['Start', 'End'],
            menu: [
                { alias: 'td', text: 'Today', operation: '0d' },
                { alias: 'tm', text: 'This Month', operation: '0m' },
                { alias: 'lm', text: 'Last Month', operation: '-1m' },
                { alias: 'tw', text: 'This Week', operation: '0w' },
                { alias: 'lw', text: 'Last Week', operation: '-1w' },
                { alias: 'ty', text: 'This Year', operation: '0y' },
                { alias: 'ly', text: 'Last Year', operation: '-1y' },
                { alias: 'ny', text: 'Next Year', operation: '+1y' },
                { alias: 'ln', text: 'Last 90 days', operation: '-90d' },
                { alias: 'l2m', text: 'Last 2 months', operation: '-2m' },

                { alias: 'pmt', text: 'A past Month from Today', operation: '-1mt' },
                { alias: 'nmt', text: 'Next Month from Today', operation: '1mt' },
                { alias: 'pwt', text: 'A past Week from Today', operation: '-1wt' },
                { alias: 'pyt', text: 'A past Year from Today', operation: '-1yt' },
                { alias: 'nyt', text: 'Next Year from Today', operation: '+2yt' },
                { alias: 'pdt', text: 'Past 90 days from Today', operation: '-90dt' },
                { alias: 'pl2mt', text: 'Past 2 months from Today', operation: '-2mt' }
            ],
            dateFormat: 'YYYY-MM-DD',
            outputFormat: 'DD-MM-YYYY',
            startOfWeek: 1,
            outputType: 'object',
            locale: 'es',
            minDate: {
                day: null,
                month: null,
                year: null
            },
            maxDate: {
                day: null,
                month: null,
                year: null
            },
            date: {
                from: today,
                to: tomorrow
            }
        };
    }

    toggle() {
        this.ngxDateRangePicker.toggle();
    }
}
