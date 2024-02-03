---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Converteix un valor binari en una llista de valors de text separats per salts de línia. Si s&#39;especifica un estil de cita, és possible que els salts de línia apareguin entre cometes. Si includeLineSeparators té el valor true, els caràcters de salt de línia s&#39;inclouen al text.


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

Converteix un valor binari en una llista de valors de text separats per salts de línia. Si s'especifica un estil de cita, és possible que els salts de línia apareguin entre cometes. Si includeLineSeparators té el valor true, els caràcters de salt de línia s'inclouen al text.



## Category
Lines
