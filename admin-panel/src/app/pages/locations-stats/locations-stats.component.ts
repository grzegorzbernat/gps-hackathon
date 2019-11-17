import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import 'style-loader!leaflet/dist/leaflet.css';
import {LocalDataSource} from 'ng2-smart-table';
import {NbThemeService} from '@nebular/theme';

@Component({
    selector: 'pk-locations-stats',
    styleUrls: ['locations-stats.component.scss'],
    templateUrl: './locations-stats.component.html',
})
export class LocationsStatsComponent implements AfterViewInit, OnDestroy {
    source: LocalDataSource = new LocalDataSource();

    selectedItem = 'LIB';

    libOptions: any = {};
    socialOptions: any = {};
    themeSubscription: any;

    constructor(private theme: NbThemeService) {
    }

    ngAfterViewInit() {
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

            const colors: any = config.variables;
            const echarts: any = config.variables.echarts;

            this.libOptions = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [
                            'Biblioteka - Filia Nr 1',
                            'Biblioteka - Filia Nr 2',
                            'Biblioteka - Filia Nr 3',
                            'Biblioteka - Filia Nr 4',
                            'Biblioteka - Filia Nr 5',
                            'Biblioteka - Filia Nr 6',
                            'Biblioteka - Filia Nr 7',
                            'Biblioteka - Filia Nr 8',
                            'Biblioteka - Filia Nr 9',
                            'Biblioteka - Filia Nr 10'
                        ],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            show: false,
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Score',
                        type: 'bar',
                        barWidth: '60%',
                        data: [3, 1, -3, 4, 3, 5, 3, 3, -4, 3],
                    },
                ],
            };

            this.socialOptions = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: [
                            'Dom pomocy społęcznej nr. 1',
                            'Dom pomocy społęcznej nr. 2',
                            'Dom pomocy społęcznej nr. 3',
                            'Dom pomocy społęcznej nr. 4',
                            'Dom pomocy społęcznej nr. 5',
                            'Dom pomocy społęcznej nr. 6',
                            'Dom pomocy społęcznej nr. 7'
                        ],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            show: false,
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Score',
                        type: 'bar',
                        barWidth: '60%',
                        data: [5, 2, 4, 2, 3, -1, -3],
                    },
                ],
            };
        });
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }

    onSelect(event: any) {
        console.log('zmiana');
        console.log(event);
    }
}

