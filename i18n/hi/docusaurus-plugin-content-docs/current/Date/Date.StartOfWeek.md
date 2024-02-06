---
title: Date.StartOfWeek
---

# Date.StartOfWeek


सप्ताह की शुरुआत दिखाता है.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

उस हफ़्ते के प्रारंभ में लौटाता है जिसमें <code>dateTime</code> है.    <code>dateTime</code> एक <code>date</code>, <code>datetime</code>, या <code>datetimezone</code> मान होना चाहिए.


## Examples

### Example #1 
मंगलवार, 11 अक्टूबर, 2011 के लिए सप्ताह की शुरुआत खोजें.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
सोमवार को सप्ताह की शुरुआत के रूप में उपयोग करके मंगलवार, 11 अक्टूबर 2011 के लिए सप्ताह की शुरुआत खोजें.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
