---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Makes a call to the Stripe API, with the option to limit number of API calls made.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Makes a call to the Stripe API at https://api.stripe.com/v1/<code>method</code>, with optional record <code>query</code> passed as additional parameters and optional <code>pageLimit</code> as a limit on the number of API requests. Most recent data is returned first. If <code>pageLimit</code> is not specified, all data is returned. Stripe Version 2015-10-16 is used.


## Examples

### Example #1 
Returns all charges data
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
A table with all charges data for the current Stripe account
```


### Example #2 
Returns one page of charges data
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
A table with the most recent charges data for the current Stripe account
```



