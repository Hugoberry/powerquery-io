---
title: Table.RenameColumns
---

# Table.RenameColumns


Végrehajtja a \{old, new\} jellegű átnevezés(eke)t.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Végrehajtja a megadott átnevezéseket a(z) `table` tábla oszlopaiban. A lecserélést végző `renames` művelet két értéklistát használ, az egyikben a régi oszlopnév, a másikban pedig az új oszlopnév szerepel. Ha az oszlop nem létezik, hibaüzenet jelenik meg, kivéve, ha a választható `missingField` paraméter alternatívát határoz meg (pl. `MissingField.UseNull` vagy `MissingField.Ignore`).


## Examples

### Example #1
Lecseréli a CustomerNum oszlopnevet a CustomerID névre a táblában.
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
Lecseréli a CustomerNum oszlopnevet a CustomerID névre, a PhoneNum nevet pedig a Phone névre a táblában.
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
Lecseréli a NewCol oszlopnevet a NewColumn névre a táblában. Ha az oszlop nem létezik, figyelmen kívül hagyja.
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
