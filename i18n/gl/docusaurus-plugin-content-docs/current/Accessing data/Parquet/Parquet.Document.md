---
title: Parquet.Document
---

# Parquet.Document


## Description

Devolve o contido do documento de Parquet como unha táboa.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Devolve o contido do documento de Parquet en forma de táboa. Nas opcións inclúese:
    <ul>
    <li> <code>TypeMapping</code> : Valor de texto que controla a asignación do tipo predefinido ao ler e escribir ficheiros. O valor predefinido é nulo e tenta manter a máxima fidelidade posible co tipo orixinal. O valor "Sql" xerará os resultados máis compatibles con SQL Server.</li>
    </ul>



## Category
Accedendo ao datos
