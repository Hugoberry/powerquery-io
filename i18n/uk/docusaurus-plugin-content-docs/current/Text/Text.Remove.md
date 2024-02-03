---
title: Text.Remove
---

# Text.Remove


## Description

Видаляє всі входження заданого символу або списку символів із вхідного текстового значення.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Повертає копію текстового значення <code>text</code> із видаленими всіма символами, починаючи з <code>removeChars</code>.  


## Examples

### Example #1 
Видалити символи &#34;,&#34; та &#34;;&#34; з текстового значення.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
