---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Викликає Stripe API із можливістю обмежити кількість викликів API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Викликає Stripe API за адресою https://api.stripe.com/v1/<code>method</code>. При цьому передаються необов’язковий запис <code>query</code> для додаткових параметрів і необов’язковий параметр <code>pageLimit</code> для обмеження кількості запитів API. Спершу повертаються останні дані. Якщо параметр <code>pageLimit</code> не вказано, повертаються всі дані. Використовується ресурс Stripe версії 2015-10-16.


## Examples

### Example #1 
Повертає всі дані про розрахунки.
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Таблиця з усіма даними про розрахунки для поточного облікового запису Stripe
```


### Example #2 
Повертає одну сторінку даних про розрахунки.
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Таблиця з останніми даними про розрахунки для поточного облікового запису Stripe
```



