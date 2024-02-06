---
title: Marketo.Leads
---

# Marketo.Leads


Devolve uma tabela com detalhes de oportunidades potenciais.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

Efetua uma chamada ao ponto final da API REST do Marketo em <code>URL</code>/rest/v1/leads.json. São devolvidas todas as oportunidades potenciais na lista <code>leadIds</code>.


## Examples

### Example #1 
Obtém os detalhes de três oportunidades potenciais
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Uma tabela com detalhes para as oportunidades potenciais fornecidas
```



