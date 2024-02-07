---
title: Salesforce.Data
---

# Salesforce.Data


Returns the objects from the Salesforce account.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Returns the objects on the Salesforce account provided in the credentials. The account will be connected through the provided environment <code>loginUrl</code>. If no environment is provided then the account will connect to production (https://login.salesforce.com). An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:    <ul><li><code>CreateNavigationProperties</code> : A logical (true/false) that sets whether to generate navigation properties on the returned values (default is false).</li><li><code>ApiVersion</code> : The Salesforce API version to use for this query. When not specified, API version 29.0 is used.</li><li><code>Timeout</code> : A duration that controls how long to wait before abandoning the request to the server. The default value is source-specific.</li></ul>    



## Category
Accessing data
