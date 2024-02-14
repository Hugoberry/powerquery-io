---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Retorna uma tabela de métricas disponíveis da API do SparkPost v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

Essa função pode ser usada para recuperar dados de um determinado ponto de extremidade de "Métricas" da API do SparkPost v1. Ao atualizar essas tabelas ou fazer chamadas à API do SparkPost usando esse conector, lembre-se de que a API do SparkPost tem um limite de taxa de API estrito. Se o código de status 429 for retornado pelo servidor SparkPost, você terá atingido o limite de taxa e precisará esperar um pouco para fazer mais chamadas. Ao escolher um valor para o parâmetro de Número de dias, observe que a API armazena apenas 6 meses de dados válidos.


## Examples

### Example #1 
Recupera as métricas de capacidade de entrega count_sent e count_rejected de todas as campaign_ids agregadas nos últimos três dias. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
tabela
```



