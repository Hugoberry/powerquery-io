---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Returns the result of running a native query on an ADO.NET data source.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Returns the result of running <code>query</code> with the connection string <code>connectionString</code> using the ADO.NET provider <code>providerName</code>. <code>connectionString</code> can be text or a record of property value pairs. Property values can either be text or number. An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:    <ul><li><code>CommandTimeout</code> : A duration that controls how long the server-side query is allowed to run before it is canceled. The default value is ten minutes.</li><li><code>SqlCompatibleWindowsAuth</code> : A logical (true/false) that determines whether to produce SQL Server-compatible connection string options for Windows authentication. The default value is true.</li></ul>



## Category
Accessing data
