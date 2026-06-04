---
title: Table.SingleRow
---

# Table.SingleRow


Vrne eno vrstico v tabeli.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Vrne eno vrstico v tabeli `table` z eno vrstico. Če ima tabela `table` več kot eno vrstico, pride do napake.


## Examples

### Example #1
Vrnite eno vrstico v tabeli.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
