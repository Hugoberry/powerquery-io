---
title: Marketo.Activities
---

# Marketo.Activities


Retorna uma tabela de atividades de lead.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Realiza uma chamada ao ponto de extremidade da API REST de Marketo em <code>url</code>/rest/v1/activities.json. Todas as atividades na lista <code>activityIds</code> ocorridas desde <code>startTime</code> são retornadas.


## Examples

### Example #1 
Acessa uma tabela das atividades de &#34;Visitas à pagina da Web&#34; desde 1º de novembro de 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Uma tabela com detalhes de todas as atividades de "Visitas à pagina da Web" desde 1º de novembro
```



