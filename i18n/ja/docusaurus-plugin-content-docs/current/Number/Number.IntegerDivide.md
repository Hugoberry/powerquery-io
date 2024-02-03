---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

2 つの数値を除算し、結果の整数部を返します。


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

数値 <code>number1</code> を別の数値 <code>number2</code> で除算した結果の整数部を返します。    <code>number1</code> または <code>number2</code> が null の場合、<code>Number.IntegerDivide</code> は null を返します。      <ul>        <li><code>number1</code>: 被除数。</li>        <li><code>number2</code>: 除数。</li>      </ul>


## Examples

### Example #1 
6 を 4 で除算します。
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
8.3 を 3 で除算します。
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
