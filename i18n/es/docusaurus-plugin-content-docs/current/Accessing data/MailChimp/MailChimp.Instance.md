---
title: MailChimp.Instance
---

# MailChimp.Instance


Devuelve resultados de respuesta sin formato desde un punto de conexión de la API de MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Realiza una llamada a la API de MailChimp y devuelve la respuesta sin formato.


## Examples

### Example #1 
Devuelve datos sin procesar desde el punto de conexión de informes o detalles de clic de la API de MailChimp para una campaña determinada.
```powerquery
MailChimp.Instance("informes/{campaign_id}/detalles de clic")
```

Result: 
```powerquery
Datos sin procesar de los detalles de clic de la campaña determinada.
```



