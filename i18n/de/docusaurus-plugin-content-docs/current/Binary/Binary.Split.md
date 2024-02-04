---
title: Binary.Split
---

# Binary.Split


## Description

Teilt die angegebene Binärdatei unter Verwendung der angegebenen Seitengröße in eine Liste von Binärdateien auf.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Teilt <code>binary</code> in eine Liste von Binärdateien auf, wobei das erste Element der Ausgabeliste eine Binärdatei ist, welche die ersten <code>pageSize</code> Bytes aus    der Quellbinärdatei enthält. Das nächste Element der Ausgabeliste ist eine Binärdatei, welche die nächsten <code>pageSize</code> Bytes aus der Quellbinärdatei enthält, und so weiter.



## Category
Binary
