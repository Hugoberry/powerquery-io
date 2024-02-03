---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Tiek atgriezta viena rinda tabulā.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Tiek atgriezta viena rinda vienā rindu <code>table</code>. Ja <code>table</code> ietver vairākas rindas, tiek aktivizēts izņēmums.


## Examples

### Example #1 
Atgrieziet atsevišķu rindu tabulā.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
