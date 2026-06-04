---
title: Stripe.Contents
---

# Stripe.Contents


Melakukan panggilan ke Stripe API, dengan opsi untuk membatasi jumlah panggilan API yang dilakukan.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Melakukan panggilan ke Stripe API di https://api.stripe.com/v1/`method`, dengan rekaman tambahan `query` yang diberikan sebagai parameter tambahan dan `pageLimit` opsional sebagai batas jumlah permintaan API. Data terbaru dikembalikan terlebih dahulu. Jika `pageLimit` tidak disebutkan, semua data akan dikembalikan. Stripe Versi 2015-10-16 sedang digunakan.


## Examples

### Example #1
Mengembalikan semua data biaya
```powerquery
Stripe.Contents("biaya")
```

Result: 
```powerquery
Tabel dengan semua data biaya dari akun Stripe saat ini
```


### Example #2
Mengembalikan satu halaman data biaya
```powerquery
Stripe.Contents("biaya", [], 1)
```

Result: 
```powerquery
Tabel dengan data biaya terbaru untuk akun Stripe saat ini
```



