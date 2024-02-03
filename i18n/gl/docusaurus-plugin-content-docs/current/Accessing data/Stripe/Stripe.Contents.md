---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Realiza unha chamada á API de Stripe, coa opción de limitar o número de chamadas que se realizan á API.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Realiza unha chamada á API de Stripe en https://api.stripe.com/v1/<code>method</code>, co rexistro opcional <code>query</code> aprobado como parámetros adicionais e <code>pageLimit</code> opcional como límite no número de solicitudes de API. Devólvense os datos máis recentes primeiro. Se non se especifica <code>pageLimit</code>, devólvense todos os datos. Está a usarse a versión 2015-10-16 de Stripe.


## Examples

### Example #1 
Devolve todos os datos dos custos.
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Unha táboa con todos os datos dos custos da conta de Stripe actual
```


### Example #2 
Devolve unha páxina de datos dos custos
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Unha táboa cos datos dos custos máis recentes da conta de Stripe actual
```



