---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Menghapus kisaran karakter dan menyisipkan nilai baru pada posisi tertentu.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Memberikan hasil sejumlah karakter terhapus, <code>count</code>, dari nilai teks <code>text</code> dimulai pada posisi <code>offset</code>, lalu menyisipkan nilai teks <code>newText</code> di posisi yang sama pada <code>text</code>.


## Examples

### Example #1 
Mengganti satu karakter di posisi 2 pada nilai teks &#34;ABGF&#34; dengan nilai teks baru &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
