---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Gegevens importeren uit HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een lijst met tabellen uit HDInsight Interactive Query geretourneerd die zijn opgegeven door de <code>database</code> op de HDInsight Interactive Query-<code>server</code>. Optioneel is er een poortnummer voor de server opgegeven, gescheiden door een dubbele punt. De optionele parameter <code>options</code> kan worden opgegeven om de volgende opties te controleren:<ul>        <li><code>ConnectionTimeout</code>: een tijdsduur die bepaalt hoe lang moet worden gewacht voordat een verbindingspoging met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.</li>        <li><code>CommandTimeout</code>: een tijdsduur die bepaalt hoe lang de query aan de serverzijde mag worden uitgevoerd voordat deze wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.</li></ul>De parameter <code>options</code> wordt opgegeven in de vorm [optie1 = waarde1, optie2 = waarde2...].


