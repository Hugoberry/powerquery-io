---
title: Number.Sqrt
---

# Number.Sqrt


傳回數字的平方根。


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

傳回 <code>number</code> 的平方根。    如果 <code>number</code> 是 Null，<code>Number.Sqrt</code> 會傳回 Null。如果是負值，則傳回 <code>Number.NaN</code> (不是數字)。


## Examples

### Example #1 
找出 625 的平方根。
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
找出 85 的平方根。
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
