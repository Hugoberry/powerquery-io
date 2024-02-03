---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

दर्शाता है कि यह दिनांक, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछली तिमाही के दौरान आता है या नहीं. ध्यान दें कि वर्तमान तिमाही में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछली तिमाही के दौरान आता है या नहीं. ध्यान दें कि वर्तमान तिमाही में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांक</code>, <code>दिनांकसमय</code> या <code>datetimezone</code>मूल्यांकित किया जाने वाला मान.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय से पहले की तिमाही, पिछली तिमाही में मौजूद है.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
