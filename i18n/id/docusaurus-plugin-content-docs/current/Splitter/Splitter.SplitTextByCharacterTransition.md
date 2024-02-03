---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Menghasilkan fungsi yang membagi teks menjadi daftar teks menurut transisi dari satu jenis karakter ke karakter lainnya. Parameter \{0} dan \{1} dapat berupa daftar karakter, atau fungsi yang mengambil karakter dan menghasilkan true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Menghasilkan fungsi yang membagi teks menjadi daftar teks menurut transisi dari satu jenis karakter ke karakter lainnya. Parameter <code>before</code> dan <code>after</code> dapat berupa daftar karakter, atau fungsi yang mengambil karakter dan menghasilkan true/false.


## Examples

### Example #1 
Memisahkan input setiap kali huruf besar atau kecil diikuti dengan angka.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
