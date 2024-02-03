---
title: Stripe.Method
---

# Stripe.Method


## Description

Tekee kutsun Stripe-ohjelmointirajapinnalle.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Tekee kutsun Stripe-ohjelmointirajapinnalle osoitteessa https://api.stripe.com/v1/<code>method</code> niin, että välitetään tietue <code>additionalParameters</code> lisäparametreina ja luettelo <code>ColumnNames</code> odotetuista sarakkeiden nimistä. Stripe-versiota 2015-10-16 käytetään.


## Examples

### Example #1 
Palauttaa taulukon tapahtumista, jotka on luotu 1. marraskuuta 2015 jälkeen
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Taulukko, jossa on nykyisen Stripe-tilin määritetyt tapahtumat
```


### Example #2 
Palauttaa taulukon, jossa ovat kaikki varastointiyksiköt
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Taulukko, jossa on nykyisen Stripe-tilin kaikki varastointiyksiköt
```



