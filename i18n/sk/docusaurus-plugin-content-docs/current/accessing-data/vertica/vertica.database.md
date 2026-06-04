---
title: Vertica.Database
---

# Vertica.Database


Importovať údaje zo služby Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku schém, ktoré sú k dispozícii na serveri pomenovanom parametrom `server` v databáze pomenovanej parametrom `database`. Na zadanie ďalších vlastností môže byť poskytnutý voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `ConnectionTimeout`: Trvanie, ktoré určuje, ako dlho sa má čakať, kým sa zruší pokus o pripojenie k serveru. Predvolená hodnota závisí od ovládača.
-   `CommandTimeout` : Trvanie, ktoré určuje, ako dlho môže byť dotaz na strane servera spustený, kým bude zrušený. Predvolená hodnota závisí od ovládača.


## Examples

### Example #1
Zobraziť zoznam tabuliek v službe Vertica
```powerquery

```



