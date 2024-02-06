---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


दर्शाता है कि यह तिथिसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ दिनों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान दिन में आने वाला मान पास किए जाने पर यह फ़ंक्शन गलत लौटाएगा.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ दिनों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान दिन में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांक</code>, <code>दिनांकसमय</code> या <code>datetimezone</code>मूल्यांकित किया जाने वाला मान.</li>      <li><code>days</code>: दिनों की संख्या.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि वर्तमान सिस्‍टम समय से पहले वाला दिन पिछले दो दिनों में से है या नहीं.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
