---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


## Description

Екіліктің жуықталған ұзындығын қайтарады.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Details

<code>binary</code> жуықталған ұзындығын немесе деректер көзі жуықталған ұзындықты қолдамаса, қатені қайтарады.


## Examples

### Example #1 
Екілік мәннің жуықталған ұзындығын алу.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
