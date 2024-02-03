---
title: List.Durations
---

# List.Durations


## Description

अवधि मानों की सूची जनरेट करता है जिसमें प्रारंभिक मान, गणना और वृद्धिशील अवधि मान दिया जाता है.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> से प्रारंभ होने वाले और दी गई <code>duration</code> <code>step</code> से बढ़े हुए, <code>count</code> <code>duration</code> मानों की सूची लौटाता है.


## Examples

### Example #1 
1 घंटे से प्रारंभ होने वाले और एक घंटा बढ़ते हुए 5 मानों की सूची बनाएँ.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
