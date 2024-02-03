---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Devuelve una tabla con los detalles del cliente potencial.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Hace una llamada al punto de conexión de la API de REST de Marketo en <code>url</code>/rest/v1/leads.json. Se devolverán todos los clientes potenciales de la lista <code>leadIds</code>.


## Examples

### Example #1 
Extrae los detalles de tres clientes potenciales
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Una tabla con los detalles de los clientes potenciales suministrados
```



