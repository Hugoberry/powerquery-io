---
title: MailChimp.Instance
---

# MailChimp.Instance


Devolve resultados de resposta não processados de um ponto final de API do MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Efetua uma camada à API do MailChimp e devolve a resposta não processada.


## Examples

### Example #1 
Devolve dados não processados do ponto final reports/click-details de API do MailChimp de uma campanha especificada.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Dados não processados de detalhes de cliques da campanha especificada.
```



