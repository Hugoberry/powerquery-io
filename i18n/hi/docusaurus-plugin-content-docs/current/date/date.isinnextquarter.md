---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


दर्शाता है कि यह तिथिसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगले महीने के दौरान आता है या नहीं. ध्यान दें कि वर्तमान तिमाही में आने वाला मान पास किए जाने पर यह फ़ंक्शन गलत लौटाएगा.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगली तिमाही के दौरान आता है या नहीं. ध्यान दें कि वर्तमान तिमाही में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांक</code>, <code>दिनांकसमय</code> या <code>datetimezone</code>मूल्यांकित किया जाने वाला मान.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय के बाद की तिमाही, अगली तिमाही में मौजूद है.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
