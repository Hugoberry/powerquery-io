---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Átalakít egy bináris értéket a sortöréseknél elválasztott szöveges értékekből álló listára. Ha az idézőjel stílusa meg van adva, a sortörések idézőjelek között jelenhetnek meg. Ha az includeLineSeparators értéke igaz, a sortörés karakterek a szöveg részét képezik.


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

Átalakít egy bináris értéket a sortöréseknél elválasztott szöveges értékekből álló listára. Ha az idézőjel stílusa meg van adva, a sortörések idézőjelek között jelenhetnek meg. Ha az includeLineSeparators értéke igaz, a sortörés karakterek a szöveg részét képezik.



## Category
Lines
