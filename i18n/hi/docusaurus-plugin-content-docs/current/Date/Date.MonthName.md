---
title: Date.MonthName
---

# Date.MonthName


## Description

माह घटक का नाम लौटाता है.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

प्रदान किए गए <code>date</code> के लिए माह घटक का नाम लौटाता है. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
महीने का नाम प्राप्त करें.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
