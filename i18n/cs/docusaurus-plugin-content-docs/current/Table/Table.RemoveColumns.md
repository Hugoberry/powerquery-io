---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Odebere zadané sloupce.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Odebere zadanou položku <code>columns</code> z poskytnuté tabulky <code>table</code>.    Pokud zadaný sloupec neexistuje, je vyvolána chyba, jestliže volitelný parametr <code>missingField</code> neurčí alternativní chování (např. <code>MissingField.UseNull</code> nebo <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Odebere sloupec [Phone] z tabulky.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2 
Zkuste z tabulky odebrat neexistující sloupec.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
