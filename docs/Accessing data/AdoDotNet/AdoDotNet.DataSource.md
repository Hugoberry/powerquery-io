---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Returns the schema collection for an ADO.NET data source.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Returns the schema collection for the ADO.NET data source with provider name <code>providerName</code> and connection string <code>connectionString</code>. <code>connectionString</code> can be text or a record of property value pairs. Property values can either be text or number. An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:    <ul><li><code>CommandTimeout</code> : A duration that controls how long the server-side query is allowed to run before it is canceled. The default value is ten minutes.</li><li><code>SqlCompatibleWindowsAuth</code> : A logical (true/false) that determines whether to produce SQL Server-compatible connection string options for Windows authentication. The default value is true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
