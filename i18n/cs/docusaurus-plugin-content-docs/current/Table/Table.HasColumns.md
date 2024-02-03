---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Určuje, zda tabulka obsahuje zadaný sloupec nebo sloupce.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Určuje, zda <code>table</code> obsahuje zadaný sloupec nebo sloupce <code>columns</code>. Vrátí <code>true</code> pokud tabulka obsahuje sloupce, <code>false</code> jinak.


## Examples

### Example #1 
Určí, jestli tabulka obsahuje sloupec [Name].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
Zjistí, jestli tabulka obsahuje sloupec [Name] a [PhoneNumber].
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
