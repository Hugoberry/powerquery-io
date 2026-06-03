---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Hiermee wordt de schemaverzameling voor een ADO.NET-gegevensbron geretourneerd.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Hiermee wordt de schemaverzameling voor de ADO.NET-gegevensbron geretourneerd met de providernaam `providerName` en de verbindingsreeks `connectionString`. `connectionString` kan tekst of een record met eigenschapswaardeparen zijn. De eigenschapwaarden kunnen teksten of getallen zijn. Een optionele recordparameter, `options`, kan worden geleverd om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.
-   `SqlCompatibleWindowsAuth` : Een logische waarde (true/false) waarmee wordt bepaald of SQL Server-compatibele verbindingsreeksopties voor Windows-verificatie moeten worden geproduceerd. De standaardwaarde is true.
-   `TypeMap`



## Category
Accessing data
