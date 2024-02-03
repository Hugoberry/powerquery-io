---
title: Text.Clean
---

# Text.Clean


## Description

Mengembalikan nilai teks dengan semua aksara kawalan dialih keluar.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Mengembalikan nilai teks dengan semua aksara kawalan <code>text</code> dialih keluar.


## Examples

### Example #1 
Alih keluar suapan baris dan aksara kawalan lain daripada nilai teks.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
