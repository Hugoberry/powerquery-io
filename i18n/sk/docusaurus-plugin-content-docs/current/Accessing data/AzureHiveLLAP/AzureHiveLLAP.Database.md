---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Import údajov z HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vráti zoznam tabuliek z HDInsight Interactive Query, ako je určené databázou <code>database</code> na serveri <code>server</code> HDInsight Interactive Query. Voliteľne možno so serverom zadať číslo portu oddelené dvojbodkou. Môže byť zadaný voliteľný parameter <code>options</code>, ktorý ovláda tieto možnosti:<ul>        <li><code>ConnectionTimeout</code>: Trvanie určujúce, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.</li>        <li><code>CommandTimeout</code>: Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred jeho zrušením. Predvolená hodnota závisí od ovládača.</li></ul>Parameter <code>options</code> sa zadáva vo formáte [option1 = value1, option2 = value2...].


