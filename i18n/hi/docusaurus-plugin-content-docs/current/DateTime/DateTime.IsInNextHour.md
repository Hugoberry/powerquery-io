---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

दर्शाता है कि यह दिनांकसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगले घंटे के दौरान आता है या नहीं. ध्यान दें कि वर्तमान घंटे में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगले घंटे के दौरान आता है या नहीं. ध्यान दें कि वर्तमान घंटे में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांकसमय</code>, या <code>datetimezone</code>मूल्यांकित किया जाने वाला मान.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय के बाद का घंटा अगले घंटे में है.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime