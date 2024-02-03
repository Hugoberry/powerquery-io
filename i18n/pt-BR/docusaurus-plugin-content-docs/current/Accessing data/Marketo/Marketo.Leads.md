---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Retorna uma tabela de detalhes de lead.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Realiza uma chamada para o ponto de extremidade da API REST Marketo em <code>url</code>/rest/v1/leads.json. Todos os leads na lista <code>leadIds</code> são retornados.


## Examples

### Example #1 
Acessa os detalhes de três leads
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Uma tabela com detalhes dos leads fornecidos
```



