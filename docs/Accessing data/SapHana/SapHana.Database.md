---
title: SapHana.Database
---

# SapHana.Database


Returns the packages in an SAP HANA database.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Returns a table of multidimensional packages from the SAP HANA database <code>server</code>. An optional record parameter, <code>options</code>, may be specified to control the following options:    <ul><li><code>Query</code> : A native SQL query used to retrieve data. If the query produces multiple result sets, only the first will be returned.</li><li><code>Distribution</code> : A SapHanaDistribution that sets the value of the &quot;Distribution&quot; property in the connection string. Statement routing is the method of evaluating the correct server node of a distributed system before statement execution. The default value is SapHanaDistribution.All.</li><li><code>Implementation</code> : Specifies the implementation of the SAP HANA connector to use.</li><li><code>EnableColumnBinding</code> : Binds variables to the columns of a SAP HANA result set when fetching data. May potentially improve performance at the cost of slightly higher memory utilization. The default value is false.</li><li><code>ConnectionTimeout</code> : A duration that controls how long to wait before abandoning an attempt to make a connection to the server. The default value is 15 seconds.</li><li><code>CommandTimeout</code> : A duration that controls how long the server-side query is allowed to run before it is canceled. The default value is ten minutes.</li></ul>    



## Category
Accessing data
