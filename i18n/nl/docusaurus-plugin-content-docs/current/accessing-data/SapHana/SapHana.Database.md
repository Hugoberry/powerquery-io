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

Hiermee wordt een tabel met multidimensionale pakketten geretourneerd uit de SAP HANA-database <code>server</code>. U kunt een optionele recordparameter <code>options</code> opgeven om de volgende opties te bepalen:    <ul><li><code>Query</code> : Een systeemeigen SQL-query die wordt gebruikt voor het ophalen van gegevens. Als de query meerdere resultatensets oplevert, wordt alleen de eerste set geretourneerd.</li><li><code>Distribution</code> : Een SapHanaDistribution waarmee de waarde van de eigenschap Distribution in ver verbindingsreeks worden ingesteld. Instructieroutering is de methode voor het evalueren van het juiste serverknoppunt van een gedistribueerd systeem voor het uitvoeren van de instructie. De standaardwaarde is SapHanaDistribution.All.</li><li><code>Implementation</code> : Hiermee geeft u de implementatie van de SAP HANA-connector op die moet worden gebruikt.</li><li><code>EnableColumnBinding</code> : Hiermee worden variabelen gebonden aan de kolommen van een SAP HANA-resultatenset bij het ophalen van gegevens. Kan de prestaties mogelijk verbeteren ten koste van een iets hoger geheugengebruik. De standaardwaarde is false.</li><li><code>ConnectionTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is vijftien seconden.</li><li><code>CommandTimeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd. De standaardwaarde is tien minuten.</li></ul>    



## Category
Accessing data
