---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Делит два числа и возвращает целочисленную часть результата.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Возвращает целочисленную часть результата от деления числа <code>number1</code> на число <code>number2</code>.    Если <code>number1</code> или <code>number2</code> равно NULL, <code>Number.IntegerDivide</code> возвращает NULL.      <ul>        <li><code>number1</code>: делимое.</li>        <li><code>number2</code>: делитель.</li>      </ul>


## Examples

### Example #1 
Разделить 6 на 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Разделить 8,3 на 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
