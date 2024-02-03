---
title: Date.IsLeapYear
---

# Date.IsLeapYear


## Description

इंगित करता है कि क्या यह दिनांक एक लीप वर्ष में आता है.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Details

इंगित करता है कि दिया गया <code>dateTime</code> datetime मान किसी लीप वर्ष में तो नहीं आता है. <ul>        <li><code>dateTime</code>: मूल्यांकन करने के लिए <code>तिथि</code>, <code>datetime</code> या <code>datetimezone</code> मान.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्ष 2012 एक लीप वर्ष है, जैसा कि &lt;code&gt;#date(2012, 01, 01)&lt;/code&gt; द्वारा दर्शाया गया है.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
