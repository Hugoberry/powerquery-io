---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Hiermee wordt de Stripe API aangeroepen, met de mogelijkheid om het aantal uitgevoerde API-aanroepen te beperken.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Hiermee wordt de Stripe API op https://api.stripe.com/v1/<code>method</code> aangeroepen, waarbij de optionele record <code>query</code> wordt doorgegeven als aanvullende parameters en het optionele item <code>pageLimit</code> als beperking voor het aantal API-aanvragen. De meest recente gegevens worden als eerste geretourneerd. Als <code>pageLimit</code> niet is opgegeven, worden alle gegevens geretourneerd. Stripe-versie 2015-10-16 wordt gebruikt.


## Examples

### Example #1 
Hiermee worden alle gegevens over kosten geretourneerd
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Een tabel met alle gegevens over kosten voor het huidige Stripe-account
```


### Example #2 
Hiermee wordt één pagina met gegevens over kosten geretourneerd
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Een tabel met de meest recente gegevens over kosten voor het huidige Stripe-account
```



