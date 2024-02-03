---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

Teksto sąrašas konvertuojamas į dvejetainę reikšmę naudojant nurodytą kodavimą ir lineSeparator. Nurodytas lineSeparator pridedamas prie kiekvienos eilutės.  Jei nenurodyta, tada naudojami eilučių perkėlimo ir įvedimo į eilutę simboliai.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Details

Teksto sąrašas konvertuojamas į dvejetainę reikšmę naudojant nurodytą kodavimą ir lineSeparator. Nurodytas lineSeparator pridedamas prie kiekvienos eilutės.  Jei nenurodyta, tada naudojami eilučių perkėlimo ir įvedimo į eilutę simboliai.



## Category
Lines
