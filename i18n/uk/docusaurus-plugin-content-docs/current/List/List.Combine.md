---
title: List.Combine
---

# List.Combine


## Description

Повертає єдиний список шляхом об&#39;єднання кількох списків.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Бере список списків, <code>lists</code>, і об'єднує їх у єдиний новий список.


## Examples

### Example #1 
Об&#39;єднати два простих списки \{1, 2} і \{3, 4}.
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
Об&#39;єднати два списки, \{1, 2} і \{3, \{4, 5}}, один з яких містить вкладений список.
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
