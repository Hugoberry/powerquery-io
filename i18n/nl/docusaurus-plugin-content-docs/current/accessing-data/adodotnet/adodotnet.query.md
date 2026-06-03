---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Retourneert het resultaat van het uitvoeren van een systeemeigen query op een ADO.NET-gegevensbron.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt het resultaat geretourneerd van het uitvoeren van `query` met de verbindingsreeks `connectionString` met de ADO.NET-provider `providerName`. `connectionString` kan tekst of een record met eigenschapswaardeparen zijn. Eigenschapswaarden kunnen tekst of cijfers zijn. Een optionele recordparameter, `options`, kan worden geleverd om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.
-   `SqlCompatibleWindowsAuth` : Een logische waarde (true/false) waarmee wordt bepaald of SQL Server-compatibele verbindingsreeksopties voor Windows-verificatie moeten worden geproduceerd. De standaardwaarde is true.



## Category
Accessing data
