---
title: Number.Round
---

# Number.Round


Возвращает округленное число. Можно указать количество знаков и режим округления.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Возвращает результат округления `number` до ближайшего числа. Если `number` равно NULL, то `Number.Round` возвращает NULL.  
  
По умолчанию `number` округляется до ближайшего целого числа, а при неопределенности — до ближайшего четного числа (режим `RoundingMode.ToEven`, также известный как "банковское округление").  
  
Однако эти действия по умолчанию можно переопределить с помощью следующих необязательных параметров:

-   `digits`. Округляет `number` до указанного числа десятичных разрядов.
-   `roundingMode`. Переопределяет используемый по умолчанию принцип разрешения неопределенности, когда `number` лежит посередине между двумя возможными округленными значениями (возможные значения см. в `RoundingMode.Type`).


## Examples

### Example #1
Округлить 1,234 до ближайшего целого числа.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Округлить 1,56 до ближайшего целого числа.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Округлить 1,2345 до 2 десятичных разрядов.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Округлить 1,2345 до 3 десятичных разрядов (с округлением в большую сторону).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Округлить 1,2345 до 3 десятичных разрядов (с округлением в меньшую сторону).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
