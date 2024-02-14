---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


सप्ताह के नाम का दिन लौटाता है.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

प्रदान किए गए <code>date</code> के लिए सप्ताह के नाम का दिन लौटाता है. वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
सप्ताह के दिन का नाम प्राप्त करें.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
