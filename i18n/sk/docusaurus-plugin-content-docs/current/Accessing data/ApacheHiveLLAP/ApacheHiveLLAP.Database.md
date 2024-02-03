---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

Vráti zoznam tabuliek z platformy Hive LLAP určených <code>databázou</code> na <code>serveri</code> Hive LLAP použitím vybratého <code>protokolu</code>. Voliteľne možno so serverom zadať číslo portu oddelené dvojbodkou. Thrift Transport Protocol je výpočtový typ s hodnotami Standard a HTTP. Môže byť zadaný voliteľný parameter <code>options</code>, ktorý ovláda tieto možnosti:<ul>        <li><code>ConnectionTimeout</code>: Trvanie určujúce, ako dlho sa má čakať pred ukončením pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.</li>        <li><code>CommandTimeout</code>: Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera, kým bude zrušený. Predvolená hodnota závisí od ovládača.</li></ul>Parameter <code>options</code> sa zadáva vo formáte [option1 = value1, option2 = value2...].


