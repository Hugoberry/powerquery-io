---
title: Text.Insert
---

# Text.Insert


## Description

Memasukkan satu nilai teks ke dalam yang lain di kedudukan yang ditentukan.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Mengembalikan hasil daripada memasukkan nilai teks <code>newText</code> ke dalam nilai teks <code>text</code> di kedudukan <code>offset</code>. Kedudukan bermula di nombor 0.


## Examples

### Example #1 
Masukkan &#34;C&#34; antara &#34;B&#34; dan &#34;D&#34; dalam &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
