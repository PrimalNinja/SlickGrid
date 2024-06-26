import { SlickEvent as SlickEvent_, SlickRange as SlickRange_ } from '../slick.core';
import { SlickCellRangeSelector as SlickCellRangeSelector_ } from './slick.cellrangeselector';
import type { OnActiveCellChangedEventArgs } from '../models/index';
import type { SlickDataView } from '../slick.dataview';
import type { SlickGrid } from '../slick.grid';
export interface CellSelectionModelOption {
    selectActiveCell: boolean;
    cellRangeSelector?: SlickCellRangeSelector_;
}
export declare class SlickCellSelectionModel {
    pluginName: "CellSelectionModel";
    onSelectedRangesChanged: SlickEvent_<SlickRange_[]>;
    protected _cachedPageRowCount: number;
    protected _dataView?: SlickDataView;
    protected _grid: SlickGrid;
    protected _prevSelectedRow?: number;
    protected _prevKeyDown: string;
    protected _ranges: SlickRange_[];
    protected _selector: SlickCellRangeSelector_;
    protected _options?: CellSelectionModelOption;
    protected _defaults: CellSelectionModelOption;
    constructor(options?: {
        selectActiveCell: boolean;
        cellRangeSelector: SlickCellRangeSelector_;
    });
    init(grid: SlickGrid): void;
    destroy(): void;
    protected removeInvalidRanges(ranges: SlickRange_[]): SlickRange_[];
    protected rangesAreEqual(range1: SlickRange_[], range2: SlickRange_[]): boolean;
    /** Provide a way to force a recalculation of page row count (for example on grid resize) */
    resetPageRowCount(): void;
    setSelectedRanges(ranges: SlickRange_[], caller?: string): void;
    getSelectedRanges(): SlickRange_[];
    refreshSelections(): void;
    protected handleBeforeCellRangeSelected(e: Event): boolean | void;
    protected handleCellRangeSelected(_e: any, args: {
        range: SlickRange_;
    }): void;
    protected handleActiveCellChange(_e: Event, args: OnActiveCellChangedEventArgs): void;
    protected isKeyAllowed(key: string): boolean;
    protected handleKeyDown(e: KeyboardEvent): void;
}
//# sourceMappingURL=slick.cellselectionmodel.d.ts.map