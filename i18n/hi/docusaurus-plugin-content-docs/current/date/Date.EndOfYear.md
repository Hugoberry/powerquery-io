---
title: Date.EndOfYear
---

# Date.EndOfYear


वर्ष के अंत में लौटाता है.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

उस साल के अंत में लौटाता है, जिसमें भिन्नात्मक सेकंड सहित <code>dateTime</code> होता है. समय क्षेत्र की जानकारी संरक्षित है.      <ul>        <li><code>dateTime</code>: एक ऐसा <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान, जिससे वर्ष की समाप्ति का परिकलन किया जाता है.</li>      </ul>


## Examples

### Example #1 
5/14/2011 05:00:00 अपराह्न के लिए वर्ष की समाप्ति प्राप्त करें.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
5/17/2011 05:00:00 अपराह्न -7:00 के लिए घंटे की समाप्ति प्राप्त करें.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
