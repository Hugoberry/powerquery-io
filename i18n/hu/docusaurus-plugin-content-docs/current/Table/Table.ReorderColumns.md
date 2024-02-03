---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Táblát ad vissza, amely a megadott sorrendben tartalmazza az oszlopokat.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Egy olyan táblát ad vissza a bemeneti <code>table</code> táblából, amely a(z) <code>columnOrder</code> által megadott sorrendben tartalmazza az oszlopokat. A listán nem szereplő oszlopok nem lesznek átrendezve.     Ha egy oszlop nem létezik, a program kivételt vált ki, kivéve abban az esetben, ha a nem kötelező <code>missingField</code> paraméterrel meg van adva egy alternatíva (pl. <code>MissingField.UseNull</code> vagy <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Felcseréli a [Phone] és a [Name] oszlopot a táblában.
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
Felcseréli a [Phone] és az [Address] oszlopot a táblában, vagy a MissingField.Ignore műveletet használja. Nem módosítja a táblát, mert az [Address] oszlop nem létezik.
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
