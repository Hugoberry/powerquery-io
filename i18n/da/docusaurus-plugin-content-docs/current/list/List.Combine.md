---
title: List.Combine
---

# List.Combine


Returnerer en enkelt liste ved at kombinere flere lister.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

Tager en liste over lister, <code>lists</code>, og fletter dem sammen til en enkelt ny liste.


## Examples

### Example #1 
Kombiner de to enkle lister \{1, 2} og \{3, 4}.
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
Kombiner de to lister, \{1, 2} og \{3, \{4, 5}}, hvoraf den ene indeholder en indlejret liste.
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
