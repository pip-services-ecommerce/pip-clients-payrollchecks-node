# Client API (version 1) <br/> PayrollChecks Microservices Client SDK for Node.js

Node.js client API for PayrollChecks microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [IPayrollChecksClientV1 interface](#interface)
    - [getChecks()](#operation1)
    - [getCheckById()](#operation2)
    - [createCheck()](#operation3)
    - [updateCheck()](#operation4)
    - [deleteCheckById()](#operation5)
* [PayrollChecksHttpClientV1 class](#client_http)
* [PayrollChecksDirectClientV1 class](#client_direct)
* [PayrollChecksNullClientV1 class](#client_null)

## <a name="interface"></a> IPayrollChecksClientV1 interface

If you are using Typescript, you can use IPayrollChecksClientV1 as a common interface across all client implementations. 
If you are using plain typescript, you shall not worry about IPayrollChecksClientV1 interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```typescript
interface IPayrollChecksClientV1 {
    getChecks(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<PayrollCheckV1>) => void): void;

    getCheckById(correlationId: string, check_id: string, party_id: string,
        callback: (err: any, check: PayrollCheckV1) => void): void;

    createCheck(correlationId: string, check: PayrollCheckV1, 
        callback: (err: any, check: PayrollCheckV1) => void): void;

    updateCheck(correlationId: string, check: PayrollCheckV1, 
        callback: (err: any, check: PayrollCheckV1) => void): void;

    deleteCheckById(correlationId: string, check_id: string, party_id: string,
        callback: (err: any, check: PayrollCheckV1) => void): void;
}
```

### <a name="operation1"></a> getChecks(correlationId, filter, paging, callback)

Get checks by filter

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- filter: Object
    - id: string - (optional) unique check id
    - ids: string - (optional) list of unique check ids 
    - state: string - (optional) check state (PayrollCheckStateV1)
    - party_id: string - (optional) check reference party id
    - from_time: Date - (optional)  checks with creation time greater than specified
    - to_time: Date - (optional) checks with creation time less than specified
- paging: Object
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result

**Response body:**
Page with retrieved checks

### <a name="operation2"></a> getCheckById(correlationId, check_id, party_id, callback)

Get check by id

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- check_id: string - check id
- party_id: string - check reference party id

**Response body:**
- check: PayrollCheckV1 - finded check 

### <a name="operation3"></a> createCheck(correlationId, check, callback)

Add new check

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- check: PayrollCheckV1 - params for creates new check

**Response body:**
- check: PayrollCheckV1 - generated new check

### <a name="operation4"></a> updateCheck(correlationId, check, callback)

Update existed check

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- check: PayrollCheckV1 - params for update existed check

**Returns:**
- err: Error - occured error or null for success
- check: PayrollCheckV1 - updated check 

### <a name="operation5"></a> deleteCheckById(correlationId, check_id, party_id, callback)

Delete check by id

**Arguments:** 
- correlationId: string - id that uniquely identifies transaction
- check_id: string - check id for delete
- party_id: string - party id in the check to be deleted

**Returns:**
- err: Error - occured error or null for success
- check: PayrollCheckV1 - deleted check 


## <a name="client_http"></a> PayrollChecksHttpClientV1 class

PayrollChecksHttpClientV1 is a client that implements HTTP protocol

```typescript
class PayrollChecksHttpClientV1 extends CommandableHttpClient implements IPayrollChecksClientV1 {
    constructor(config?: any);
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getChecks(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<PayrollCheckV1>) => void): void;
    getCheckById(correlationId: string, check_id: string, callback: (err: any, check: PayrollCheckV1) => void): void;
    createCheck(correlationId: string, check: PayrollCheckV1, callback: (err: any, check: PayrollCheckV1) => void): void;
    updateCheck(correlationId: string, check: PayrollCheckV1, callback: (err: any, check: PayrollCheckV1) => void): void;
    deleteCheckById(correlationId: string, check_id: string, callback: (err: any, check: PayrollCheckV1) => void): void;
}
```

**Constructor config properties:** 
- connection: object - HTTP transport configuration options
  - protocol: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_direct"></a> PayrollChecksDirectClientV1 class

PayrollChecksDirectClientV1 is a dummy client calls controller from the same container. 
It can be used in monolytic deployments.

```typescript
class PayrollChecksDirectClientV1 extends DirectClient<any> implements IPayrollChecksClientV1 {
    constructor();
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getChecks(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<PayrollCheckV1>) => void): void;
    getCheckById(correlationId: string, check_id: string, callback: (err: any, check: PayrollCheckV1) => void): void;
    createCheck(correlationId: string, check: PayrollCheckV1, callback: (err: any, check: PayrollCheckV1) => void): void;
    updateCheck(correlationId: string, check: PayrollCheckV1, callback: (err: any, check: PayrollCheckV1) => void): void;
    deleteCheckById(correlationId: string, check_id: string, callback: (err: any, check: PayrollCheckV1) => void): void;
}
```

## <a name="client_null"></a> PayrollChecksNullClientV1 class

PayrollChecksNullClientV1 is a dummy client that mimics the real client but doesn't call a microservice. 
It can be useful in testing scenarios to cut dependencies on external microservices.

```typescript
class PayrollChecksNullClientV1 implements IPayrollChecksClientV1 {
    constructor();
    getChecks(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<PayrollCheckV1>) => void): void;
    getCheckById(correlationId: string, check_id: string, callback: (err: any, check: PayrollCheckV1) => void): void;
    createCheck(correlationId: string, check: PayrollCheckV1, callback: (err: any, check: PayrollCheckV1) => void): void;
    updateCheck(correlationId: string, check: PayrollCheckV1, callback: (err: any, check: PayrollCheckV1) => void): void;
    deleteCheckById(correlationId: string, check_id: string, callback: (err: any, check: PayrollCheckV1) => void): void;
}
```