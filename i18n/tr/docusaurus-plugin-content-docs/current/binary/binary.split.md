---
title: Binary.Split
---

# Binary.Split


Belirtilen sayfa boyutunu kullanarak belirtilen ikiliyi bir ikililer listesine ayırır.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

`binary` öğesini; çıkış listesinin ilk öğesinin kaynak ikilideki ilk `pageSize` baytı barındıran bir ikili olduğu, sonraki öğenin ise kaynak ikiliden sonraki `pageSize` baytı barındıran bir ikili olduğu ve bu şekilde devam eden bir ikili listesine ayırır.



## Category
Binary
