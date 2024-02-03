---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Creează un apel către API-ul Stripe, cu opțiunea de a limita numărul de apeluri API realizate.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Creează un apel către API-ul Stripe de la https://api.stripe.com/v1/<code>metodă</code>, cu înregistrarea opțională <code>interogare</code> transmisă ca parametri suplimentari și <code>limităPagini</code>, opțional, ca limită a numărului de solicitări API. Sunt returnate întâi cele mai recente date. Dacă nu este specificată valoarea <code>limităPagini</code>, sunt returnate toate datele. Se utilizează versiunea Stripe 2015-10-16.


## Examples

### Example #1 
Returnează datele tuturor plăților
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Un tabel cu toate datele de plăți pentru contul Stripe curent
```


### Example #2 
Returnează o pagină cu date despre plăți
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Un tabel cu cele mai recente date de plăți pentru contul Stripe curent
```



