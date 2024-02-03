---
title: Vertica.Database
---

# Vertica.Database


## Description

Importovať údaje zo služby Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vráti tabuľku schém, ktoré sú k dispozícii na serveri pomenovanom parametrom <code>server</code> v databáze pomenovanej parametrom <code>database</code>.Na zadanie ďalších vlastností môže byť poskytnutý voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať nasledujúce polia:<ul>    <li><code>ConnectionTimeout</code>: Trvanie, ktoré určuje, ako dlho sa má čakať, kým sa zruší pokus o pripojenie k serveru. Predvolená hodnota závisí od ovládača.</li>    <li><code>CommandTimeout </code>: Trvanie, ktoré určuje, ako dlho môže byť dotaz na strane servera spustený, kým bude zrušený. Predvolená hodnota závisí od ovládača.</li></ul>


## Examples

### Example #1 
Zobraziť zoznam tabuliek v službe Vertica
```powerquery

```



