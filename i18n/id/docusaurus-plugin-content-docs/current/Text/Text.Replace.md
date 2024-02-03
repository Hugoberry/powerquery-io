---
title: Text.Replace
---

# Text.Replace


## Description

Mengganti semua kemunculan substring tertentu pada teks.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Memberikan hasil penggantian semua kemunculan nilai teks <code>old</code> pada nilai teks <code>text</code> dengan nilai teks <code>new</code>. Fungsi ini peka huruf besar-kecil.


## Examples

### Example #1 
Mengganti setiap kemunculan &#34;the&#34; pada kalimat dengan &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
