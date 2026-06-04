---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Mengembalikan senarai identiti yang keadaannya akan menerima.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Menggunakan `identityProvider` yang ditentukan, tukar `condition` kepada senarai identiti yang mana `condition` akan mengembalikan `true` dalam semua konteks kebenaran dengan `identityProvider` sebagai pembekal identiti. Ralat dikemukakan jika tidak dapat menukar `condition` kepada senarai identiti, contohnya, jika `condition` merujuk atribut selain identiti pengguna atau kumpulan untuk membuat keputusan.

Ambil perhatian bahawa senarai identiti mewakili identiti seperti yang dipaparkan dalam `condition` dan tiada penormalan (seperti pengembangan kumpulan) dilaksanakan pada senarai tersebut.



## Category
Accessing data
