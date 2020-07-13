import { IPayrollChecksClientV1 } from './IPayrollChecksClientV1';

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { PayrollCheckV1 } from 'pip-services-payrollchecks-node';

export class PayrollChecksNullClientV1 implements IPayrollChecksClientV1 {
    getChecks(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<PayrollCheckV1>) => void): void {
        callback(null, null);
    }

    getCheckById(correlationId: string, check_id: string,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        callback(null, null);
    }

    createCheck(correlationId: string, check: PayrollCheckV1,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        callback(null, null);
    }

    updateCheck(correlationId: string, check: PayrollCheckV1,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        callback(null, null);
    }
    
    deleteCheckById(correlationId: string, check_id: string,
        callback: (err: any, check: PayrollCheckV1) => void): void {
        callback(null, null);
    }
}
