---
title: Number.Sqrt
---

# Number.Sqrt


संख्‍या का वर्गमूल लौटाता है.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

`number` का वर्गमूल लौटाता है. यदि `number` नल है, तो `Number.Sqrt` नल लौटाता है. यदि यह एक ऋणात्मक मान है, तो `Number.NaN` (संख्या नहीं) लौटाया जाता है.


## Examples

### Example #1
625 का वर्गमूल प्राप्त करें.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
85 का वर्गमूल प्राप्त करें.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
