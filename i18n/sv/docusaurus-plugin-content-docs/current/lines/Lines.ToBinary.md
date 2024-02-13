---
title: Lines.ToBinary
---

# Lines.ToBinary


Konverterar en lista med text till ett binärvärde med angiven kodning och lineSeparator. Angiven lineSeparator läggs till för varje rad. Om den inte anges används retur- och radmatningstecknen.


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

Konverterar en lista med text till ett binärvärde med angiven kodning och lineSeparator. Angiven lineSeparator läggs till för varje rad. Om den inte anges används retur- och radmatningstecknen.



## Category
Lines
