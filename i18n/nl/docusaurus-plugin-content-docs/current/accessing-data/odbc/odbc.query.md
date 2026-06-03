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

Hiermee wordt het resultaat geretourneerd van het uitvoeren van `query` met de verbindingsreeks `connectionString` met ODBC. `connectionString` kan tekst of een record met eigenschapswaardeparen zijn. Eigenschapswaarden kunnen tekst of cijfers zijn. Een optionele recordparameter, `options`, kan worden geleverd om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `ConnectionTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is vijftien seconden.
-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.
-   `SqlCompatibleWindowsAuth` : Een logische waarde (true/false) waarmee wordt bepaald of SQL Server-compatibele verbindingsreeksopties voor Windows-verificatie moeten worden geproduceerd. De standaardwaarde is true.


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
