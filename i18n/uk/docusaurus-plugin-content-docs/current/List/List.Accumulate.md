---
title: List.Accumulate
---

# List.Accumulate


## Description

Накопичує сумарне значення з елементів у списку.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Накопичує сумарне значення з елементів у списку <code>list</code> з використанням <code>accumulator</code>.    Можна встановити додатковий параметр початкового значення, <code>seed</code>.


## Examples

### Example #1 
Накопичує сумарне значення з елементів у списку \{1, 2, 3, 4, 5} з використанням ((стан, поточний) =&gt; стан + поточний ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
