---
title: Character.FromNumber
---

# Character.FromNumber


## Description

Mengonversi angka menjadi karakter teks.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Details

Menghasilkan karakter yang setara dengan angka.<br />    <br />    <code>number</code> yang diberikan harus berupa poin kode Unicode 21-bit.


## Examples

### Example #1 
Mengonversi angka ke nilai karakter yang setara.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2 
Mengonversi karakter ke angka dan kembali lagi.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3 
Mengonversi poin kode heksadesimal untuk emotikon &#34;wajah menyeringai&#34; ke pasangan pengganti UTF-16 yang setara.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
