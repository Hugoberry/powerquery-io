---
title: List.Accumulate
---

# List.Accumulate


Akumuluje wartość podsumowania elementów listy.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Akumuluje wartość podsumowania elementów listy <code>list</code>, używając funkcji <code>accumulator</code>.    Można ustawić opcjonalny parametr inicjatora <code>seed</code>.


## Examples

### Example #1 
Akumuluje wartość podsumowania elementów listy \{1, 2, 3, 4, 5}, używając funkcji ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
