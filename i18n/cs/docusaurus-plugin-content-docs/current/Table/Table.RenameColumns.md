---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Použije přejmenování tvaru \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Provede zadané přejmenování sloupců v tabulce <code>table</code>. Operace nahrazení <code>renames</code> se skládá ze seznamu dvou hodnot, starého názvu sloupce a nového názvu sloupce, zadaných ve formě seznamu.    Pokud sloupec neexistuje, je vyvolána výjimka, jestliže volitelný parametr <code>missingField</code> neurčí alternativu (např. <code>MissingField.UseNull</code> nebo <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Nahradí v tabulce název sloupce CustomerNum názvem CustomerID.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Nahradí v tabulce název sloupce CustomerNum názvem CustomerID a název sloupce PhoneNum názvem Phone.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
Nahradí v tabulce název sloupce NewCol názvem NewColumn a ignoruje příkaz, pokud sloupec neexistuje.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
