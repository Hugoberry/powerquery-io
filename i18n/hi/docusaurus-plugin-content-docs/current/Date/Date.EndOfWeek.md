---
title: Date.EndOfWeek
---

# Date.EndOfWeek


सप्ताह का अंत लौटाता है.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

उस सप्ताह के अंत में लौटाता है जिसमें <code>dateTime</code> होता है.    यह फ़ंक्शन इस सापेक्षिक परिकलन के लिए सप्ताह का पहला दिन सेट करने हेतु एक वैकल्पिक <code>Day</code> <code>firstDayOfWeek</code> लेता है. डिफ़ॉल्ट मान <code>Day.Sunday</code> है.      <ul>        <li><code>dateTime</code>: एक ऐसा <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान, जिससे सप्ताह के अंतिम दिन का परिकलन किया जाता है</li>        <li><code>firstDayOfWeek</code>: <i>[वैकल्पिक]</i> सप्ताह के पहले दिन को दर्शाने वाला <code>Day.Type</code> मान संभावित मान <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> और <code>Day.Saturday.</code> हैं. डिफ़ॉल्ट मान <code>Day.Sunday</code> है.</li>      </ul>


## Examples

### Example #1 
5/14/2011 के लिए सप्ताह की समाप्ति प्राप्त करें.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
प्राप्त करें कि सप्ताह का पहला दिन रविवार होने पर, 5/17/2011 05:00:00 अपराह्न -7:00, को सप्ताह का अंत कब होगा.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
