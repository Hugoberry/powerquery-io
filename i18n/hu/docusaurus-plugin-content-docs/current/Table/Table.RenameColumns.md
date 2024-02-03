---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Végrehajtja a \{old, new} jellegű átnevezés(eke)t.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Végrehajtja a megadott átnevezéseket a(z) <code>table</code> tábla oszlopaiban. A lecserélést végző <code>renames</code> művelet két értéklistát használ, az egyikben a régi oszlopnevek, a másikban pedig az új oszlopnevek szerepelnek.    Ha az oszlop nem létezik, kivételhiba fordul elő. Ez nem történik meg, ha a választható <code>missingField</code> paraméterrel meg van adva egy alternatíva (pl. <code>MissingField.UseNull</code> vagy <code>MissingField.Ignore</code>).


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
