"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const PayrollChecksNullClientV1_1 = require("../version1/PayrollChecksNullClientV1");
const PayrollChecksDirectClientV1_1 = require("../version1/PayrollChecksDirectClientV1");
const PayrollChecksHttpClientV1_1 = require("../version1/PayrollChecksHttpClientV1");
class PayrollChecksClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(PayrollChecksClientFactory.NullClientV1Descriptor, PayrollChecksNullClientV1_1.PayrollChecksNullClientV1);
        this.registerAsType(PayrollChecksClientFactory.DirectClientV1Descriptor, PayrollChecksDirectClientV1_1.PayrollChecksDirectClientV1);
        this.registerAsType(PayrollChecksClientFactory.HttpClientV1Descriptor, PayrollChecksHttpClientV1_1.PayrollChecksHttpClientV1);
    }
}
exports.PayrollChecksClientFactory = PayrollChecksClientFactory;
PayrollChecksClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-payrollchecks', 'factory', 'default', 'default', '1.0');
PayrollChecksClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-payrollchecks', 'client', 'null', 'default', '1.0');
PayrollChecksClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-payrollchecks', 'client', 'direct', 'default', '1.0');
PayrollChecksClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-payrollchecks', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=PayrollChecksClientFactory.js.map