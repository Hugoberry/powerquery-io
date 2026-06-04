---
title: Marketo.Leads
---

# Marketo.Leads


Devolve unha táboa cos detalles dos clientes potenciais.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Realiza unha chamada ao extremo da API de REST de Marketo en `url`/rest/v1/leads.json. Devólvense todos os clientes potenciais da lista `leadIds`.


## Examples

### Example #1
Extrae os detalles de tres clientes potenciais.
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Unha táboa con detalles dos clientes potenciais fornecidos.
```



