---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Retourneert een tabel met alleen die rijen uit de invoertabel waar in minstens een van de cellen een fout staat. Als er een lijst met kolommen is opgegeven, worden alleen de cellen die in de opgegeven kolommen staan, op fouten gecontroleerd.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Retourneert een tabel met alleen die rijen uit de invoertabel waar in minstens een van de cellen een fout staat. Als er een lijst met kolommen is opgegeven, worden alleen de cellen die in de opgegeven kolommen staan, op fouten gecontroleerd.


## Examples

### Example #1 
Selecteer namen van klanten met fouten in hun rijen.
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
