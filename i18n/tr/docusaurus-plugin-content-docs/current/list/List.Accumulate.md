---
title: List.Accumulate
---

# List.Accumulate


Bir toplam değerini listedeki öğelerden hesaplar.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Bir toplam değerini <code>list</code> listesindeki öğelerden <code>accumulator</code> kullanarak hesaplar.    <code>seed</code> isteğe bağlı çekirdek parametresi ayarlanabilir.


## Examples

### Example #1 
\{1, 2, 3, 4, 5} listesindeki öğelerden toplam değeri ((state, current) =&gt; state + current ) kullanarak hesaplar.
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
