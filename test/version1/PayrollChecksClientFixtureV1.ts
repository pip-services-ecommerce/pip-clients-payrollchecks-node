let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IPayrollChecksClientV1 } from '../../src/version1/IPayrollChecksClientV1';
import { TestModel } from '../data/TestModel';
import { PagingParams } from 'pip-services3-commons-node';
import { PayrollCheckV1, PayrollCheckStateV1 } from 'pip-services-payrollchecks-node';

let PAYROLL_CHECK1: PayrollCheckV1 = TestModel.createPayrollCheck1();
let PAYROLL_CHECK2: PayrollCheckV1 = TestModel.createPayrollCheck2();

export class PayrollChecksClientFixtureV1 {
    private _client: IPayrollChecksClientV1;

    constructor(client: IPayrollChecksClientV1) {
        this._client = client;
    }

    testCrudOperations(done) {
        let payrollCheck1, payrollCheck2: PayrollCheckV1;

        async.series([
            // Create one payroll check
            (callback) => {
                this._client.createCheck(
                    null,
                    PAYROLL_CHECK1,
                    (err, payrollCheck) => {
                        assert.isNull(err);

                        assert.isObject(payrollCheck);
                        TestModel.assertEqualPayrollCheckV1(payrollCheck, PAYROLL_CHECK1);

                        payrollCheck1 = payrollCheck;

                        callback();
                    }
                );
            },
            // Create another credit_card
            (callback) => {
                this._client.createCheck(
                    null,
                    PAYROLL_CHECK2,
                    (err, payrollCheck) => {
                        assert.isNull(err);

                        assert.isObject(payrollCheck);
                        TestModel.assertEqualPayrollCheckV1(payrollCheck, PAYROLL_CHECK2);

                        payrollCheck2 = payrollCheck;

                        callback();
                    }
                );
            },
            // Get all payroll checks
            (callback) => {
                this._client.getChecks(
                    null,
                    null,
                    new PagingParams(0, 5, false),
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.isTrue(page.data.length >= 2);

                        callback();
                    }
                );
            },
            // Update the payroll check
            (callback) => {
                payrollCheck1.state = PayrollCheckStateV1.Paid;

                this._client.updateCheck(
                    null,
                    payrollCheck1,
                    (err, payrollCheck) => {
                        assert.isNull(err);

                        assert.isObject(payrollCheck);
                        assert.equal(payrollCheck.state, PayrollCheckStateV1.Paid);
                        assert.equal(payrollCheck.id, PAYROLL_CHECK1.id);

                        payrollCheck1 = payrollCheck;

                        callback();
                    }
                );
            },
            // Delete payroll check
            (callback) => {
                this._client.deleteCheckById(
                    null,
                    payrollCheck1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
            // Try to get deleted payroll check
            (callback) => {
                this._client.getCheckById(
                    null,
                    payrollCheck1.id,
                    (err, payrollCheck) => {
                        assert.isNull(err);

                        assert.isNull(payrollCheck || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
