---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

Import dat z Hive LLAP


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

Vrátí seznam tabulek z Hive LLAP určených <code>databází</code> na <code>serveru</code> Hive LLAP pomocí vybraného <code>protokolu</code>. Pro server je možné volitelně zadat číslo portu oddělené dvojtečkou. Protokol Thrift Transport Protocol je výčtový typ s hodnotami Standard a HTTP. Je možné zadat nepovinný parametr <code>options</code>, pomocí kterého se dají určovat následující možnosti:<ul>        <li><code>ConnectionTimeout</code>: Jak dlouho se má čekat, než se ukončí pokus o připojení k serveru. Výchozí hodnota je závislá na ovladači.</li>        <li><code>CommandTimeout</code>: Jak dlouho může běžet dotaz na straně serveru, než se zruší. Výchozí hodnota je závislá na ovladači.</li></ul>Parametr <code>options</code> se zadává ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...].


