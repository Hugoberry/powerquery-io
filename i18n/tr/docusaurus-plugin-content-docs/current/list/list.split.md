---
title: List.Split
---

# List.Split


Belirtilen sayfa boyutunu kullanarak belirtilen listeyi bir listeler listesine ayırır.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

<code>list</code> öğesini; çıkış listesinin ilk öğesinin kaynak listedeki ilk <code>pageSize</code> öğeyi barındıran bir liste olduğu, sonraki öğenin ise    kaynak listeden sonraki <code>pageSize</code> öğeyi barındıran bir liste olduğu ve bu şekilde devam eden bir listeler listesine ayırır.



## Category
List.Transformation functions
