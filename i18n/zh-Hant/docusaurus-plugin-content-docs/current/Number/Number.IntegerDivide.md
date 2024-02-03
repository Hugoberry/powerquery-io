---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

將兩個數字相除，然後傳回結果的整數部分。


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

將數字 <code>number1</code> 除以另一個數字 <code>number2</code>，然後傳回結果的整數部分。    如果 <code>number1</code> 或 <code>number2</code> 是 Null，<code>Number.IntegerDivide</code> 會傳回 Null。      <ul>        <li><code>number1</code>: 被除數。</li>        <li><code>number2</code>: 除數。</li>      </ul>


## Examples

### Example #1 
將 6 除以 4。
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
將 8.3 除以 3。
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
