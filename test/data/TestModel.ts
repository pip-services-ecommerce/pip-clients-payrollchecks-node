import { PayrollCheckV1 } from "pip-services-payrollchecks-node";
import { PayrollCheckStateV1 } from "pip-services-payrollchecks-node";
import { IncomeItemV1 } from "pip-services-payrollchecks-node";
import { DeductionItemV1 } from "pip-services-payrollchecks-node";

let assert = require('chai').assert;

export class TestModel {
    static createPayrollCheck1(): PayrollCheckV1 {
        return PayrollCheckV1.calculateTotals({
            id: '1',
            party_id: '1',
            income: [
                {
                    description: 'task 1',
                    total: 160,
                    hours: 20,
                    rate: 8
                },
                {
                    description: 'task 2',
                    total: 85,
                    hours: 10,
                    rate: 8.5
                },
            ],

            state: PayrollCheckStateV1.Paid,
            paid_time: new Date(2020, 6, 2),

            income_total: 145,
            net_total: 0
        });
    }

    static createPayrollCheck2(): PayrollCheckV1 {
        return PayrollCheckV1.calculateTotals({
            id: '2',
            party_id: '2',
            income: [
                {
                    description: 'task 3',
                    total: 700,
                    hours: 50,
                    rate: 14
                },
                {
                    description: 'task 4',
                    total: 1680,
                    hours: 120,
                    rate: 14
                },
            ],
            deductions: [
                {
                    description: 'commission 5',
                    total: 35,
                    ytd_total: 5
                }
            ],
            state: PayrollCheckStateV1.New,
            income_total: 0,
            net_total: 2340
        });
    }

    static createPayrollCheck3(): PayrollCheckV1 {
        return PayrollCheckV1.calculateTotals({
            id: '3',
            party_id: '1',
            income: [
                {
                    description: 'task 1',
                    total: 160,
                    hours: 135,
                    rate: 8
                },
                {
                    description: 'task 2',
                    total: 85,
                    hours: 10,
                    rate: 8.5
                },
            ],
            deductions: [
                {
                    description: 'commission 1',
                    total: 10,
                    ytd_total: 5
                }
            ],
            state: PayrollCheckStateV1.New,
            income_total: 145,
            deductions_total: 15,
            net_total: 0
        });
    }

    static assertEqualPayrollCheckV1(actual: PayrollCheckV1, expected: PayrollCheckV1) {
        assert.isNotNull(actual);
        assert.isNotNull(expected);

        assert.equal(actual.id, expected.id);
        assert.equal(actual.number, expected.number);
        assert.equal(actual.party_id, expected.party_id);
        assert.equal(actual.state, expected.state);
        assert.equal(actual.state_details, expected.state_details)

        assert.equal(actual.period_from, expected.period_from);
        assert.equal(actual.period_to, expected.period_to);

        // assert.equal(actual.create_time, expected.create_time);
        // assert.equal(actual.update_time, expected.update_time);
        // assert.equal(actual.paid_time, expected.paid_time);

        assert.equal(actual.payment_method_id, expected.payment_method_id);
        assert.equal(actual.payment_id, expected.payment_id);
        assert.equal(actual.check_number, expected.check_number);

        if (actual.income && expected.income)
        {
            assert.equal(actual.income.length, expected.income.length);    
            for (let i = 0; i < actual.income.length; i++) {
                const actualIncome = actual.income[i];
                const expectedIncome = expected.income[i];

                this.assertEqualIncomeItemV1(actualIncome, expectedIncome);
            } 
        }

        assert.equal(actual.income_total, expected.income_total);
        assert.equal(actual.ytd_income_total, expected.ytd_income_total);

        if (actual.deductions && expected.deductions)
        {
            assert.equal(actual.deductions.length, expected.deductions.length);    
            for (let i = 0; i < actual.deductions.length; i++) {
                const actualDeduction = actual.deductions[i];
                const expectedDeduction = expected.deductions[i];

                this.assertEqualDeductionItemV1(actualDeduction, expectedDeduction);
            } 
        }

        assert.equal(actual.deductions_total, expected.deductions_total);
        assert.equal(actual.ytd_deductions_total, expected.ytd_deductions_total);

        assert.equal(actual.net_total, expected.net_total);
        assert.equal(actual.ytd_net_total, expected.ytd_net_total);
    }

    static assertEqualIncomeItemV1(actual: IncomeItemV1, expected: IncomeItemV1) {
        assert.isNotNull(actual);
        assert.isNotNull(expected);

        assert.equal(actual.description, expected.description);
        assert.equal(actual.hours, expected.hours);
        assert.equal(actual.rate, expected.rate);
        assert.equal(actual.total, expected.total);
        assert.equal(actual.ytd_total, expected.ytd_total);
    }

    static assertEqualDeductionItemV1(actual: DeductionItemV1, expected: DeductionItemV1) {
        assert.isNotNull(actual);
        assert.isNotNull(expected);

        assert.equal(actual.description, expected.description);
        assert.equal(actual.total, expected.total);
        assert.equal(actual.ytd_total, expected.ytd_total);
    }
}