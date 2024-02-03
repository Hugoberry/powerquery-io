---
title: Text.Proper
---

# Text.Proper


## Description

Menjadikan huruf pertama bagi setiap perkataan huruf besar.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Mengembalikan hasil penghurufbesaran hanya huruf pertama bagi setiap perkataan dalam nilai teks <code>text</code>. Semua huruf lain dikembalikan dalam huruf kecil. <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1 
Gunakan &lt;code&gt;Text.Proper&lt;/code&gt; pada ayat mudah.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
