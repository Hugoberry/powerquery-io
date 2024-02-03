---
title: Number.Power
---

# Number.Power


## Description

数値を指定された数値でべき乗します。


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

<code>number</code> を <code>power</code> でべき乗した結果を返します。    <code>number</code> または <code>power</code> が null の場合、<code>Number.Power</code> は null を返します。      <ul>        <li><code>number</code>: 基数。</li>        <li><code>power</code>: 指数。</li>      </ul>


## Examples

### Example #1 
5 を 3 でべき乗した値 (5 の 3 乗) を求めます。
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
