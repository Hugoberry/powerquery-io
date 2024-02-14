---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


वह संख्या लौटाता है जो यह इंगित करती है कि दिनांक वर्ष की कौन सी तिमाही आता है.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

1 से 4 तक संख्या लौटाता है जो यह इंगित करती है कि दिनांक वर्ष <code>dateTime</code> की कौन सी तिमाही में आता है. <code>dateTime</code>, एक <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान हो सकता है.


## Examples

### Example #1 
प्राप्त करें कि दिनांक #date(2011, 12, 31) वर्ष की कौन सी तिमाही में आता है.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
