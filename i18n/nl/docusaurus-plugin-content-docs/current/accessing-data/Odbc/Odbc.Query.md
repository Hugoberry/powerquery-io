---
title: Odbc.Query
---

# Odbc.Query


Retourneert het resultaat van het uitvoeren van een systeemeigen query op een ODBC-gegevensbron.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt het resultaat geretourneerd van het uitvoeren van <code>query</code> met de verbindingsreeks <code>connectionString</code> met ODBC. <code>connectionString</code> kan tekst of een record met eigenschapswaardeparen zijn. Eigenschapswaarden kunnen tekst of cijfers zijn. Een optionele recordparameter, <code>options</code>, kan worden geleverd om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:    <ul><li><code>ConnectionTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is vijftien seconden.</li><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.</li><li><code>SqlCompatibleWindowsAuth</code> : Een logische waarde (true/false) waarmee wordt bepaald of SQL Server-compatibele verbindingsreeksopties voor Windows-verificatie moeten worden geproduceerd. De standaardwaarde is true.</li></ul>


## Examples

### Example #1 
Retourneert het resultaat van het uitvoeren van een eenvoudige query op basis van de opgegeven verbindingsreeks.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
