---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

1 से 6 की संख्या वापस करता है जो यह इंगित करता है कि इस दिनांक को महीने का कौन-सा सप्ताह आता है.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

1 से 6 की संख्या वापस करता है जो यह इंगित करता है कि दिनांक <code>dateTime</code> महीने के कौन-से सप्ताह में आती है. <ul>        <li><code>dateTime</code>: <code>तिथिसमय</code> मान, जिसके लिए महीने-का-सप्ताह निर्धारित किया गया है.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि 15 मार्च, 2011 में किस सप्ताह पर आता है.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
