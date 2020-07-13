"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class PayrollChecksHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/payroll_checks');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getChecks(correlationId, filter, paging, callback) {
        this.callCommand('get_checks', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getCheckById(correlationId, check_id, callback) {
        this.callCommand('get_check_by_id', correlationId, {
            check_id: check_id
        }, callback);
    }
    createCheck(correlationId, check, callback) {
        this.callCommand('create_check', correlationId, {
            check: check
        }, callback);
    }
    updateCheck(correlationId, check, callback) {
        this.callCommand('update_check', correlationId, {
            check: check
        }, callback);
    }
    deleteCheckById(correlationId, check_id, callback) {
        this.callCommand('delete_check_by_id', correlationId, {
            check_id: check_id
        }, callback);
    }
}
exports.PayrollChecksHttpClientV1 = PayrollChecksHttpClientV1;
//# sourceMappingURL=PayrollChecksHttpClientV1.js.map