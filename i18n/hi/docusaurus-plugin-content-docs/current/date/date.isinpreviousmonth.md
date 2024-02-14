---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


दर्शाता है कि यह तिथिसमय, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले महीने के दौरान आता है या नहीं. ध्यान दें कि वर्तमान महीने में आने वाला मान पास किए जाने पर यह फ़ंक्शन गलत लौटाएगा.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

दर्शाता है कि दिया गया तिथिसमय मान <code>dateTime</code>, सिस्टम पर वर्तमान दिनांक और समय द्वारा निर्धारित किए गए अनुसार, पिछले महीने के दौरान आता है या नहीं. ध्यान दें कि वर्तमान महीने में आने वाला मान पास किए जाने पर यह फ़ंक्शन फ़ॉल्स (0) मान लौटाएगा.      <ul>      <li><code>dateTime</code>: <code>दिनांक</code>, <code>तिथिसमय</code> या <code>तिथिसमयक्षेत्र</code> मान का मूल्यांकन किया जाना है.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय से पहले का महीना, पिछले महीने में मौजूद है.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
