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

उस सप्ताह का अंत लौटाता है जिसमें `dateTime`. शामिल है. यह फ़ंक्शन एक वैकल्पिक `Day`, `firstDayOfWeek` लेता है, जिसे इस सापेक्ष गणना के लिए सप्ताह के पहले दिन के रूप में सेट किया जाता है. डिफ़ॉल्ट मान `Day.Sunday` है.

-   `dateTime`: एक `date`, `datetime`, या `datetimezone` मान, जिससे सप्ताह का अंतिम दिन परिकलित किया जाता है
-   `firstDayOfWeek`: *(वैकल्पिक)* एक `Day.Type` मान, जो सप्ताह के पहले दिन को दर्शाता है. संभावित मान `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` और `Day.Saturday` हैं. डिफ़ॉल्ट मान `Day.Sunday` है.


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
