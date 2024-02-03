---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

使两个数相除，返回结果的整数部分。


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

返回一个数 <code>number1</code> 除以另一个数 <code>number2</code> 所得结果的整数部分。    如果 <code>number1</code> 或 <code>number2</code> 为 null，则 <code>Number.IntegerDivide</code> 返回 null。      <ul>        <li><code>number1</code>: 被除数。</li>        <li><code>number2</code>: 除数。</li>      </ul>


## Examples

### Example #1 
6 除以 4。
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
8.3 除以 3。
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
