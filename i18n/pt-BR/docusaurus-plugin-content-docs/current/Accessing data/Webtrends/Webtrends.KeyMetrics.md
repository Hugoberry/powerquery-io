---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Retorna uma tabela com métricas-chave do Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Efetua uma chamada ao ponto de extremidade KeyMetrics do Webtrends e retorna todos os dados como uma tabela.


## Examples

### Example #1 
Efetua pull de uma tabela de métricas-chave do locatário 98765 nos últimos 30 dias
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Uma tabela de métricas-chave
```



