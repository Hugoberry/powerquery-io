---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Restituisce i risultati della risposta non elaborata da un endpoint API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Effettua una chiamata all'API MailChimp e restituisce la risposta non elaborata.


## Examples

### Example #1 
Restituisce dati non elaborati dall&#39;endpoint API MailChimp dei report/dettagli dei clic per una campagna specificata.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Dati dei dettagli dei clic non elaborati per la campagna specificata.
```



