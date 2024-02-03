---
title: Stripe.Method
---

# Stripe.Method


## Description

Makes a call to the Stripe API.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Makes a call to the Stripe API at https://api.stripe.com/v1/<code>method</code>, with record <code>additionalParameters</code> passed as additional parameters and list <code>ColumnNames</code> of expected column names. Stripe Version 2015-10-16 is used.


## Examples

### Example #1 
Returns a table with events created after November 1, 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
A table with the specified events for the current Stripe account
```


### Example #2 
Returns a table with all SKUs
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
A table with all SKUs for the current Stripe account
```



