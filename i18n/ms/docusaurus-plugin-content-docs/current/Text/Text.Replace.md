---
title: Text.Replace
---

# Text.Replace


## Description

Menggantikan semua kejadian subrentetan yang ditentukan dalam teks.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Mengembalikan hasil daripada menggantikan semua kejadian nilai teks <code>old</code> dalam nilai teks <code>text</code> dengan nilai teks <code>new</code>. Fungsi ini adalah sensitif huruf besar atau kecil.


## Examples

### Example #1 
Gantikan setiap kejadian &#34;the&#34; dalam ayat dengan &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
