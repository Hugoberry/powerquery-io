---
title: List.Repeat
---

# List.Repeat


एक ऐसी सूची लौटाता है जिसमें मूल सूची की गणना पुनरावृत्तियाँ होती हैं.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

एक ऐसी सूची लौटाता है जिसमें मूल सूची, <code>list</code>, की <code>count</code> पुनरावृत्तियाँ होती हैं.


## Examples

### Example #1 
एक ऐसी सूची बनाएँ जिनमें \{1, 2} को 3 बार दोहराया गया हो.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
