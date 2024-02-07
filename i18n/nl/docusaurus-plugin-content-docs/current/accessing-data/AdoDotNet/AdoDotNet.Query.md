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

Hiermee wordt het resultaat geretourneerd van het uitvoeren van <code>query</code> met de verbindingsreeks <code>connectionString</code> met de ADO.NET-provider <code>providerName</code>. <code>connectionString</code> kan tekst of een record met eigenschapswaardeparen zijn. Eigenschapswaarden kunnen tekst of cijfers zijn. Een optionele recordparameter, <code>options</code>, kan worden geleverd om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:    <ul><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Een logische waarde (true/false) waarmee wordt bepaald of SQL Server-compatibele verbindingsreeksopties voor Windows-verificatie moeten worden geproduceerd. De standaardwaarde is true.</li></ul>



## Category
Accessing data
