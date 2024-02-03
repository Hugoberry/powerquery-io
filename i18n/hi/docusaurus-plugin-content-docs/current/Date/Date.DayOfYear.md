---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

वर्ष के दिन का प्रतिनिधित्व करने वाली 1 से 366 तक की कोई संख्या लौटाता है.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

प्रदान किए गए <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान, <code>dateTime</code> में वर्ष के दिन का प्रतिनिधित्व करने वाली कोई संख्या लौटाता है.


## Examples

### Example #1 
1 मार्च, 2011 के लिए वर्ष का दिन.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
