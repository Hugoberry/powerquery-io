---
title: List.Combine
---

# List.Combine


複数のリストを組み合わせて 1 つのリストを返します。


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

一連のリスト <code>lists</code> を受け取り、それらを 1 つの新しいリストにマージします。


## Examples

### Example #1 
\{1, 2} と \{3, 4} の 2 つの単純なリストを結合します。
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
\{1, 2} と \{3, \{4, 5}} の 2 つのリストを結合します。1 つのリストには入れ子になったリストが含まれています。
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
