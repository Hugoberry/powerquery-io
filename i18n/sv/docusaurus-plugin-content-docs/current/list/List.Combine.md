---
title: List.Combine
---

# List.Combine


Returnerar en enskild lista genom att kombinera flera listor.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

Använder en lista med listor, <code>lists</code>, och slår ihop dem till en enda ny lista.


## Examples

### Example #1 
Kombinera de två enkla listorna \{1, 2} och \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Kombinera de två listorna, \{1, 2} och \{3, \{4, 5}}, av vilka den ena innehåller en kapslad lista.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
