---
title: Duration.Minutes
---

# Duration.Minutes


## Description

अवधि का मिनटों वाला भाग लौटाता है.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

<code>duration</code> का मिनटों वाला भाग लौटाता है.


## Examples

### Example #1 
अवधि मान से मिनट निकालें.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
