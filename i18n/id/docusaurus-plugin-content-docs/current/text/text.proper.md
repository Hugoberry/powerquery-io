---
title: Text.Proper
---

# Text.Proper


Mengkapitalisasi huruf pertama setiap kata.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Memberikan hasil kapitalisasi hanya huruf pertama setiap kata pada nilai teks `text`. Semua huruf lainnya dalam huruf kecil. `culture` opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1
Menggunakan `Text.Proper` pada kalimat sederhana.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
