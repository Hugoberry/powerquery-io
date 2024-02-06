---
title: OleDb.Query
---

# OleDb.Query


Retourneert het resultaat van het uitvoeren van een systeemeigen query op een OLE DB-gegevensbron.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt het resultaat geretourneerd van het uitvoeren van <code>query</code> met de verbindingsreeks <code>connectionString</code> met OLE DB. <code>connectionString</code> kan tekst of een record met eigenschapswaardeparen zijn. Eigenschapswaarden kunnen tekst of cijfers zijn. Een optionele recordparameter, <code>options</code>, kan worden geleverd om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:    <ul><li><code>ConnectionTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.</li><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Een logische waarde (true/false) waarmee wordt bepaald of SQL Server-compatibele verbindingsreeksopties voor Windows-verificatie moeten worden geproduceerd. De standaardwaarde is true.</li></ul>



## Category
Accessing data
