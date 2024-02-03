---
title: Number.Mod
---

# Number.Mod


## Description

Выполняет целочисленное деление одного числа на другое и возвращает остаток от деления.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Возвращает остаток от целочисленного деления <code>number</code> на <code>divisor</code>.    Если <code>number</code> или <code>divisor</code> равно NULL, <code>Number.Mod</code> возвращает NULL.      <ul>        <li><code>number</code>: делимое.</li>        <li><code>divisor</code>: делитель.</li>      </ul>


## Examples

### Example #1 
Найти остаток от деления 5 на 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
