---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Hiermee worden de opgegeven kolommen gecombineerd tot een nieuwe kolom met recordwaarden waarbij elke record veldnamen en waarden bevat die overeenkomen met de kolomnamen en -waarden van de oorspronkelijke kolommen.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Hiermee worden de opgegeven kolommen van `table` gecombineerd in een nieuwe kolom met recordwaarden met de naam `newColumnName`, waarbij elke record over veldnamen en waarden beschikt die overeenkomen met de kolomnamen en waarden van de kolommen die zijn gecombineerd. Als er een record wordt opgegeven voor `options`, kunnen de volgende opties worden opgegeven:

-   `DisplayNameColumn`: wanneer deze waarde als tekst wordt opgegeven, geeft u hiermee aan dat de opgegeven kolomnaam moet worden gebruikt als de weergavenaam van de record. Dit hoeft niet een van de kolommen in de record zelf te zijn.
-   `TypeName`: wanneer deze waarde als tekst wordt opgegeven, wordt een logische typenaam opgegeven voor de resulterende record. Deze naam kan worden gebruikt wanneer u gegevens laadt om het gedrag in de laadomgeving te sturen.



## Category
Table.Transformation
