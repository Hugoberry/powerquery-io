---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


दर्शाता है कि यह दिनांकसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले मिनट के दौरान आता है या नहीं. ध्यान दें कि वर्तमान मिनट में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

दर्शाता है कि दिया गया दिनांकसमय मान `dateTime`, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले मिनट के दौरान आता है या नहीं. ध्यान दें कि वर्तमान मिनट में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.

-   `dateTime`: `दिनांकसमय`, या `datetimezone` मूल्यांकित किया जाने वाला मान.


## Examples

### Example #1
निर्धारित करें कि क्या वर्तमान सिस्टम समय के पहले का मिनट पिछले मिनट में है.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
