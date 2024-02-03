---
title: Duration.Hours
---

# Duration.Hours


## Description

अवधि का घंटों वाला भाग लौटाता है.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

<code>duration</code> का घंटों वाला भाग लौटाता है.


## Examples

### Example #1 
अवधि मान से घंटे निकालें.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
