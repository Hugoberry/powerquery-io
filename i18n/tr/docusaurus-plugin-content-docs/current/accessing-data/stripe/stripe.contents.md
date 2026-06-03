---
title: Stripe.Contents
---

# Stripe.Contents


Yapılan API çağrılarını sınırlama seçeneğiyle birlikte Stripe API'sine çağrıda bulunur.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Ek parametre olarak geçirilen isteğe bağlı `query` kaydı ve API istek sayısına ilişkin bir limit olarak belirlenen `pageLimit` ile birlikte https://api.stripe.com/v1/`method` üzerinde bulunan Stripe API'sine çağrıda bulunur. Önce en güncel veriler döndürülür. `pageLimit` belirtilmediyse tüm veriler döndürülür. 2015-10-16 Stripe Sürümü kullanılmaktadır.


## Examples

### Example #1
Ücretlere ilişkin tüm verileri döndürür
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Geçerli Stripe hesabına ilişkin tüm ücret verilerinin yer aldığı bir tablo
```


### Example #2
Ücret verilerine ilişkin bir sayfa döndürür
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Geçerli Stripe hesabına ilişkin en güncel ücret verilerinin yer aldığı bir tablo
```



