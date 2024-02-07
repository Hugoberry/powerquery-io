---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


यह इंगित करता है कि क्या यह तिथिसमय, सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित वर्तमान मिनट के दौरान आता है.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

इंगित करता है कि क्या दिया गया तिथिसमय मान <code>dateTime</code>, सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित वर्तमान मिनट के दौरान आता है.      <ul>      <li><code>dateTime</code>: मूल्यांकित किया जाने वाला<code>तिथिसमय</code>, या <code>तिथिसमयज़ोन</code>.</li>      </ul>


## Examples

### Example #1 
निर्धारित करें कि क्या वर्तमान सिस्टम समय वर्तमान मिनट में है.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
