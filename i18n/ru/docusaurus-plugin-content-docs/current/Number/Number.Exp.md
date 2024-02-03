---
title: Number.Exp
---

# Number.Exp


## Description

Возводит e в заданную степень.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Details

Возвращает результат возведения e в степень <code>number</code> (экспонента).      <ul>        <li><code>number</code>: значение <code>number</code>, для которого вычисляется экспонента. Если <code>number</code> имеет значение NULL, <code>Number.Exp</code> возвращает NULL. </li>      </ul>


## Examples

### Example #1 
Возвести e в степень 3.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
