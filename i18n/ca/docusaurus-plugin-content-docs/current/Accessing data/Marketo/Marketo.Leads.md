---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Retorna una taula amb detalls dels clients potencials.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Fa a una trucada a l'extrem de l'API de REST a l'<code>url</code>/rest/v1/leads.json. Es retornen tots els clients potencials de la llista <code>leadIds</code>.


## Examples

### Example #1 
Extreu els detalls de tres clients potencials
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Una taula amb detalls dels clients potencials subministrats
```



