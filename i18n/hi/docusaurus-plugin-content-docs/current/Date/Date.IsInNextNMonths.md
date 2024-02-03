---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

दर्शाता है कि यह दिनांक, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगले कुछ महीनों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान महीने में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगले कुछ महीनों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान महीने में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांक</code>, <code>दिनांकसमय</code> या <code>datetimezone</code>मूल्यांकित किया जाने वाला मान.</li>      <li><code>months</code>: महीनों की संख्या.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि वर्तमान सिस्‍टम समय के बाद वाला माह अगले दो माह में से है या नहीं.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
