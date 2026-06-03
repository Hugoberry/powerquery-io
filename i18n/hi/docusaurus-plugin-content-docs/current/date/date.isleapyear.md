---
title: Date.IsLeapYear
---

# Date.IsLeapYear


इंगित करता है कि क्या यह दिनांक एक लीप वर्ष में आता है.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

इंगित करता है कि दिया गया `dateTime` datetime मान किसी लीप वर्ष में तो नहीं आता है.

-   `dateTime`: मूल्यांकन करने के लिए `तिथि`, `datetime` या `datetimezone` मान.


## Examples

### Example #1
निर्धारित करें कि क्या वर्ष 2012 एक लीप वर्ष है, जैसा कि `#date(2012, 01, 01)` द्वारा दर्शाया गया है.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
