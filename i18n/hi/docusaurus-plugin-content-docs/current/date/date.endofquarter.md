---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


तिमाही के अंत में लौटाता है.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

उस महीने के अंत में लौटाता है जिसमें <code>dateTime</code>है. समय क्षेत्र की जानकारी संरक्षित है.       <ul>      <li><code>dateTime</code>: एक <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान जिससे महीने की समाप्ति की गणना की जाती है.</li>      </ul>


## Examples

### Example #1 
10 अक्टूबर, 2011, 8:00 पूर्वाह्न के लिए तिमाही की समाप्ति प्राप्त करें.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
