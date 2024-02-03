---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

इस अवधि विस्तार के कुल मिनट लौटाता है.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

<code>duration</code> द्वारा विस्तारित कुल मिनट लौटाता है.


## Examples

### Example #1 
अवधि मान द्वारा विस्तारित कुल मिनट ढूँढें.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
