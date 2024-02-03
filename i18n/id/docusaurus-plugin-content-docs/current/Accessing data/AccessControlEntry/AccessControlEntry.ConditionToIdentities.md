---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Menghasilkan daftar identitas yang akan diterima kondisinya.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Menggunakan <code>identityProvider</code> yang ditentukan, mengonversi <code>condition</code> ke dalam daftar identitas yang akan dikembalikan sebagai <code>true</code> oleh <code>condition</code> dalam semua konteks otorisasi dengan <code>identityProvider</code> sebagai penyedia identitas. Kesalahan muncul jika tidak dimungkinkan untuk mengonversi <code>condition</code> menjadi daftar identitas, misalnya jika <code>condition</code> memanggil atribut selain identitas pengguna atau grup untuk membuat keputusan.<br />    Perlu diketahui bahwa daftar identitas menunjukkan identitas saat muncul dalam <code>condition</code> dan tidak ada normalisasi (misalnya perluasan grup) yang dilakukan pada identitas tersebut.<br />



## Category
Accessing data
