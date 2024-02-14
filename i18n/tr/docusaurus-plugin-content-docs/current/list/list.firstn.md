---
title: List.FirstN
---

# List.FirstN


Döndürülecek öğe sayısını veya bir uygun şart belirterek listedeki ilk öğe kümesini döndürür.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

 <ul>  <li>Sayı belirtilirse, bu sayı kadar öğe döndürülür. </li>  <li>Koşul belirtilirse, bu koşulu sağlayan tüm öğeler döndürülür. Tüm öğeler koşulu sağlamadığında, başka öğe değerlendirilmez. </li> </ul>


## Examples

### Example #1 
\{3, 4, 5, -1, 7, 8, 2} listesinde 0&#39;dan büyük olan ilk değerleri bulur.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
