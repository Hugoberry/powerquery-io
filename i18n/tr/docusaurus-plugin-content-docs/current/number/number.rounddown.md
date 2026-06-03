---
title: Number.RoundDown
---

# Number.RoundDown


En yüksek önceki sayıyı döndürür. Basamakların sayısı belirlenebilir.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

`number` sayısının aşağı yuvarlama sonucunu önceki en yüksek tamsayıya döndürür. `number` null ise bu işlev null değerini döndürür. `digits` belirtilmişse `number` belirtilen ondalık basamak sayısına yuvarlanır.


## Examples

### Example #1
1,234 değerini aşağı doğru tamsayıya yuvarlar.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
1,999 değerini aşağı doğru tamsayıya yuvarlar.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
1999 değerini iki onlu basamak aşağıya yuvarlayın.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
