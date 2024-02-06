---
title: List.Positions
---

# List.Positions


Girdi için uzaklık listesi döndürür.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

<code>list</code> girdi listesi için uzaklık listesi döndürür.    Bir listeyi değiştirmek için List.Transform kullanılırken, konuma dönüştürme erişimi vermek üzere konum listesi kullanılabilir.


## Examples

### Example #1 
\{1, 2, 3, 4, null, 5} listesindeki değerlerin uzaklıklarını bulur.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
