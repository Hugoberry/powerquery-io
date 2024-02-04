---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Devolve uma tabela com atividades de oportunidades potenciais.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Efetua uma chamada ao ponto final da API REST do Marketo em <code>URL</code>/rest/v1/activities.json. Todas as atividades na lista <code>activityIds</code> que ocorreram desde <code>startTime</code> foram devolvidas.


## Examples

### Example #1 
Solicita uma tabela das atividades &#34;Visitar Página Web&#34; desde 1 de novembro de 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Uma tabela com detalhes de todas as atividades "Visitar Página Web" desde 1 de novembro
```



