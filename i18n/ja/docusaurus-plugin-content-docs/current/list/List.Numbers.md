---
title: List.Numbers
---

# List.Numbers


指定された初期値、数、および省略可能な増分値に基づいて、数値のリストを返します。


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

指定された初期値、数、および省略可能な増分値に基づいて、数値のリストを返します。既定の増分値は 1 です。<ul>   <li><code>start</code>: リストの初期値。</li>   <li><code>count</code>: 作成する値の数。</li>   <li><code>increment</code>: <i>[省略可能]</i> 増分値。省略した場合、値は 1 ずつ増分されます。</li></ul>


## Examples

### Example #1 
1 で始まる 10 個の連続する数値のリストを生成します。
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
1 で始まり、2 ずつ増分される 10 個の数値のリストを生成します。
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
