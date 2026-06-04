---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


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


## Remarks

Vrátí seznam tabulek z Hive LLAP určených `databází` na `serveru` Hive LLAP pomocí vybraného `protokolu`. Pro server je možné volitelně zadat číslo portu oddělené dvojtečkou. Protokol Thrift Transport Protocol je výčtový typ s hodnotami Standard a HTTP. Je možné zadat nepovinný parametr `options`, pomocí kterého se dají určovat následující možnosti:

-   `ConnectionTimeout`: Jak dlouho se má čekat, než se ukončí pokus o připojení k serveru. Výchozí hodnota je závislá na ovladači.
-   `CommandTimeout`: Jak dlouho může běžet dotaz na straně serveru, než se zruší. Výchozí hodnota je závislá na ovladači.

Parametr `options` se zadává ve formátu \[možnost1 = hodnota1, možnost2 = hodnota2...\].


