---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Vraća ukupan broj sekundi koje ovo trajanje obuhvata.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Vraća ukupan broj sekundi koje obuhvata <code>duration</code>.


## Examples

### Example #1 
Pronađite ukupan broj sekundi koje obuhvata vrednost trajanja.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
