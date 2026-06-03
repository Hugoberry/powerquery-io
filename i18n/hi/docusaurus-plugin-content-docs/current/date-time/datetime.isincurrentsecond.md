---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


यह इंगित करता है कि क्या यह तिथिसमय, सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित वर्तमान सेकंड के दौरान आता है.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

इंगित करता है कि क्या दिया गया तिथिसमय मान `dateTime` सिस्टम के वर्तमान दिनांक और समय द्वारा निर्धारित वर्तमान सेकंड के दौरान आता है.

-   `dateTime`: मूल्यांकित किया जाने वाला `तिथिसमय`, या `तिथिसमयज़ोन` मान.


## Examples

### Example #1
निर्धारित करें कि क्या वर्तमान सिस्टम समय वर्तमान सेकंड में है.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
