---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Pozitif sayıları yukarı yuvarlama ve negatif sayıları aşağı yuvarlama sonucunu döndürür. Basamakların sayısı belirlenebilir.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

`number` yuvarlamasının sonucunu, sayının işaretine göre döndürür. Bu işlev pozitif sayıları yukarı, negatif sayıları ise aşağı yuvarlar. `digits` belirlenirse, `number` değeri, `digits` değerinin onlu basamak sayısına yuvarlanır.


## Examples

### Example #1
\-1,2 sayısını sıfırdan uzağa doğru yuvarlar.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2
\-1,2 sayısını sıfırdan uzağa doğru yuvarlar.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3
1234 sayısını sıfır değerinin iki onlu basamak uzağına yuvarlayın.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
