---
title: Character.FromNumber
---

# Character.FromNumber


Mengonversi angka menjadi karakter teks.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Menghasilkan karakter yang setara dengan angka.  
  
`number` yang diberikan harus berupa poin kode Unicode 21-bit.


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
Mengonversi poin kode heksadesimal untuk emotikon "wajah menyeringai" ke pasangan pengganti UTF-16 yang setara.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
