import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { PayrollChecksNullClientV1 } from '../version1/PayrollChecksNullClientV1';
import { PayrollChecksDirectClientV1 } from '../version1/PayrollChecksDirectClientV1';
import { PayrollChecksHttpClientV1 } from '../version1/PayrollChecksHttpClientV1';

export class PayrollChecksClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-payrollchecks', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-payrollchecks', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-payrollchecks', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-payrollchecks', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(PayrollChecksClientFactory.NullClientV1Descriptor, PayrollChecksNullClientV1);
		this.registerAsType(PayrollChecksClientFactory.DirectClientV1Descriptor, PayrollChecksDirectClientV1);
		this.registerAsType(PayrollChecksClientFactory.HttpClientV1Descriptor, PayrollChecksHttpClientV1);
	}
	
}
