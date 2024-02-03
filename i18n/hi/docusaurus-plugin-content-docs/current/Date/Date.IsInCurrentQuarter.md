---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

इंगित करता है कि क्या यह दिनांक, वर्तमान तिमाही के दौरान आता है जैसा कि सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित किया गया था.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

इंगित करता है कि क्या दिया गया datetime मान <code>dateTime</code>, वर्तमान तिमाही के दौरान आता है जैसा कि सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित किया गया था.      <ul>      <li><code>dateTime</code>: मूल्यांकन किया जाने वाला <code>date</code>, <code>datetime</code> या <code>datetimezone</code> मान.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय, वर्तमान तिमाही में मौजूद है.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
