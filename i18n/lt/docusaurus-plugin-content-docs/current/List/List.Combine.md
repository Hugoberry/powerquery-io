---
title: List.Combine
---

# List.Combine


## Description

Pateikiamas vienas sąrašas, gautas sujungus keletą sąrašų.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Paimamas sąrašų sąrašas, <code>lists</code>, ir suliejamas į vieną naują sąrašą.


## Examples

### Example #1 
Sujunkite du paprastus sąrašus \{1, 2} ir \{3, 4}.
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
Sujunkite du sąrašus, \{1, 2} ir \{3, \{4, 5}}, iš kurių viename yra įdėtasis sąrašas.
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
