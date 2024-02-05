---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Returnerar den enstaka raden i tabellen.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Returnerar den enstaka raden i <code>table</code> med en rad. Om <code>table</code> har mer än en rad genereras ett undantag.


## Examples

### Example #1 
Returnera den enskilda raden i tabellen.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
