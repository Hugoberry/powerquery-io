---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

घंटे के प्रारंभ में लौटाता है.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> द्वारा दर्शाए गए दिन की शुरुआत में लौटाता है.    <code>dateTime</code> का एक <code>time</code>, <code>datetime</code> or <code>datetimezone</code> मान होना अनिवार्य है.


## Examples

### Example #1 
10 अक्टूबर, 2011, 8:10:32 पूर्वाह्न के लिए घंटे के प्रारंभ में प्राप्त करें.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
