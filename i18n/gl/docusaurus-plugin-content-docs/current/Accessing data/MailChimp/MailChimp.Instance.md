---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Devolve resultados de resposta sen formato dun extremo da API de MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Realiza unha chamada á API de MailChimp e devolve a resposta sen formato.


## Examples

### Example #1 
Devolve datos sen formato do extremo da API de MailChimp dos detalles de clic/informes dunha campaña.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Datos dos detalles de clic sen formato da campaña.
```



