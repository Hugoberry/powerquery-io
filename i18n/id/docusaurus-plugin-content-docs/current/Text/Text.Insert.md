---
title: Text.Insert
---

# Text.Insert


## Description

Menyisipkan satu nilai teks ke nilai teks lain pada posisi tertentu.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Memberikan hasil penyisipan nilai teks <code>newText</code> ke nilai teks <code>text</code> pada posisi <code>offset</code>. Posisi dimulai pada angka 0.


## Examples

### Example #1 
Menyisipkan &#34;C&#34; antara &#34;B&#34; dan &#34;D&#34; pada &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
