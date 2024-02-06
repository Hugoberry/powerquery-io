---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


दर्शाता है कि यह दिनांकसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले सेकंड के दौरान आता है या नहीं. ध्यान दें कि वर्तमान सेकंड में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

दर्शाता है कि दिया गया दिनांकसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले सेकंड के दौरान आता है या नहीं. ध्यान दें कि वर्तमान सेकंड में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.      <ul>      <li><code>dateTime</code>: <code>दिनांकसमय</code>, या <code>datetimezone</code> मूल्यांकित किया जाने वाला मान.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय के पहले का सेकंड पिछले सेकंड में है.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
