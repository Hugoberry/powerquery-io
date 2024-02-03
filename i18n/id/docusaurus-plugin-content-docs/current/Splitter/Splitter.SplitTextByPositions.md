---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Menghasilkan fungsi yang membagi teks menjadi daftar teks pada setiap posisi yang ditetapkan.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Menghasilkan fungsi yang membagi teks menjadi daftar teks pada setiap posisi yang ditetapkan.


## Examples

### Example #1 
Memisahkan input pada posisi yang ditentukan, mulai dari awal input.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Memisahkan input pada posisi yang ditentukan, mulai dari akhir input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
