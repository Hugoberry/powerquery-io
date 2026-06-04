---
title: Stripe.Contents
---

# Stripe.Contents


Buat panggilan kepada API Stripe, dengan opsyen ke had bilangan panggilan API yang dibuat.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Buat panggilan kepada API Stripe di https://api.stripe.com/v1/`method`, dengan rekod opsyenal `query` yang dihantar sebagai parameter tambahan dan opsyenal `pageLimit` sebagai had pada bilangan permintaan API. Kebanyakan data terkini telah dikembalikan terdahulu. Jika `pageLimit` tidak ditentukan, semua data akan dikembalikan. Versi Stripe 2015-10-16 digunakan.


## Examples

### Example #1
Mengembalikan semua perubahan data
```powerquery
Stripe.Contents("perubahan")
```

Result: 
```powerquery
Jadual dengan semua perubahan data bagi akaun Stripe semasa
```


### Example #2
Mengembalikan satu halaman perubahan data
```powerquery
Stripe.Contents("perubahan", [], 1)
```

Result: 
```powerquery
Jadual dengan paling banyak perubahan data terkini bagi akaun Stripe semasa
```



