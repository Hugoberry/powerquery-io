---
title: List.Reverse
---

# List.Reverse


सूची के मानों का क्रम उलटा करता है.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

सूची <code>list</code> के मानों वाली एक सूची उलटे क्रम में लौटाता है.


## Examples

### Example #1 
\{1..10} से उलटे क्रम में एक सूची बनाएँ.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
