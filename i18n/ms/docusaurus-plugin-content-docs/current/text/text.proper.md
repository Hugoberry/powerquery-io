---
title: Text.Proper
---

# Text.Proper


Menjadikan huruf pertama bagi setiap perkataan huruf besar.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Mengembalikan hasil penghurufbesaran hanya huruf pertama bagi setiap perkataan dalam nilai teks `text`. Semua huruf lain dikembalikan dalam huruf kecil. `culture` pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1
Gunakan `Text.Proper` pada ayat mudah.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
