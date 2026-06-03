---
title: Table.Buffer
---

# Table.Buffer


Buffert een tabel in het geheugen zodat externe wijzigingen tijdens de evaluatie geen gevolgen voor die tabel hebben.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Buffert een tabel in het geheugen zodat externe wijzigingen tijdens de evaluatie geen gevolgen voor die tabel hebben. Buffering is oppervlakkig. Het dwingt de evaluatie van alle scalaire celwaarden af, maar laat niet-scalaire waarden (records, lijsten, tabellen enzovoort) ongewijzigd.

-   `table`: de tabel die in het geheugen moet worden gebufferd.
-   `options`: (optioneel) de volgende opties voor recordwaarden kunnen worden gebruikt:
    -   `BufferMode`: de buffermodus die het type buffering beschrijft dat moet worden uitgevoerd. Deze optie kan `BufferMode.Eager` of `BufferMode.Delayed` zijn.

Het gebruik van deze functie kan ervoor zorgen dat uw query's sneller worden uitgevoerd. In sommige gevallen kan het uw query's juist langzamer maken vanwege de extra kosten voor het lezen van alle gegevens en het opslaan ervan in het geheugen, en omdat buffering voorkomt dat downstream-folding plaatsvindt. Als de gegevens niet hoeven te worden gebufferd, maar u alleen downstream-folding wilt voorkomen, gebruik dan `Table.StopFolding`.


## Examples

### Example #1
Laad alle rijen van een SQL-tabel in het geheugen, zodat downstreambewerkingen geen query's meer kunnen uitvoeren op de SQL-server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
