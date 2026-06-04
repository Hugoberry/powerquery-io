---
title: Table.RenameColumns
---

# Table.RenameColumns


Použije přejmenování tvaru \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Provede zadané přejmenování sloupců v tabulce `table`. Operace nahrazení `renames` se skládá ze seznamu dvou hodnot, starého názvu sloupce a nového názvu sloupce, zadaných ve formě seznamu. Pokud sloupec neexistuje, je vyvolána chyba, jestliže volitelný parametr `missingField` neurčí alternativu (např. `MissingField.UseNull` nebo `MissingField.Ignore`).


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
