---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Convertește o valoare binară într-o listă de valori text divizate la sfârșitul de linie. Dacă se specifică un stil de citare, atunci sfârșiturile de linie pot apărea între ghilimele. Dacă includeLineSeparators are valoarea true, atunci caracterele sfârșit de linie sunt incluse în text.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

Convertește o valoare binară într-o listă de valori text divizate la sfârșitul de linie. Dacă se specifică un stil de citare, atunci sfârșiturile de linie pot apărea între ghilimele. Dacă includeLineSeparators are valoarea true, atunci caracterele sfârșit de linie sunt incluse în text.



## Category
Lines
