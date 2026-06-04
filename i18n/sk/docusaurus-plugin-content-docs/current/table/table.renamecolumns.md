---
title: Table.RenameColumns
---

# Table.RenameColumns


Použije premenovania vo formáte \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Vykoná dané premenovania stĺpcov v tabuľke `table`. Operácia nahradenia `renames` pozostáva zo zoznamu s dvomi hodnotami, so starým názvom stĺpca a s novým názvom stĺpca, uvedenými v zozname. Ak stĺpec neexistuje, vyskytne sa chyba, pokiaľ voliteľný parameter `missingField` nemôžu zadať alternatívu (napr. `MissingField.UseNull` alebo `MissingField.Ignore`).


## Examples

### Example #1
Nahraďte v tabuľke názov stĺpca CustomerNum názvom CustomerID.
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
Nahraďte v tabuľke názov stĺpca CustomerNum názvom CustomerID a názov PhoneNum názvom Phone.
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
Nahraďte v tabuľke názov stĺpca NewCol názvom NewColumn a nastavte ignorovanie, ak stĺpec neexistuje.
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
