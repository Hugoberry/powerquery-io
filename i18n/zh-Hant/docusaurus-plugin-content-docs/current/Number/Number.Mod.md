---
title: Number.Mod
---

# Number.Mod


執行兩個數字的整數除法，然後傳回餘數。


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

傳回 <code>number</code> 除以 <code>divisor</code> 的整數除法所產生的餘數。    如果 <code>number</code> 或 <code>divisor</code> 是 Null，<code>Number.Mod</code> 會傳回 Null。      <ul>        <li><code>number</code>: 被除數。</li>        <li><code>divisor</code>: 除數。</li>      </ul>


## Examples

### Example #1 
找出 5 除以 3 的餘數。
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
