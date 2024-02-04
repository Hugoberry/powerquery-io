---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

Devolve uma tabela de métricas disponíveis da API do SparkPost v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

Esta função pode ser utilizada para obter dados de um determinado ponto final "Métricas" da API do SparkPost v1. Ao atualizar estas tabelas ou ao fazer chamadas à API do SparkPost com este conector, tenha em atenção que a API do SparkPost tem um limite de velocidade de API restrito. Se vir um código de estado 429 devolvido pelo servidor do SparkPost, isso significa que atingiu o limite de velocidade e que terá de aguardar até poder fazer mais chamadas. Ao escolher um valor para o parâmetro "Número de dias", não se esqueça de que a API apenas armazena 6 meses de dados.


## Examples

### Example #1 
Obtém as métricas de capacidade de entrega de count_sent e count_rejected relativamente a todos os campaign_ids agregados durante os últimos três dias. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabela
```



