---
title: List.Random
---

# List.Random


## Description

乱数のリストを返します。


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

指定された生成する値の数と省略可能なシード値に基づいて、0 から 1 までの範囲の乱数のリストを返します。<ul>   <li><code>count</code>: 生成する乱数の数。</li>   <li><code>seed</code>: <i>[省略可能]</i> 乱数ジェネレーターでシードを設定するために使用する数値。省略した場合、この関数を呼び出すたびに乱数の一意のリストが生成されます。数と共にシード値を指定した場合、この関数を呼び出すたびに同じ乱数のリストが生成されます。</li></ul>


## Examples

### Example #1 
3 つの乱数を含むリストを作成します。
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
シード値を指定して、3 つの乱数を含むリストを作成します。
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
