---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


## Description

दर्शाता है कि यह दिनांक, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले वर्ष के दौरान आता है या नहीं. ध्यान दें कि वर्तमान वर्ष में आने वाले मान के निकल जाने पर यह फ़ंक्शन गलत परिणाम देगा.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Details

दर्शाता है कि दिया गया तिथिसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले वर्ष के दौरान आता है या नहीं. ध्यान दें कि वर्तमान वर्ष में आने वाला मान पास किए जाने पर यह फ़ंक्शन फ़ॉल्स (0) मान लौटाएगा.      <ul>      <li><code>dateTime</code>: <code>तिथि</code>, <code>तिथिसमय</code> या <code>तिथिसमयक्षेत्र</code> मान का मूल्यांकन किया जाना है.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय से पहले का वर्ष, पिछले वर्ष में मौजूद है.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
