---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Vráti navigačnú tabuľku obsahujúcu tabuľky nachádzajúce sa v zadanom konte z trezora úložiska platformy Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Vráti navigačnú tabuľku obsahujúcu riadok pre každú tabuľku nachádzajúcu sa na URL adrese konta <code>account</code> z trezora úložiska Azure. Každý riadok obsahuje prepojenie na tabuľku služby Azure. Ak chcete zadať ďalšie vlastnosti, použite voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať tieto polia:    <ul><li><code>Timeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m žiadosti odoslanej na server. Predvolen&#225; hodnota je viazan&#225; na zdroj.</li></ul>



## Category
Accessing data
