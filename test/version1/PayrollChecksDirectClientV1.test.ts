import { Descriptor, ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { PayrollChecksMemoryPersistence } from 'pip-services-payrollchecks-node';
import { PayrollChecksController } from 'pip-services-payrollchecks-node';
import { PayrollChecksDirectClientV1 } from '../../src/version1/PayrollChecksDirectClientV1';
import { PayrollChecksClientFixtureV1 } from './PayrollChecksClientFixtureV1';

suite('PayrollChecksDirectClientV1', () => {
    let client: PayrollChecksDirectClientV1;
    let fixture: PayrollChecksClientFixtureV1;

    suiteSetup((done) => {
        
        let logger = new ConsoleLogger();
        let paymentmethodsPersistence = new PayrollChecksMemoryPersistence();

        let controller = new PayrollChecksController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-payrollchecks', 'persistence', 'memory', 'default', '1.0'), paymentmethodsPersistence,
            new Descriptor('pip-services-payrollchecks', 'controller', 'default', 'default', '1.0'), controller,
        );

        paymentmethodsPersistence.setReferences(references);
        controller.setReferences(references);

        client = new PayrollChecksDirectClientV1();
        client.setReferences(references);

        fixture = new PayrollChecksClientFixtureV1(client);

        client.open(null, done);
    });

    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
