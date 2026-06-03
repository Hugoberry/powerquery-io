---
title: Marketo.Activities
---

# Marketo.Activities


Devolve uma tabela com atividades de oportunidades potenciais.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Efetua uma chamada ao ponto final da API REST do Marketo em `URL`/rest/v1/activities.json. Todas as atividades na lista `activityIds` que ocorreram desde `startTime` foram devolvidas.


## Examples

### Example #1
Solicita uma tabela das atividades "Visitar Página Web" desde 1 de novembro de 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Uma tabela com detalhes de todas as atividades "Visitar Página Web" desde 1 de novembro
```



