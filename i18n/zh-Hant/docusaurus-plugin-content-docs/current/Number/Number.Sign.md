---
title: Number.Sign
---

# Number.Sign


如果數字是正數，傳回 1，如果是負數，傳回 -1，如果是零，則傳回 0。


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

如果 <code>number</code> 是正數，傳回 1; 如果是負數，傳回 -1; 如果是零，則傳回 0。    如果 <code>number</code> 是 Null，<code>Number.Sign</code> 會傳回 Null。


## Examples

### Example #1 
判斷 182 的符號。
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
判斷 -182 的符號。
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
判斷 0 的符號。
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
