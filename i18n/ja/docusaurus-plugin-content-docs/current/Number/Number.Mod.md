---
title: Number.Mod
---

# Number.Mod


## Description

2 つの数値を整数除算して剰余を返します。


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

<code>number</code> を <code>divisor</code> で整数除算した後の剰余を返します。    <code>number</code> または <code>divisor</code> が null の場合、<code>Number.Mod</code> は null を返します。      <ul>        <li><code>number</code>: 被除数。</li>        <li><code>divisor</code>: 除数。</li>      </ul>


## Examples

### Example #1 
5 を 3 で除算した場合の剰余を求めます。
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
