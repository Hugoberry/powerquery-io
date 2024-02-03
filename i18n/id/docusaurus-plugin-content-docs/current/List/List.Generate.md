---
title: List.Generate
---

# List.Generate


## Description

Buat daftar nilai.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Menghasilkan daftar nilai menggunakan fungsi yang disediakan. Fungsi <code>initial</code> menghasilkan nilai kandidat awal, yang kemudian diuji terhadap <code>condition</code>.    Jika nilai kandidat disetujui, maka akan dihasilkan sebagai bagian dari daftar yang dihasilkan, dan nilai kandidat berikutnya dihasilkan dengan meneruskan nilai yang baru disetujui ke <code>next</code>.    Setelah nilai kandidat gagal cocok dengan <code>condition</code>, proses pembuatan daftar akan berhenti.    Parameter opsional, <code>selector</code>, juga dapat diberikan untuk mengubah item dalam daftar hasil.


## Examples

### Example #1 
Buat daftar dengan mulai dari sepuluh, berulang kali dikurangi satu, dan memastikan setiap item lebih besar dari nol.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Menghasilkan daftar data berisi x dan y, dengan x adalah nilai dan y adalah daftar. x harus tetap kurang dari 10 dan menunjukkan jumlah item dalam daftar y. Setelah daftar dibuat, hanya menghasilkan nilai x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
