---
title: SapHana.Database
---

# SapHana.Database


Hiermee worden de pakketten in een SAP HANA-database geretourneerd.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met multidimensionale pakketten geretourneerd uit de SAP HANA-database `server`. U kunt een optionele recordparameter `options` opgeven om de volgende opties te bepalen:

-   `Query` : Een systeemeigen SQL-query die wordt gebruikt voor het ophalen van gegevens. Als de query meerdere resultatensets oplevert, wordt alleen de eerste set geretourneerd.
-   `Distribution` : Een SapHanaDistribution waarmee de waarde van de eigenschap Distribution in ver verbindingsreeks worden ingesteld. Instructieroutering is de methode voor het evalueren van het juiste serverknoppunt van een gedistribueerd systeem voor het uitvoeren van de instructie. De standaardwaarde is SapHanaDistribution.All.
-   `Implementation` : Hiermee geeft u de implementatie van de SAP HANA-connector op die moet worden gebruikt.
-   `EnableColumnBinding` : Hiermee worden variabelen gebonden aan de kolommen van een SAP HANA-resultatenset bij het ophalen van gegevens. Kan de prestaties mogelijk verbeteren ten koste van een iets hoger geheugengebruik. De standaardwaarde is false.
-   `ConnectionTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is vijftien seconden.
-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.



## Category
Accessing data
