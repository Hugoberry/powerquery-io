---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Hiermee wordt een lijst met tabellen uit Hive LLAP geretourneerd die met het geselecteerde <code>protocol</code>zijn opgegeven door de <code>database</code> op de <code>server</code> met Hive LLAP. Optioneel kan er een poortnummer voor de server worden opgegeven, gescheiden door een dubbele punt. Het Thrift Transport Protocol is een geïnventariseerd type met de waarden Standard, HTTP. De optionele parameter <code>options</code> kan worden opgegeven om de volgende opties te controleren:<ul>        <li><code>ConnectionTimeout</code>: Een tijdsduur die bepaalt hoe lang moet worden gewacht voordat een verbindingspoging met de server wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma.</li>        <li><code>CommandTimeout</code>: Een tijdsduur die bepaalt hoe lang de query aan de serverzijde mag worden uitgevoerd voordat deze wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.</li></ul>De parameter <code>options</code> wordt opgegeven in de vorm [option1 = value1, option2 = value2...].


