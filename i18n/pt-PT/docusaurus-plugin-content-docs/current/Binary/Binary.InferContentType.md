---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Lê o fluxo binário e tenta determinar o tipo de conteúdo e as informações de formato do fluxo.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Devolve um registo com o campo Content.Type, que contém o tipo de MIME inferido.    Se o tipo de conteúdo inferido for texto/\* e for detetada uma página de código de codificação, é devolvido, adicionalmente, o campo Content.Encoding, que contém a codificação do fluxo.    Se o tipo de conteúdo inferido for texto/csv e o formato for delimitado, é devolvido, adicionalmente, o campo Csv.PotentialDelimiter, que contém uma tabela para a análise dos potenciais delimitadores.    Se o tipo de conteúdo inferido for texto/csv e o formato for de largura fixa, é devolvido, adicionalmente, o campo Csv.PotentialPositions, que contém uma lista para a análise de potenciais posições de coluna de largura fixa.



## Category
Binary
