---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


इंगित करता है कि क्या यह दिनांक, वर्तमान वर्ष के दौरान आता है और वर्तमान दिन को या उससे पहले है, जैसा कि सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित किया गया था.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

इंगित करता है कि क्या दिया गया datetime मान <code>dateTime</code>, वर्तमान वर्ष के दौरान आता है और वर्तमान दिन को या उससे+ पहले है, जैसा कि सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित किया गया था.      <ul>      <li><code>dateTime</code>: मूल्यांकन किया जाने वाला <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय, वर्ष से दिनांक में मौजूद है.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
