---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Devolve uma tabela com métricas-chave do Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Efetua uma chamada ao ponto final do Webtrends KeyMetrics e devolve todos os dados em tabela.


## Examples

### Example #1 
Solicita uma tabela de métricas-chave para o inquilino 98765 nos últimos 30 dias
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Uma tabela de métricas-chave
```



