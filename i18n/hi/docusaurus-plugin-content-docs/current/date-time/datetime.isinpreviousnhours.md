---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


दर्शाता है कि यह दिनांकसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ घंटों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान घंटे में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

दर्शाता है कि दिया गया दिनांकसमय मान `dateTime`, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ घंटों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान घंटे में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.

-   `dateTime`: `दिनांकसमय`, या `datetimezone` मूल्यांकित किया जाने वाला मान.
-   `hours`: घंटों की संख्या.


## Examples

### Example #1
निर्धारित करें कि क्या वर्तमान सिस्टम समय के पहले का घंटा पिछले दो घंटों में है.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
