---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


## Description

दर्शाता है कि यह तिथिसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछली कुछ तिमाहियों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान तिमाही में आने वाला मान पास किए जाने पर यह फ़ंक्शन गलत लौटाएगा.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछली कुछ तिमाहियों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान महीने में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांक</code>, <code>दिनांकसमय</code> या <code>datetimezone</code>मूल्यांकित किया जाने वाला मान.</li>      <li><code>quarters</code>: तिमाहियों की संख्या.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि वर्तमान सिस्‍टम समय से पहले वाली तिमाही पिछली दो तिमाही में से है या नहीं.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
