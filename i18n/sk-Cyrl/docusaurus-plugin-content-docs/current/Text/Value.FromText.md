---
title: Value.FromText
---

# Value.FromText


## Description

Vytvorí hodnotu silného typu z textového vyjadrenia.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Dekóduje hodnotu z textového vyjadrenia <code>text</code> a interpretuje ju ako hodnotu vhodného typu.    <code>Value.FromText</code> použije textovú hodnotu a vráti číslo, logickú hodnotu, hodnotu null, hodnotu dátumu a času, hodnotu trvania alebo textovú hodnotu. Prázdna textová hodnota sa interpretuje ako hodnota null.    Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).



## Category
Text.Conversions from and to text
