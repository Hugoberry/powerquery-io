---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Vráti navigačnú tabuľku obsahujúcu tabuľky nachádzajúce sa v zadanom konte z trezora úložiska platformy Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Vráti navigačnú tabuľku obsahujúcu riadok pre každú tabuľku nachádzajúcu sa na URL adrese konta `account` z trezora úložiska Azure. Každý riadok obsahuje prepojenie na tabuľku služby Azure. Na zadanie ďalších vlastností možno zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `Timeout` : Trvanie, ktoré určuje, ako dlho sa má čakať pred zanechaním žiadosti odoslanej na server. Predvolená hodnota je viazaná na zdroj.



## Category
Accessing data
