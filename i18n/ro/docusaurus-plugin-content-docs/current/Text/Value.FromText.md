---
title: Value.FromText
---

# Value.FromText


## Description

Creează o valoare cu tip definit explicit dintr-o reprezentare textuală.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Decodifică o valoare dintr-o reprezentare textuală, <code>text</code>, şi o interpretează ca valoare cu un tip corespunzător.    <code>Value.FromText</code> preia o valoare text și returnează un număr, o valoare logică, o valoare null, o valoare datetime, o valoare durată sau o valoare text. Valoarea text goală este interpretată ca o valoare nulă.    De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).



## Category
Text.Conversions from and to text
