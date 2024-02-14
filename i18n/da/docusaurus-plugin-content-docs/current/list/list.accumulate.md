---
title: List.Accumulate
---

# List.Accumulate


Akkumulerer en opsamlingsværdi fra elementer på listen.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Akkumulerer en opsamlingsværdi fra elementerne på listen <code>list</code> ved hjælp af <code>accumulator</code>.    Du kan angive en valgfri seed-parameter, <code>seed</code>.


## Examples

### Example #1 
Akkumulerer opsamlingsværdien fra elementerne på listen \{1, 2, 3, 4, 5} ved hjælp af ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
