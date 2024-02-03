---
title: Binary.Split
---

# Binary.Split


## Description

Bináris fájlokból álló listára osztja fel a megadott bináris fájlt a megadott oldalméret használatával.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Több bináris fájlból listából álló listára osztja fel a(z) <code>binary</code> elemet, ahol a kimeneti lista első eleme egy, a(z)     forrás bináris fájl első <code>pageSize</code> bájtját tartalmazó bináris fájl, a kimeneti lista következő eleme a forrás bináris fájl következő <code>pageSize</code> bájtját tartalmazó bináris fájl stb.



## Category
Binary
