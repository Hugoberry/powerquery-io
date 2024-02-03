---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

यह इंगित करता है कि क्या यह तिथिसमय, सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित वर्तमान घंटे के दौरान आता है.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

इंगित करता है कि क्या दिया गया तिथिसमय मान <code>dateTime</code>, सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित वर्तमान घंटे के दौरान आता है.      <ul>      <li><code>dateTime</code>: मूल्यांकित किया जाने वाला <code>तिथिसमय</code>, या <code>तिथिसमयज़ोन</code> मान.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय वर्तमान घंटे में है.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
