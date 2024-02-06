---
title: Binary.InferContentType
---

# Binary.InferContentType


Lê o fluxo binário e tenta determinar as informações de formato e tipo de conteúdo do fluxo.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

Retorna um registro com o campo Content.Type que contém o tipo de MIME inferido.    Se o tipo de conteúdo inferido for texto/\* e uma página de código de codificação for detectada, retornará também o campo Content.Encoding que contém a codificação do fluxo.    Se o tipo de conteúdo deduzido for texto/csv, e o formato for delimitado, retornará também o campo Csv.PotentialDelimiter que contém uma tabela para análise de delimitadores em potencial.    Se o tipo de conteúdo inferido for texto/csv e o formato for largura fixa, retornará também campo Csv.PotentialPositions contendo uma lista para análise de possíveis posições de coluna de largura fixa.



## Category
Binary
