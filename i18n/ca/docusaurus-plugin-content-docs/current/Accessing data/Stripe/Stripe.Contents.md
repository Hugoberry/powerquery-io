---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Fa una trucada a l&#39;API de l&#39;Stripe, amb l&#39;opció de limitar el número de trucades de l&#39;API que es fan.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Fa una trucada a l'API de l'Stripe API al https://api.stripe.com/v1/<code>method</code>, amb el registre <code>query</code> opcional que es passa com a paràmetres opcionals i <code>pageLimit</code> opcional com a límit del número de sol·licituds de l'API. Primer es retornen les dades més recents. Si no s'especifica cap <code>pageLimit</code>, es retornen totes les dades. S'utilitza la versió 2015-10-16 de l'Stripe.


## Examples

### Example #1 
Retorna totes les dades de les taxes
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Una taula amb totes les dades de les taxes del compte de l'Stripe actual
```


### Example #2 
Retorna una pàgina de dades de les taxes
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Una taula amb les dades de les taxes més recents del compte de l'Stripe actual
```



