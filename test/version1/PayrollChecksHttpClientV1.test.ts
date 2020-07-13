let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { PayrollChecksMemoryPersistence } from 'pip-services-payrollchecks-node';
import { PayrollChecksController } from 'pip-services-payrollchecks-node';
import { PayrollChecksHttpServiceV1 } from 'pip-services-payrollchecks-node';
import { PayrollChecksHttpClientV1 } from '../../src/version1/PayrollChecksHttpClientV1';
import { PayrollChecksClientFixtureV1 } from './PayrollChecksClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PayrollChecksHttpClientV1', () => {
    let service: PayrollChecksHttpServiceV1;
    let client: PayrollChecksHttpClientV1;
    let fixture: PayrollChecksClientFixtureV1;

    suiteSetup((done) => {

        let logger = new ConsoleLogger();
        let persistence = new PayrollChecksMemoryPersistence();
        let controller = new PayrollChecksController();

        service = new PayrollChecksHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-payrollchecks', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-payrollchecks', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-payrollchecks', 'service', 'http', 'default', '1.0'), service
        );

        persistence.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new PayrollChecksHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new PayrollChecksClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
