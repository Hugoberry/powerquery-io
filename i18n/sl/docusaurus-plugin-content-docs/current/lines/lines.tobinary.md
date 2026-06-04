---
title: Lines.ToBinary
---

# Lines.ToBinary


Pretvori seznam besedila v dvojiško vrednost z določenim kodiranjem in lineSeparator. Določeni lineSeparator je priložen vsaki vrstici. Če ni določen, se uporabijo vrnitev prevoza in znaki za pomike v novo vrstico.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Pretvori seznam besedila v dvojiško vrednost z določenim kodiranjem in lineSeparator. Določeni lineSeparator je priložen vsaki vrstici. Če ni določen, se uporabijo vrnitev prevoza in znaki za pomike v novo vrstico.



## Category
Lines
