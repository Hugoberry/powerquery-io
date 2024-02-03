---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Mengonversi karakter ke nilai angkanya.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Menghasilkan angka yang setara dengan <code>character</code>.<br />    <br />    Hasilnya adalah poin kode Unicode 21-bit yang ditunjukkan oleh karakter atau pasangan pengganti yang diberikan.  


## Examples

### Example #1 
Mengonversi karakter ke nilai angka yang setara.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Mengonversi pasangan pengganti UTF-16 untuk emotikon &#34;wajah menyeringai&#34; ke poin kode heksadesimal yang setara.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
