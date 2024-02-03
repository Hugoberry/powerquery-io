---
title: Number.RoundUp
---

# Number.RoundUp


## Description

En yüksek bir sonraki sayıyı döndürür. Basamakların sayısı belirlenebilir.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

<code>number</code> sayısının yukarı yuvarlama sonucunu sonraki en yüksek tamsayıya döndürür. <code>number</code> null ise bu işlev null değerini döndürür.    <code>digits</code> belirtilmişse <code>number</code> belirtilen ondalık basamak sayısına yuvarlanır.  


## Examples

### Example #1 
1,234 değerini yukarı doğru tamsayıya yuvarlar.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
1,999 değerini yukarı doğru tamsayıya yuvarlar.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
1,234 değerini iki onlu basamak yukarı yuvarlayın.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
