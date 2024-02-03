---
title: List.Accumulate
---

# List.Accumulate


## Description

Накапливает сводное значения из элементов в списке.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Накапливает сводное значение из элементов в списке <code>list</code> с использованием <code>accumulator</code>.    Может быть установлен необязательный параметр начального значения <code>seed</code>.


## Examples

### Example #1 
Накапливает сводное значения из элементов в списке \{1, 2, 3, 4, 5}, используя выражение ((состояние, текущее значение) =&gt; состояние + текущее значение).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
