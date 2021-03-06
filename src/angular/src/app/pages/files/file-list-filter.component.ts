import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Observable} from "rxjs/Observable";

import {ViewFileFilterService} from "../../services/files/view-file-filter.service";
import {ViewFileFilter} from "../../services/files/view-file-filter";
import {ViewFile} from "../../services/files/view-file";

@Component({
    selector: "app-file-list-filter",
    providers: [],
    templateUrl: "./file-list-filter.component.html",
    styleUrls: ["./file-list-filter.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FileListFilterComponent {
    public filter: Observable<ViewFileFilter>;

    public filterName = "";

    constructor(private viewFileFilterService: ViewFileFilterService) {
        this.filter = this.viewFileFilterService.filter;
    }

    onFilterAll() {
        this.viewFileFilterService.filterStatus(null);
    }

    onFilterExtracted() {
        this.viewFileFilterService.filterStatus(ViewFile.Status.EXTRACTED);
    }

    onFilterExtracting() {
        this.viewFileFilterService.filterStatus(ViewFile.Status.EXTRACTING);
    }

    onFilterDownloaded() {
        this.viewFileFilterService.filterStatus(ViewFile.Status.DOWNLOADED);
    }

    onFilterDownloading() {
        this.viewFileFilterService.filterStatus(ViewFile.Status.DOWNLOADING);
    }

    onFilterQueued() {
        this.viewFileFilterService.filterStatus(ViewFile.Status.QUEUED);
    }

    onFilterStopped() {
        this.viewFileFilterService.filterStatus(ViewFile.Status.STOPPED);
    }

    // noinspection JSUnusedGlobalSymbols
    onFilterDefault() {
        this.viewFileFilterService.filterStatus(ViewFile.Status.DEFAULT);
    }

    onFilterByName(name: string) {
        this.filterName = name;
        this.viewFileFilterService.filterName(this.filterName);
    }
}
