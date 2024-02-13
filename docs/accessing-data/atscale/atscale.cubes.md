---
title: AtScale.Cubes
---

# AtScale.Cubes


Import/DirectQuery cube data from an AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Returns cube data from AtScale on server <code>server</code>. An optional record parameter, <code>options</code>, may be specified to control the following options:<ul>        <li><code>TypedMeasureColumns</code>: A logical value indicating if the types specified in the multidimensional or tabular model will be used for the types of the added measure columns. When set to false, the type "number" will be used for all measure columns. The default value for this option is false.</li>        <li><code>CommandTimeout</code>: A duration (in seconds) which controls how long the server-side query is allowed to run before it is canceled. The default value is driver-dependent. </li>        <li><code>ConnectionTimeout</code>: A duration (in seconds) which controls how long to wait before abandoning an attempt to make a connection to the server. The default value is driver-dependent. </li></ul>The record parameter is specified as [option1 = value1, option2 = value2...].


