---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Palauttaa taulukon, jonka sarakkeet ovat määritetyssä järjestyksessä.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Palauttaa taulukon syötteestä <code>table</code> niin, että sarakkeet ovat kohteen <code>columnOrder</code> määrittämässä järjestyksessä. Sarakkeita, joita ei ole määritetty luettelossa, ei järjestetä uudelleen.     Jos saraketta ei ole olemassa, aiheutuu poikkeus, ellei valinnainen parametri <code>missingField</code> määritä vaihtoehtoa (esimerkiksi <code>MissingField.UseNull</code> tai <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Vaihda sarakkeiden [Phone] ja [Name] järjestys taulukossa.
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
Vaihda sarakkeiden [Phone] ja [Address] järjestys tai käytä kohdetta MissingField.Ignore taulukossa. Se ei muuta taulukkoa, koska saraketta [Address] ei ole.
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
