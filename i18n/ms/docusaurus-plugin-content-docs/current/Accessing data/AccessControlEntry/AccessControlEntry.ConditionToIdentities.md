---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Mengembalikan senarai identiti yang keadaannya akan menerima.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Menggunakan <code>identityProvider</code> yang ditentukan, tukar <code>condition</code> kepada senarai identiti yang mana <code>condition</code> akan mengembalikan <code>true</code> dalam semua konteks kebenaran dengan <code>identityProvider</code> sebagai pembekal identiti. Ralat dikemukakan jika tidak dapat menukar <code>condition</code> kepada senarai identiti, contohnya, jika <code>condition</code> merujuk atribut selain identiti pengguna atau kumpulan untuk membuat keputusan.<br />    Ambil perhatian bahawa senarai identiti mewakili identiti seperti yang dipaparkan dalam <code>condition</code> dan tiada penormalan (seperti pengembangan kumpulan) dilaksanakan pada senarai tersebut. <br />



## Category
Accessing data
