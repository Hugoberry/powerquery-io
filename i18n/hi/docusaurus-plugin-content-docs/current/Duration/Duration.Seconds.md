---
title: Duration.Seconds
---

# Duration.Seconds


## Description

अवधि का सेकंडों वाला भाग लौटाता है.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

<code>duration</code> का सेकंडों वाला भाग लौटाता है.


## Examples

### Example #1 
अवधि मान से सेकंड निकालें.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
