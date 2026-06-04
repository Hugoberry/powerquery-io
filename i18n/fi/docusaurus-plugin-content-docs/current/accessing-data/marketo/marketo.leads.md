---
title: Marketo.Leads
---

# Marketo.Leads


Palauttaa liiditietojen taulukon.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Tekee kutsun Marketo REST -ohjelmointirajapintapäätepisteelle osoitteessa `url`/rest/v1/leads.json. Kaikki liidit luettelossa `leadIds` palautetaan.


## Examples

### Example #1
Noutaa kolmen liidin tiedot
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Taulukko annettujen liidien tiedoista
```



