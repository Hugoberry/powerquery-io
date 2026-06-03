---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


दर्शाता है कि यह दिनांक, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगले कुछ दिनों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान दिन में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

दर्शाता है कि दिया गया दिनांकसमय मान `dateTime`, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगले कुछ दिनों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान दिन में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.

-   `dateTime`: `दिनांक`, `दिनांकसमय` या `datetimezone`मूल्यांकित किया जाने वाला मान.
-   `days`: दिनों की संख्या.


## Examples

### Example #1
निर्धारित करें कि वर्तमान सिस्‍टम समय के बाद वाला दिन अगले दो दिनों में से है या नहीं.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
