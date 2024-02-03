---
title: Table.Buffer
---

# Table.Buffer


## Description

Buffert een tabel in het geheugen zodat externe wijzigingen tijdens de evaluatie geen gevolgen voor die tabel hebben.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Buffert een tabel in het geheugen, waarbij deze wordt geïsoleerd van externe wijzigingen tijdens de evaluatie.    Bufferen is ondiep. Hiermee wordt de evaluatie van alle scalaire celwaarden afgedwongen, maar blijven niet-scalaire waarden (records, lijsten, tabellen, enzovoort) ongewijzigd.     <br />    <br />    Houd er rekening mee dat uw query's mogelijk sneller kunnen worden uitgevoerd als u deze functie gebruikt. In sommige gevallen kunnen uw query's langzamer worden uitgevoerd vanwege de toegevoegde     kosten voor het lezen van alle gegevens en het opslaan ervan in het geheugen, evenals het feit dat bufferen downstream samenvouwen voorkomt. Als de gegevens niet hoeven te worden gebufferd, maar u alleen downstream samenvouwen wilt voorkomen, gebruikt u in plaats daarvan <code>Table.StopFolding</code>.


## Examples

### Example #1 
Laad alle rijen van een SQL-tabel in het geheugen, zodat downstreambewerkingen geen query&#39;s meer kunnen uitvoeren op de SQL-server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
