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

इंगित करता है कि क्या दिया गया तिथिसमय मान `dateTime`, सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित वर्तमान मिनट के दौरान आता है.

-   `dateTime`: मूल्यांकित किया जाने वाला`तिथिसमय`, या `तिथिसमयज़ोन`.


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
