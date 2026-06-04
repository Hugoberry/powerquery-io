---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Import údajov z HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vráti zoznam tabuliek z HDInsight Interactive Query, ako je určené databázou `database` na serveri `server` HDInsight Interactive Query. Voliteľne možno so serverom zadať číslo portu oddelené dvojbodkou. Môže byť zadaný voliteľný parameter `options`, ktorý ovláda tieto možnosti:

-   `ConnectionTimeout`: Trvanie určujúce, ako dlho sa má čakať pred zanechaním pokusu o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `CommandTimeout`: Trvanie, ktoré určuje, ako dlho smie byť spustený dotaz na strane servera pred jeho zrušením. Predvolená hodnota závisí od ovládača.

Parameter `options` sa zadáva vo formáte \[option1 = value1, option2 = value2...\].


