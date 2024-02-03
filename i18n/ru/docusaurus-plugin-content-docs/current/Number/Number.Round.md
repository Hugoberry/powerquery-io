---
title: Number.Round
---

# Number.Round


## Description

Возвращает округленное число. Можно указать количество знаков и режим округления.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Возвращает результат округления <code>number</code> до ближайшего числа. Если <code>number</code> равно NULL, то <code>Number.Round</code> возвращает NULL.<br />      <br />      По умолчанию <code>number</code> округляется до ближайшего целого числа, а при неопределенности — до ближайшего четного числа (режим <code>RoundingMode.ToEven</code>, также известный как "банковское округление").<br />      <br />      Однако эти действия по умолчанию можно переопределить с помощью следующих необязательных параметров:      <ul>        <li><code>digits</code>. Округляет <code>number</code> до указанного числа десятичных разрядов.</li>        <li><code>roundingMode</code>. Переопределяет используемый по умолчанию принцип разрешения неопределенности, когда <code>number</code> лежит посередине между двумя возможными округленными значениями      (возможные значения см. в <code>RoundingMode.Type</code>).</li>      </ul>


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
