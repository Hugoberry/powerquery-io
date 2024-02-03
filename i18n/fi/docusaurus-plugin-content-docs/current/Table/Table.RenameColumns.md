---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Ottaa käyttöön uudelleennimeämiset muodossa \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Suorittaa annetut uudelleennimeämiset taulukon <code>table</code> sarakkeille. Korvaamistoiminto <code>renames</code> muodostuu kahden arvon (vanha sarakkeen nimi ja uusi sarakkeen nimi) luettelosta.    Jos saraketta ei ole olemassa, aiheutuu poikkeus, ellei valinnainen parametri <code>missingField</code> määritä vaihtoehtoa (esimerkiksi <code>MissingField.UseNull</code> tai <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Korvaa sarakkeen nimi &#34;CustomerNum&#34; nimellä &#34;CustomerID&#34; taulukossa.
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
Korvaa sarakkeen nimi &#34;CustomerNum&#34; nimellä &#34;CustomerID&#34; ja &#34;PhoneNum&#34; nimellä &#34;Phone&#34; taulukossa.
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
Korvaa sarakkeen nimi &#34;NewCol&#34; nimellä &#34;NewColumn&#34; taulukossa ja ohita, jos saraketta ei ole olemassa.
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
