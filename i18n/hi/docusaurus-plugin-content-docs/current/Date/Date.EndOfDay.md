---
title: Date.EndOfDay
---

# Date.EndOfDay


दिन के अंत में लौटाता है.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

उस दिन के अंत में लौटाता है जिसमें <code>dateTime</code> है. समय क्षेत्र की जानकारी संरक्षित है.       <ul>      <li><code>dateTime</code>: एक <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान जिससे महीने की समाप्ति की गणना की जाती है.</li>      </ul>


## Examples

### Example #1 
5/14/2011 05:00:00 अपराह्न के लिए दिन की समाप्ति प्राप्त करें.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
5/17/2011 05:00:00 अपराह्न -7:00 के लिए दिन की समाप्ति प्राप्त करें.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
