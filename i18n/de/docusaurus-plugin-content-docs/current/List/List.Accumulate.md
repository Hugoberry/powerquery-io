---
title: List.Accumulate
---

# List.Accumulate


Bildet einen Zusammenfassungswert auf der Grundlage der Elemente in der Liste.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Bildet einen Zusammenfassungswert auf der Grundlage der Elemente in der Liste "<code>list</code>" (unter Verwendung von "<code>accumulator</code>").    Gegebenenfalls kann ein optionaler Seedparameter (<code>seed</code>) festgelegt werden.


## Examples

### Example #1 
Bildet den Zusammenfassungswert auf der Grundlage der Elemente in der Liste &#34;\{1, 2, 3, 4, 5}&#34; unter Verwendung von &#34;((state, current) =&gt; state + current )&#34;.
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
