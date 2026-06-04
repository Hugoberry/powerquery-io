---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Palauttaa taulukon, jonka sarakkeet ovat määritetyssä järjestyksessä.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Palauttaa taulukon syötteestä `table` niin, että sarakkeet ovat kohteen `columnOrder` määrittämässä järjestyksessä. Sarakkeita, joita ei ole määritetty luettelossa, ei järjestetä uudelleen. Jos saraketta ei ole, ilmenee virhe, ellei valinnainen parametri `missingField` määritä vaihtoehtoa (esim. `MissingField.UseNull` tai `MissingField.Ignore`).


## Examples

### Example #1
Vaihda sarakkeiden \[Phone\] ja \[Name\] järjestys taulukossa.
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
Vaihda sarakkeiden \[Phone\] ja \[Address\] järjestys tai käytä kohdetta MissingField.Ignore taulukossa. Se ei muuta taulukkoa, koska saraketta \[Address\] ei ole.
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
