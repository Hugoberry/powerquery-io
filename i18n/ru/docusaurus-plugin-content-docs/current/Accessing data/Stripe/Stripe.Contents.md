---
title: Stripe.Contents
---

# Stripe.Contents


Вызывает Stripe API с возможностью ограничить число выполняемых вызовов API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Вызывает Stripe API по адресу https://api.stripe.com/v1/<code>method</code> с необязательной записью <code>query</code>, передаваемой в качестве дополнительных параметров, и необязательной записью <code>pageLimit</code> в качестве ограничения на количество запросов API. Сначала возвращаются самые новые данные. Если значение <code>pageLimit</code> не указано, возвращаются все данные. Используется версия Stripe 2015-10-16.


## Examples

### Example #1 
Возвращает все данные о расходах.
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Таблица со всеми данными о расходах для текущей учетной записи Stripe
```


### Example #2 
Возвращает одну страницу данных о расходах.
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Таблица с последними данными о расходах для текущей учетной записи Stripe
```



