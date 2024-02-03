---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

Belirtilen değer için bir liste arar ve değiştirir.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Details

<code>oldValue</code> değeri için bir <code>list</code> değer listesi arar ve her oluşumu <code>newValue</code> değiştirme değeri ile değiştirir.


## Examples

### Example #1 
\{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} listesindeki tüm &#34;a&#34; değerlerini &#34;A&#34; ile değiştirir.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
