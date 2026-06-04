---
title: Table.RenameColumns
---

# Table.RenameColumns


Ottaa käyttöön uudelleennimeämiset muodossa \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Suorittaa annetut uudelleennimeämiset taulukon `table` sarakkeille. Korvaamistoiminto `renames` muodostuu kahden arvon (vanha sarakkeen nimi ja uusi sarakkeen nimi) luettelosta. Jos saraketta ei ole, ilmenee virhe, ellei valinnainen parametri `missingField` määritä vaihtoehtoa (esim. `MissingField.UseNull` tai `MissingField.Ignore`).


## Examples

### Example #1
Korvaa sarakkeen nimi "CustomerNum" nimellä "CustomerID" taulukossa.
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
Korvaa sarakkeen nimi "CustomerNum" nimellä "CustomerID" ja "PhoneNum" nimellä "Phone" taulukossa.
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
Korvaa sarakkeen nimi "NewCol" nimellä "NewColumn" taulukossa ja ohita, jos saraketta ei ole olemassa.
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
