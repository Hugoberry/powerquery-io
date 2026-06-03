---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Retourneert de Analysis Services-databases op een bepaalde host.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Hiermee worden databases op een Analysis Services-exemplaar `server` geretourneerd. U kunt een optionele recordparameter `options` gebruiken om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `TypedMeasureColumns` : Een logische waarde die aangeeft of de typen die zijn opgegeven in het multidimensionale model of het model in tabelvorm, worden gebruikt voor de typen van de toegevoegde meetkolommen. Indien ingesteld op false, wordt het type number gebruikt voor alle meetkolommen. De standaardwaarde voor deze optie is false.
-   `Culture` : Een cultuurnaam die de cultuur voor de gegevens aangeeft. Deze waarde komt overeen met de eigenschap voor de landinstellingen-id van de verbindingsreeks.
-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `ConnectionTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `SubQueries` : Een getal (0, 1 of 2) waarmee de waarde van de eigenschap SubQueries in een verbindingsreeks wordt ingesteld. Dit getal bepaalt het gedrag van berekende leden voor subselecties en subkubussen (de standaardwaarde is 2).
-   `Implementation`



## Category
Accessing data
