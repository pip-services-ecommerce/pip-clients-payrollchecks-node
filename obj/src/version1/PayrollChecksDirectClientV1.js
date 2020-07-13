"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class PayrollChecksDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_2.Descriptor('pip-services-payrollchecks', 'controller', '*', '*', '*'));
        if (config)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getChecks(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'payrollchecks.get_checks');
        this._controller.getChecks(correlationId, filter, paging, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }
    getCheckById(correlationId, check_id, callback) {
        let timing = this.instrument(correlationId, 'payrollchecks.get_check_by_id');
        this._controller.getCheckById(correlationId, check_id, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }
    createCheck(correlationId, check, callback) {
        let timing = this.instrument(correlationId, 'payrollchecks.create_check');
        this._controller.createCheck(correlationId, check, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }
    updateCheck(correlationId, check, callback) {
        let timing = this.instrument(correlationId, 'payrollchecks.update_check');
        this._controller.updateCheck(correlationId, check, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }
    deleteCheckById(correlationId, check_id, callback) {
        let timing = this.instrument(correlationId, 'payrollchecks.delete_check_by_id');
        this._controller.deleteCheckById(correlationId, check_id, (err, check) => {
            timing.endTiming();
            callback(err, check);
        });
    }
}
exports.PayrollChecksDirectClientV1 = PayrollChecksDirectClientV1;
//# sourceMappingURL=PayrollChecksDirectClientV1.js.map