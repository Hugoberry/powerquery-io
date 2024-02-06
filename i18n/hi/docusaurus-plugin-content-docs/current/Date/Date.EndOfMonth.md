---
title: Date.EndOfMonth
---

# Date.EndOfMonth


महीने के अंत में लौटाता है.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

उस महीने के अंत में लौटाता है जिसमें <code>dateTime</code>है.      <ul>        <li><code>dateTime</code>: एक <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान जिससे महीने की समाप्ति की गणना की जाती है</li>      </ul>


## Examples

### Example #1 
5/14/2011 के लिए महीने की समाप्ति प्राप्त करें.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
5/17/2011 05:00:00 अपराह्न -7:00 के लिए महीने की समाप्ति प्राप्त करें.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
