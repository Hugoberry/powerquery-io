---
title: List.Zip
---

# List.Zip


## Description

複数のリストで同じ位置にある項目を結合することによって、リストのリストを返します。


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

リストのリスト <code>lists</code> を取り、同じ位置にある項目を結合したリストのリストを返します。


## Examples

### Example #1 
2 つのシンプルなリスト \{1, 2} と \{3, 4} を zip 圧縮します。
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
長さが異なる 2 つのシンプルなリスト \{1, 2} と \{3} を zip 圧縮します。
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
