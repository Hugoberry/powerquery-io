---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

दर्शाता है कि यह दिनांकसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगले कुछ घंटों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान घंटे में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, अगले कुछ घंटों के दौरान आता है या नहीं. ध्यान दें कि वर्तमान घंटे में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांकसमय</code>, या <code>datetimezone</code>मूल्यांकित किया जाने वाला मान.</li>      <li><code>hours</code>: घंटों की संख्या.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय के बाद का घंटा अगले दो घंटों में है.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
