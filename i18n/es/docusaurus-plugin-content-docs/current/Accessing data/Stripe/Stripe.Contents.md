---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Hace una llamada a la API de Stripe, con la opción de limitar el número de llamadas a la API que se hacen.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Hace una llamada a la API de Stripe en https://api.stripe.com/v1/<code>method</code>, con el registro <code>query</code> opcional que se pasa como parámetros adicionales y <code>pageLimit</code> opcional como límite del número de solicitudes de API. En primer lugar se devuelven los datos más recientes. Si no se especifica <code>pageLimit</code>, se devuelven todos los datos. Se usa Stripe versión 2015-10-16.


## Examples

### Example #1 
Devuelve todos los datos sobre los cargos
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Una tabla con todos los datos sobre los cargos de la cuenta de Stripe actual
```


### Example #2 
Devuelve una página de los datos sobre los cargos
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Una tabla con los datos sobre los cargos más recientes de la cuenta de Stripe actual
```



