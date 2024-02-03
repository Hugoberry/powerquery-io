---
title: Vertica.Database
---

# Vertica.Database


## Description

Import dat z Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrací tabulku schémat dostupných na serveru určeném parametrem <code>server</code> v databázi určené parametrem <code>database</code>.Je možné zadat volitelný parametr záznamu <code>options</code> k určení dalších vlastností. Záznam může obsahovat následující pole:<ul>    <li><code>ConnectionTimeout</code>: Doba, jak dlouho se má čekat, než bude ukončen neúspěšný pokus o navázání připojení k serveru. Výchozí hodnota závisí na ovladači.</li>    <li><code>CommandTimeout </code>: Doba, jak dlouho může běžet dotaz na straně serveru, než bude zrušen. Výchozí hodnota závisí na ovladači.</li></ul>


## Examples

### Example #1 
Seznam tabulek v Vertica
```powerquery

```



