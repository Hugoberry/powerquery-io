---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Returnerar en tabell med kolumnerna i angiven ordning.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Returnerar en tabell från indata, `table`, med kolumnerna i ordningen som anges av `columnOrder`. Ordningen för kolumner som inte anges i listan ändras inte. Om kolumnen inte finns genereras ett fel om inte den valfria parametern `missingField` anger ett alternativ (t.ex. `MissingField.UseNull` eller `MissingField.Ignore`).


## Examples

### Example #1
Byt ordning på kolumnerna \[Phone\] och \[Name\] i tabellen.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Byt ordning på kolumnerna \[Phone\] och \[Address\] eller använd MissingField.Ignore i tabellen. Den ändrar inte tabellen eftersom kolumnen \[Address\] inte finns.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
