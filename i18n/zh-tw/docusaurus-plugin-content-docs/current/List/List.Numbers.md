---
title: List.Numbers
---

# List.Numbers


## Description

已知初始值、計數和選擇性的遞增值，產生數字清單。


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

已知初始值、計數和選擇性的遞增值，產生數字清單。預設遞增值是 1。<ul>   <li><code>start</code>: 清單中的初始值。</li>   <li><code>count</code>: 要建立的值數目。</li>   <li><code>increment</code>: <i></i>[選擇性] 做為遞增依據的值。如果省略值，則遞增 1。</li></ul>


## Examples

### Example #1 
從 1 開始，產生 10 個連續數字的清單。
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
從 1 開始，產生 10 個數字的清單，每個後續數字遞增 2。
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
