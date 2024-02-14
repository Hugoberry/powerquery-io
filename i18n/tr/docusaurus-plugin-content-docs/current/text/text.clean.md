---
title: Text.Clean
---

# Text.Clean


Metin değerini tüm denetim karakterleri kaldırılmış şekilde döndürür.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Metin değerini tüm <code>text</code> denetim karakterleri kaldırılmış şekilde döndürür.


## Examples

### Example #1 
Bir metin değerinden satır besleme ve diğer denetim karakterlerini kaldırın.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
