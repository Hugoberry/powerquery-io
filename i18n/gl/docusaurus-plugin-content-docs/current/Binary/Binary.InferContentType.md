---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Le a secuencia binaria e tenta determinar o tipo de contido e a información de formato da secuencia.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Devolve un rexistro co campo Content.Type, que contén o tipo MIME inferido.    Se o tipo de contido inferido é text/\* e se detecta unha páxina de códigos de codificación, ademais, devolve o campo Content.Encoding, que contén a codificación da secuencia.    Se o tipo de contido inferido é text/csv e o formato é delimitado, ademais, devolve o campo Csv.PotentialDelimiter, que contén unha táboa para a análise de delimitadores potenciais.    Se o tipo de contido inferido é text/csv e o formato é de largura fixa, ademais, devolve o campo Csv.PotentialPositions, que contén unha lista para a análise de posicións de columna de largura fixa potenciais.



## Category
Binary
