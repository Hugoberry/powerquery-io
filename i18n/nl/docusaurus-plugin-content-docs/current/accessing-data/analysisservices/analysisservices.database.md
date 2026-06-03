---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Hiermee wordt een tabel met multidimensionale kubussen of tabellaire modellen uit de Analysis Services-database geretourneerd.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met multidimensionale kubussen of modellen in tabelvorm uit de Analysis Services-database `database` op de server `server` geretourneerd. U kunt een optionele recordparameter, `options`, opgeven om de volgende opties te bepalen:

-   `Query` : Een systeemeigen MDX-query die wordt gebruikt voor het ophalen van gegevens.
-   `TypedMeasureColumns` : Een logische waarde die aangeeft of de typen die zijn opgegeven in het multidimensionale model of het model in tabelvorm, worden gebruikt voor de typen van de toegevoegde meetkolommen. Indien ingesteld op false, wordt het type number gebruikt voor alle meetkolommen. De standaardwaarde voor deze optie is false.
-   `Culture` : Een cultuurnaam die de cultuur voor de gegevens aangeeft. Deze waarde komt overeen met de eigenschap voor de landinstellingen-id van de verbindingsreeks.
-   `CommandTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `ConnectionTimeout` : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `SubQueries` : Een getal (0, 1 of 2) waarmee de waarde van de eigenschap SubQueries in een verbindingsreeks wordt ingesteld. Dit getal bepaalt het gedrag van berekende leden voor subselecties en subkubussen (de standaardwaarde is 2).
-   `Implementation`



## Category
Accessing data
