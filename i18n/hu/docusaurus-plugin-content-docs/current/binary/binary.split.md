---
title: Binary.Split
---

# Binary.Split


Bináris fájlokból álló listára osztja fel a megadott bináris fájlt a megadott oldalméret használatával.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Több bináris fájlból listából álló listára osztja fel a(z) `binary` elemet, ahol a kimeneti lista első eleme egy, a(z) forrás bináris fájl első `pageSize` bájtját tartalmazó bináris fájl, a kimeneti lista következő eleme a forrás bináris fájl következő `pageSize` bájtját tartalmazó bináris fájl stb.



## Category
Binary
