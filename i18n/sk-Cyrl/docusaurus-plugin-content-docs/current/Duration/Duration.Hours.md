---
title: Duration.Hours
---

# Duration.Hours


## Description

Vráti časť trvania v hodinách.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Vráti časť <code>duration</code> v hodinách.


## Examples

### Example #1 
Extrahujte hodiny z hodnoty trvania.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
