---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Menghasilkan daftar identitas yang akan diterima kondisinya.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Menggunakan `identityProvider` yang ditentukan, mengonversi `condition` ke dalam daftar identitas yang akan dikembalikan sebagai `true` oleh `condition` dalam semua konteks otorisasi dengan `identityProvider` sebagai penyedia identitas. Kesalahan muncul jika tidak dimungkinkan untuk mengonversi `condition` menjadi daftar identitas, misalnya jika `condition` memanggil atribut selain identitas pengguna atau grup untuk membuat keputusan.

Perlu diketahui bahwa daftar identitas menunjukkan identitas saat muncul dalam `condition` dan tidak ada normalisasi (misalnya perluasan grup) yang dilakukan pada identitas tersebut.



## Category
Accessing data
