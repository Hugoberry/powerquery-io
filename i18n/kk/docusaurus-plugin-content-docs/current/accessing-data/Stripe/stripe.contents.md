---
title: Stripe.Contents
---

# Stripe.Contents


Соғылған API қоңырауларының санын шектейтін параметрі бар Stripe API интерфейсіне қоңырау соғады.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

https://api.stripe.com/v1/`әдіс` мекенжайында қосымша параметр ретінде `сұрау` қосымша жазбасы бар және API сұрауларының санына шектеу ретінде қосымша `Бет шектеуі` бар Stripe API интерфейсіне қоңырау соғады. Ең соңғы деректер алдымен қайтарылады. Егер `бет шектеуі` көрсетілмесе, барлық деректер қайтарылады. Stripe 2015-10-16 нұсқасы пайдаланылады.


## Examples

### Example #1
Барлық шығындардың деректерін қайтарады
```powerquery
Stripe.Контенттер("шығындар")
```

Result: 
```powerquery
Ағымдағы Stripe тіркелгісінің барлық шығындарының деректері бар кесте
```


### Example #2
Шығындар деректерінің бір бетін қайтарады
```powerquery
Stripe.Контенттер("шығындар", [], 1)
```

Result: 
```powerquery
Ағымдағы Stripe тіркелгісінің ең соңғы шығындар деректері бар кесте
```



