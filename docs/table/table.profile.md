---
title: Table.Profile
---

# Table.Profile


Returns a profile of the columns of a table.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Returns a profile for the columns in <code>table</code>.<br />The following information is returned for each column (when applicable):<ul>  <li>minimum</li>  <li>maximum</li>  <li>average</li>  <li>standard deviation</li>  <li>count</li>  <li>null count</li>  <li>distinct count</li></ul><br />



## Category
Table.Information
