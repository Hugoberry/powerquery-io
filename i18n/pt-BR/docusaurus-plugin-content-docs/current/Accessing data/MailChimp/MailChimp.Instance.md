---
title: MailChimp.Instance
---

# MailChimp.Instance


Retorna resultados brutos de resposta de um ponto de extremidade de API do MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Faz uma chamada para a API do MailChimp e retorna a resposta bruta.


## Examples

### Example #1 
Retorna dados brutos do ponto de extremidade de API do MailChimp de relatórios/detalhes do clique para uma determinada campanha.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Dados brutos de detalhes de clique da campanha determinada.
```



