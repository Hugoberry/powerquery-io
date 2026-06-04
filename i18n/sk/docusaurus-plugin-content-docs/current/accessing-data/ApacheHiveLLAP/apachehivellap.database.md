---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Import údajov z platformy Hive LLAP


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

Vráti zoznam tabuliek z platformy Hive LLAP určených `databázou` na `serveri` Hive LLAP použitím vybratého `protokolu`. Voliteľne možno so serverom zadať číslo portu oddelené dvojbodkou. Thrift Transport Protocol je výpočtový typ s hodnotami Standard a HTTP. Môže byť zadaný voliteľný parameter `options`, ktorý ovláda tieto možnosti:

-   `ConnectionTimeout`: Trvanie určujúce, ako dlho sa má čakať pred ukončením pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `CommandTimeout`: Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera, kým bude zrušený. Predvolená hodnota závisí od ovládača.

Parameter `options` sa zadáva vo formáte \[option1 = value1, option2 = value2...\].


