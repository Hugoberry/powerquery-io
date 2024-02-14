---
title: Lines.FromBinary
---

# Lines.FromBinary


Konvertiert einen Binärwert in eine Liste mit Textwerten, die an Zeilenumbrüchen geteilt werden. Bei Angabe eines Anführungszeichenstils stehen die Zeilenumbrüche unter Umständen in Anführungszeichen. Wenn &#34;includeLineSeparators&#34; den Wert &#34;true&#34; aufweist, sind die Zeilenumbruchzeichen Teil des Texts.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Konvertiert einen Binärwert in eine Liste mit Textwerten, die an Zeilenumbrüchen geteilt werden. Bei Angabe eines Anführungszeichenstils stehen die Zeilenumbrüche unter Umständen in Anführungszeichen. Wenn "includeLineSeparators" den Wert "true" aufweist, sind die Zeilenumbruchzeichen Teil des Texts.



## Category
Lines
