import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IPayrollChecksClientV1 } from './IPayrollChecksClientV1';
import { PayrollCheckV1 } from 'pip-services-payrollchecks-node';

export class PayrollChecksDirectClientV1 extends DirectClient<any> implements IPayrollChecksClientV1 {

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor('pip-services-payrollchecks', 'controller', '*', '*', '*'));

        if (config)
            this.configure(ConfigParams.fromValue(config));
    }

    getChecks(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<PayrollCheckV1>) => void): void {
        let timing = this.instrument(correlationId, 'payrollchecks.get_checks');
        this._controller.getChecks(correlationId, filter, paging, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }

    getCheckById(correlationId: string, check_id: string,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        let timing = this.instrument(correlationId, 'payrollchecks.get_check_by_id');
        this._controller.getCheckById(correlationId, check_id, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }

    createCheck(correlationId: string, check: PayrollCheckV1,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        let timing = this.instrument(correlationId, 'payrollchecks.create_check');
        this._controller.createCheck(correlationId, check, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }

    updateCheck(correlationId: string, check: PayrollCheckV1,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        let timing = this.instrument(correlationId, 'payrollchecks.update_check');
        this._controller.updateCheck(correlationId, check, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }

    deleteCheckById(correlationId: string, check_id: string,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        let timing = this.instrument(correlationId, 'payrollchecks.delete_check_by_id');
        this._controller.deleteCheckById(correlationId, check_id, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }
}