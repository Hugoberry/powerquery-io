---
title: Value.FromText
---

# Value.FromText


## Description

Vytvoří z textové reprezentace hodnotu silného typu.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Dekóduje hodnotu z textové reprezentace <code>text</code> a interpretuje ji jako hodnotu s příslušným typem.    Funkce <code>Value.FromText</code> přebere textovou hodnotu a vrátí číslo, logickou hodnotu, hodnotu null, datetime, duration nebo textovou hodnotu. Prázdná textová hodnota je interpretována jako hodnota null.    Volitelně je možné zadat i <code>culture</code> (např. en-US).



## Category
Text.Conversions from and to text
