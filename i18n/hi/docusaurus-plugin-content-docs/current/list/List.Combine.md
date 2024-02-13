---
title: List.Combine
---

# List.Combine


एकाधिक सूचियाँ संयोजित करके एकल सूची लौटाता है.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

सूचियों, <code>lists</code>, की एक सूची लेता है और उन्हें एक एकल नई सूची में मर्ज करता है.


## Examples

### Example #1 
दो सरल सूचियों \{1, 2} और \{3, 4} को संयोजित करता है.
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
दो सूचियों, \{1, 2} और \{3, \{4, 5}} को संयोजित करें, जिनमें से एक में नेस्ट की गई सूची होती है.
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
