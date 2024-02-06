---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


Retorna uma tabela com o conteúdo do relatório do Webtrends.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Efetua uma chamada ao ponto de extremidade de relatório especificado do Webtrends e retorna todos os dados como uma tabela.


## Examples

### Example #1 
Efetua uma chamada ao ponto de extremidade do relatório de visitantes do Webtrends para dados nos últimos 30 dias
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Uma tabela de dados de visitantes
```



