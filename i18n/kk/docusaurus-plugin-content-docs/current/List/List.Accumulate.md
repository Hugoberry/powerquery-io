---
title: List.Accumulate
---

# List.Accumulate


## Description

Тізімдегі элементтерден жиынтық мәнді жинайды.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

<code>accumulator</code> пайдаланып <code>list</code> тізіміндегі элементтерден жиынтық мәнді жинайды.    <code>seed</code> міндетті емес SEED параметрін орнатуға болады.


## Examples

### Example #1 
((state, current) =&gt; state + current ) өрнегін пайдаланып \{1, 2, 3, 4, 5} тізіміндегі элементтерден жиынтық мәнді жинайды.
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
