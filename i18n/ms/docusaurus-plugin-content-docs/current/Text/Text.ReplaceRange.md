---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Mengalih keluar julat aksara dan memasukkan nilai baru di kedudukan yang ditentukan.


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

Mengembalikan hasil daripada mengalih keluar bilangan aksara, <code>count</code>, daripada nilai teks <code>text</code> yang bermula di kedudukan <code>offset</code> dan kemudian memasukkan nilai teks <code>newText</code> di kedudukan yang sama dalam <code>text</code>.


## Examples

### Example #1 
Gantikan aksara tunggal di kedudukan 2 dalam nilai teks &#34;ABGF&#34; dengan nilai teks baru &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
