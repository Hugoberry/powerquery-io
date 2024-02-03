---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Melakukan panggilan ke Stripe API, dengan opsi untuk membatasi jumlah panggilan API yang dilakukan.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Melakukan panggilan ke Stripe API di https://api.stripe.com/v1/<code>method</code>, dengan rekaman tambahan <code>query</code> yang diberikan sebagai parameter tambahan dan <code>pageLimit</code> opsional sebagai batas jumlah permintaan API. Data terbaru dikembalikan terlebih dahulu. Jika <code>pageLimit</code> tidak disebutkan, semua data akan dikembalikan. Stripe Versi 2015-10-16 sedang digunakan.


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



