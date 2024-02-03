---
title: List.Random
---

# List.Random


## Description

返回随机数的列表。


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

给定要生成的值数和一个可选种子值，以此返回随机数(介于 0 到 1 之间)的列表。<ul>   <li><code>count</code>: 要生成的随机值数。</li>   <li><code>seed</code>:  <i>[可选]</i> 用于作为随机数生成器种子的数值。如果省略，则在每次调用函数时生成随机数的唯一列表。如果指定带数字的种子值，则每次调用函数时，生成随机数的相同列表。</li></ul>


## Examples

### Example #1 
创建 3 个随机数的列表。
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
创建 3 个随机数的列表，指定种子值。
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
