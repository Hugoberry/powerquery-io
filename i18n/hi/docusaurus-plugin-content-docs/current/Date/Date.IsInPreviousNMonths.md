---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

दर्शाता है कि यह दिनांक, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ महीनों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान महीने में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ महीनों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान महीने में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांक</code>, <code>दिनांकसमय</code> या <code>datetimezone</code>मूल्यांकित किया जाने वाला मान.</li>      <li><code>months</code>: महीनों की संख्या.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि वर्तमान सिस्‍टम समय से पहले वाला माह पिछले दो माह में से है या नहीं.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
