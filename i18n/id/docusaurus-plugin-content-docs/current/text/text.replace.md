---
title: Text.Replace
---

# Text.Replace


Mengganti semua kemunculan substring tertentu pada teks.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Memberikan hasil penggantian semua kemunculan nilai teks `old` pada nilai teks `text` dengan nilai teks `new`. Fungsi ini peka huruf besar-kecil.


## Examples

### Example #1
Mengganti setiap kemunculan "the" pada kalimat dengan "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
