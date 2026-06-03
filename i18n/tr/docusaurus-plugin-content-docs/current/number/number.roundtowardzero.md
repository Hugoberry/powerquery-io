---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Pozitif sayıları aşağı yuvarlama ve negatif sayıları yukarı yuvarlama sonucunu döndürür. Basamakların sayısı belirlenebilir.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

`number` yuvarlamasının sonucunu, sayının işaretine göre döndürür. Bu işlev pozitif sayıları aşağı, negatif sayıları ise yukarı yuvarlar. `digits` belirlenirse `number` değeri, `digits` değerinin onlu basamak sayısına yuvarlanır.


## Examples

### Example #1
\-1,2 sayısını sıfıra doğru yuvarlar.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
1,2 sayısını sıfıra doğru yuvarlar.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
\-1234 sayısını sıfır değerinin iki onlu basamak yakınına yuvarlayın.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
