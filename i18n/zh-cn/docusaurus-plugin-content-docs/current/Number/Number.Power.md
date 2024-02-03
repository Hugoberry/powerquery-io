---
title: Number.Power
---

# Number.Power


## Description

计算某个数的指定次幂。


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

返回计算 <code>number</code> 的 <code>power</code> 次幂所得的结果。    如果 <code>number</code> 或 <code>power</code> 为 null，则 <code>Number.Power</code> 返回 null。      <ul>        <li><code>number</code>: 底数。</li>        <li><code>power</code>: 指数。</li>      </ul>


## Examples

### Example #1 
计算 5 的 3 次幂(5 的立方)的值。
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
