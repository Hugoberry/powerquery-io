---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Devolve uma tabela com conteúdo de relatório do Webtrends.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Efetua uma chamada ao ponto final do relatório do Webtrends indicado e devolve todos os dados em tabela.


## Examples

### Example #1 
Efetua uma chamada ao ponto final do relatório dos visitantes do Webtrends para os dados dos últimos 30 dias
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Uma tabela de dados do visitante
```



