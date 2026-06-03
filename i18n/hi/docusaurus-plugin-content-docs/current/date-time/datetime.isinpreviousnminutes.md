---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


दर्शाता है कि यह दिनांकसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ मिनटों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान मिनट में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

दर्शाता है कि दिया गया दिनांकसमय मान `dateTime`, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ मिनटों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान मिनट में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.

-   `dateTime`: `दिनांकसमय`, या `datetimezone` मूल्यांकित किया जाने वाला मान.
-   `minutes`: मिनटों की संख्या.


## Examples

### Example #1
निर्धारित करें कि क्या वर्तमान सिस्टम समय के पहले का मिनट पिछले दो मिनट में है.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
