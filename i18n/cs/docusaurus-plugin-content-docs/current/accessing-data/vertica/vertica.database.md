---
title: Vertica.Database
---

# Vertica.Database


Import dat z Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrací tabulku schémat dostupných na serveru určeném parametrem `server` v databázi určené parametrem `database`. Je možné zadat volitelný parametr záznamu `options` k určení dalších vlastností. Záznam může obsahovat následující pole:

-   `ConnectionTimeout`: Doba, jak dlouho se má čekat, než bude ukončen neúspěšný pokus o navázání připojení k serveru. Výchozí hodnota závisí na ovladači.
-   `CommandTimeout` : Doba, jak dlouho může běžet dotaz na straně serveru, než bude zrušen. Výchozí hodnota závisí na ovladači.


## Examples

### Example #1
Seznam tabulek v Vertica
```powerquery

```



