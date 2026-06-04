---
title: List.Combine
---

# List.Combine


Повертає єдиний список шляхом об'єднання кількох списків.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

Бере список списків, `lists`, і об'єднує їх у єдиний новий список.


## Examples

### Example #1
Об'єднати два простих списки \{1, 2\} і \{3, 4\}.
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
Об'єднати два списки, \{1, 2\} і \{3, \{4, 5\}\}, один з яких містить вкладений список.
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
