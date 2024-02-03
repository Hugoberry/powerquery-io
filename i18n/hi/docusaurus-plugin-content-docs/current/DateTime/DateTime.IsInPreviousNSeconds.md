---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

दर्शाता है कि यह तिथिसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ सेकंड के दौरान आता है या नहीं. ध्यान दें कि वर्तमान सेकंड में आने वाला मान पास किए जाने पर यह फ़ंक्शन गलत लौटाएगा.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले कुछ सेकंड के दौरान आता है या नहीं. ध्यान दें कि वर्तमान सेकंड में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांकसमय</code>, या <code>datetimezone</code> मूल्यांकित किया जाने वाला मान.</li>      <li><code>seconds</code>: सेकंड की संख्या.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय के पहले का सेकंड पिछले दो सेकंड में है.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
