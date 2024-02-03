---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Returnerar en tabell med bara de rader i indatatabellen som innehåller ett fel i minst en av cellerna. Om en kolumnlista anges genomsöks bara cellerna i de angivna kolumnerna efter fel.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Returnerar en tabell med bara de rader i indatatabellen som innehåller ett fel i minst en av cellerna. Om en kolumnlista anges genomsöks bara cellerna i de angivna kolumnerna efter fel.


## Examples

### Example #1 
Markera namnen på kunder med fel i sina rader.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
