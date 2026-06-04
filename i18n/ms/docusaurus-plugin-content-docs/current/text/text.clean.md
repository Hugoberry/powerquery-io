---
title: Text.Clean
---

# Text.Clean


Mengembalikan nilai teks dengan semua aksara kawalan dialih keluar.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Mengembalikan nilai teks dengan semua aksara kawalan `text` dialih keluar.


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
