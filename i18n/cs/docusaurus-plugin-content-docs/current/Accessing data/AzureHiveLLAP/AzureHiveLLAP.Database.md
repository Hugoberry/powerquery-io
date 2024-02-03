---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Import dat z HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrátí seznam tabulek z HDInsight Interactive Query, jak je zadáno pomocí <code>database</code> na <code>server</code> HDInsight Interactive Query. U serveru může být volitelně zadán i port oddělený dvojtečkou. Může být zadán volitelný parametr záznamu <code>options</code>, který bude řídit následující možnosti:<ul>        <li><code>ConnectionTimeout</code>: Jak dlouho se má čekat, než se ukončí pokus o připojení k serveru. Výchozí hodnota je závislá na ovladači.</li>        <li><code>CommandTimeout</code>: Jak dlouho může běžet dotaz na straně serveru, než bude zrušen. Výchozí hodnota je závislá na ovladači.</li></ul>Parametr záznamu <code>options</code> se zadává ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...].


