---
title: List.Random
---

# List.Random


## Description

Menghasilkan daftar bilangan acak.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Mengembalikan daftar bilangan acak antara 0 dan 1, memberikan jumlah nilai untuk dihasilkan dan nilai awal opsional.<ul>   <li><code>count</code>: Jumlah nilai acak untuk dihasilkan.</li>   <li><code>seed</code>:  <i>[Opsional]</i> Nilai numerik digunakan untuk memberikan nilai awal pada pembuat bilangan acak.  Jika dihilangkan, daftar unik bilangan acak akan dihasilkan setiap kali Anda memanggil fungsi.  Jika Anda menentukan nilai awal dengan angka, setiap panggilan fungsi akan menghasilkan daftar bilangan acak yang sama.</li></ul>


## Examples

### Example #1 
Membuat daftar 3 bilangan acak.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Membuat daftar 3 bilangan acak dengan menetapkan nilai turunan.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
