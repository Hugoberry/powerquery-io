---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Gegevens importeren uit een Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een lijst met tabellen uit Hive LLAP geretourneerd die met het geselecteerde `protocol`zijn opgegeven door de `database` op de `server` met Hive LLAP. Optioneel kan er een poortnummer voor de server worden opgegeven, gescheiden door een dubbele punt. Het Thrift Transport Protocol is een geïnventariseerd type met de waarden Standard, HTTP. De optionele parameter `options` kan worden opgegeven om de volgende opties te controleren:

-   `ConnectionTimeout`: Een tijdsduur die bepaalt hoe lang moet worden gewacht voordat een verbindingspoging met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `CommandTimeout`: Een tijdsduur die bepaalt hoe lang de query aan de serverzijde mag worden uitgevoerd voordat deze wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.

De parameter `options` wordt opgegeven in de vorm \[option1 = value1, option2 = value2...\].


