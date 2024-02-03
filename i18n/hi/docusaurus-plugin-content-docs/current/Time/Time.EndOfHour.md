---
title: Time.EndOfHour
---

# Time.EndOfHour


## Description

घंटे का अंत लौटाता है.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Details

आंशिक सेकंड सहित, <code>dateTime</code> द्वारा दर्शाए गए घंटे के अंत में लौटाता है. समय क्षेत्र की जानकारी संरक्षित है.      <ul>        <li><code>dateTime</code>: एक ऐसा <code>time</code>, <code>datetime</code> या <code>datetimezone</code> मान, जिससे घंटे की समाप्ति का परिकलन किया जाता है.</li>      </ul>


## Examples

### Example #1 
5/14/2011 05:00:00 अपराह्न के लिए घंटे की समाप्ति प्राप्त करें.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2 
5/17/2011 05:00:00 अपराह्न -7:00 के लिए घंटे की समाप्ति प्राप्त करें.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
