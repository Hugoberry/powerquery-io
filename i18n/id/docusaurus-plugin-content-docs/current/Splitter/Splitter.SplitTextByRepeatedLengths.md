---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Menghasilkan fungsi yang membagi teks menjadi daftar teks dengan panjang yang ditetapkan berulang kali.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Menghasilkan fungsi yang membagi teks menjadi daftar teks dengan panjang yang ditetapkan berulang kali.


## Examples

### Example #1 
Memisahkan input secara berulang menjadi beberapa potongan tiga karakter, mulai dari awal input.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Memisahkan input secara berulang menjadi beberapa potongan tiga karakter, mulai dari akhir input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
