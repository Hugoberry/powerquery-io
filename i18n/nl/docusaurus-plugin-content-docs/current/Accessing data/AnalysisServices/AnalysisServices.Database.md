---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Hiermee wordt een tabel met multidimensionale kubussen of tabellaire modellen uit de Analysis Services-database geretourneerd.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Hiermee wordt een tabel met multidimensionale kubussen of modellen in tabelvorm uit de Analysis Services-database <code>database</code> op de server <code>server</code> geretourneerd. U kunt een optionele recordparameter, <code>options</code>, opgeven om de volgende opties te bepalen:    <ul><li><code>Query</code> : Een systeemeigen MDX-query die wordt gebruikt voor het ophalen van gegevens.</li><li><code>TypedMeasureColumns</code> : Een logische waarde die aangeeft of de typen die zijn opgegeven in het multidimensionale model of het model in tabelvorm, worden gebruikt voor de typen van de toegevoegde meetkolommen. Indien ingesteld op false, wordt het type number gebruikt voor alle meetkolommen. De standaardwaarde voor deze optie is false.</li><li><code>Culture</code> : Een cultuurnaam die de cultuur voor de gegevens aangeeft. Deze waarde komt overeen met de eigenschap voor de landinstellingen-id van de verbindingsreeks.</li><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.</li><li><code>ConnectionTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.</li><li><code>SubQueries</code> : Een getal (0, 1 of 2) waarmee de waarde van de eigenschap SubQueries in een verbindingsreeks wordt ingesteld. Dit getal bepaalt het gedrag van berekende leden voor subselecties en subkubussen (de standaardwaarde is 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
