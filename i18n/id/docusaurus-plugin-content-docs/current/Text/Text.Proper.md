---
title: Text.Proper
---

# Text.Proper


## Description

Mengkapitalisasi huruf pertama setiap kata.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Memberikan hasil kapitalisasi hanya huruf pertama setiap kata pada nilai teks <code>text</code>. Semua huruf lainnya dalam huruf kecil. <code>culture</code> opsional juga dapat disediakan (misalnya, "en-US").


## Examples

### Example #1 
Menggunakan &lt;code&gt;Text.Proper&lt;/code&gt; pada kalimat sederhana.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
