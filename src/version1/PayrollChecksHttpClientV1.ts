import { ConfigParams } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { IPayrollChecksClientV1 } from './IPayrollChecksClientV1';
import { PayrollCheckV1 } from 'pip-services-payrollchecks-node';

export class PayrollChecksHttpClientV1 extends CommandableHttpClient implements IPayrollChecksClientV1 {

    constructor(config?: any) {
        super('v1/payroll_checks');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    getChecks(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<PayrollCheckV1>) => void): void {
        this.callCommand(
            'get_checks',
            correlationId,
            {
                filter: filter,
                paging: paging
            },
            callback
        );
    }

    getCheckById(correlationId: string, check_id: string,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        this.callCommand(
            'get_check_by_id',
            correlationId,
            {
                check_id: check_id
            },
            callback
        );
    }

    createCheck(correlationId: string, check: PayrollCheckV1,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        this.callCommand(
            'create_check',
            correlationId,
            {
                check: check
            },
            callback
        );
    }

    updateCheck(correlationId: string, check: PayrollCheckV1,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        this.callCommand(
            'update_check',
            correlationId,
            {
                check: check
            },
            callback
        );
    }

    deleteCheckById(correlationId: string, check_id: string,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        this.callCommand(
            'delete_check_by_id',
            correlationId,
            {
                check_id: check_id
            },
            callback
        );
    }
}
