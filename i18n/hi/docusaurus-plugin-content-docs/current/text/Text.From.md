---
title: Text.From
---

# Text.From


दिए गए मान से एक पाठ मान बनाता है.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

<code>value</code> का पाठ प्रस्तुतिकरण लौटाता है. <code>value</code> एक <code>संख्या</code>, <code>दिनांक</code>, <code>समय</code>, <code>तिथिसमय</code>, <code>datetimezone</code>, <code>तार्किक</code>, <code>अवधि</code> या <code>बाइनरी</code> मान हो सकता है.    यदि दिया गया मान नल होता है, तो <code>Text.From</code> नल लौटाता है. एक वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").


## Examples

### Example #1 
संख्या 3 से एक पाठ मान बनाएँ.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
