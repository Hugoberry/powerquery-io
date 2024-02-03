---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

दर्शाता है कि यह दिनांक, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगली कुछ तिमाहियों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान तिमाही में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगली कुछ तिमाहियों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान तिमाही में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांक</code>, <code>दिनांकसमय</code> या <code>datetimezone</code>मूल्यांकित किया जाने वाला मान.</li>      <li><code>quarters</code>: तिमाहियों की संख्या.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि वर्तमान सिस्‍टम समय के बाद वाली तिमाही अगली दो तिमाही में से है या नहीं.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
