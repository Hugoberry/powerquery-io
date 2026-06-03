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

Hiermee wordt een lijst met tabellen uit HDInsight Interactive Query geretourneerd die zijn opgegeven door de `database` op de HDInsight Interactive Query-`server`. Optioneel is er een poortnummer voor de server opgegeven, gescheiden door een dubbele punt. De optionele parameter `options` kan worden opgegeven om de volgende opties te controleren:

-   `ConnectionTimeout`: een tijdsduur die bepaalt hoe lang moet worden gewacht voordat een verbindingspoging met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `CommandTimeout`: een tijdsduur die bepaalt hoe lang de query aan de serverzijde mag worden uitgevoerd voordat deze wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.

De parameter `options` wordt opgegeven in de vorm \[optie1 = waarde1, optie2 = waarde2...\].


