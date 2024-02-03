---
title: Number.Sign
---

# Number.Sign


## Description

如果为正数，则返回 1；如果为负数，则返回 -1；如果为零则返回 0。


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

如果 <code>number</code>为正数，则返回 1；如果它为负数，则返回 -1；如果它为零则返回 0。    如果 <code>number</code> 为 null，则 <code>Number.Sign</code> 返回 null。


## Examples

### Example #1 
确定 182 的符号。
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
确定 -182 的符号。
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
确定 0 的符号。
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
