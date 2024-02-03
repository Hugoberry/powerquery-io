---
title: Binary.Split
---

# Binary.Split


## Description

Belirtilen sayfa boyutunu kullanarak belirtilen ikiliyi bir ikililer listesine ayırır.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

<code>binary</code> öğesini; çıkış listesinin ilk öğesinin kaynak ikilideki ilk <code>pageSize</code> baytı barındıran bir ikili olduğu, sonraki öğenin ise    kaynak ikiliden sonraki <code>pageSize</code> baytı barındıran bir ikili olduğu ve bu şekilde devam eden bir ikili listesine ayırır.



## Category
Binary
