---
title: Number.Sqrt
---

# Number.Sqrt


## Description

संख्‍या का वर्गमूल लौटाता है.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

<code>number</code> का वर्गमूल लौटाता है.    यदि <code>number</code> नल है, तो <code>Number.Sqrt</code> नल लौटाता है. यदि यह एक ऋणात्मक मान है, तो <code>Number.NaN</code> (संख्या नहीं) लौटाया जाता है.


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
