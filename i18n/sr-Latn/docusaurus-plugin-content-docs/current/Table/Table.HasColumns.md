---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Ukazuje na to da li tabela sadrži navedenu(e) kolonu(e).


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

Pokazuje da li <code>table</code> sadrži navedene kolone, <code>columns</code>. Vraća <code>true</code> ako tabela sadrži kolonu(e). <code>false</code>u suprotnom.


## Examples

### Example #1 
Utvrđivanje da li tabela sadrži kolonu [Ime].
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
Otkrivanje da li tabela sadrži kolone [Ime] i [BrojTelefona].
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
