---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Zwraca tabelę, w której do wszystkich kolumn został dodany prefiks składający się z podanego tekstu.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Zwraca tabelę, w której nazwy wszystkich kolumn z tabeli `table` są poprzedzane prefiksem w postaci podanego tekstu `prefix` oraz kropką w formie `prefix.ColumnName`.


## Examples

### Example #1
Dołącz do kolumn w tabeli prefiks „MyTable”.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
