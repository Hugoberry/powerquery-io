---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Import dat z HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrátí seznam tabulek z HDInsight Interactive Query, jak je zadáno pomocí `database` na `server` HDInsight Interactive Query. U serveru může být volitelně zadán i port oddělený dvojtečkou. Může být zadán volitelný parametr záznamu `options`, který bude řídit následující možnosti:

-   `ConnectionTimeout`: Jak dlouho se má čekat, než se ukončí pokus o připojení k serveru. Výchozí hodnota je závislá na ovladači.
-   `CommandTimeout`: Jak dlouho může běžet dotaz na straně serveru, než bude zrušen. Výchozí hodnota je závislá na ovladači.

Parametr záznamu `options` se zadává ve formátu \[možnost1 = hodnota1, možnost2 = hodnota2...\].


