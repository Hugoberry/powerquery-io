---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Returns the approximate number of rows in the table.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

Returns the approximate number of rows in the <code>table</code>, or an error if the data source doesn't support approximation.


## Examples

### Example #1 
Estimate the number of distinct combinations of city and state in a large table, which can be used as a cardinality estimate for the columns. Cardinality estimates are important enough that various data sources (such as SQL Server) support this particular approximation, often using an algorithm called HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
