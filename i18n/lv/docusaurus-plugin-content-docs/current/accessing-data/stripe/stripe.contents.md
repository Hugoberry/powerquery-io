---
title: Stripe.Contents
---

# Stripe.Contents


Šī funkcija izsauc Stripe API; ir pieejama iespēja ierobežot API izsaukumu skaitu.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Šī funkcija izsauc pakalpojuma Stripe API adresē https://api.stripe.com/v1/`metode`, pieņemot neobligātu ierakstu `vaicājums` kā papildu parametrus un neobligātu vērtību `pageLimit` kā API pieprasījumu skaita ierobežojumu. Vispirms tiek atgriezti nesenākie dati. Ja netiek norādīta vērtība `pageLimit`, tiek atgriezti visi dati. Tiek izmantota pakalpojuma Stripe versija 2015-10-16.


## Examples

### Example #1
Šī funkcija atgriež visus datus par maksām
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Tabula, kurā norādīti visi pašreizējā Stripe konta dati par maksām
```


### Example #2
Šī funkcija atgriež datus par maksām vienas lappuses apjomā
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Tabula, kurā norādīti pašreizējā Stripe konta pēdējie dati par maksām
```



