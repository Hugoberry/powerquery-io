---
title: Number.Mod
---

# Number.Mod


## Description

使两个数整除并返回余数。


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

返回从 <code>number</code> 整除 <code>divisor</code> 所得的余数。    如果 <code>number</code> 或 <code>divisor</code> 为 null，则 <code>Number.Mod</code> 返回 null。      <ul>        <li><code>number</code>: 被除数。</li>        <li><code>divisor</code>: 除数。</li>      </ul>


## Examples

### Example #1 
计算 5 除以 3 所得的余数。
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
