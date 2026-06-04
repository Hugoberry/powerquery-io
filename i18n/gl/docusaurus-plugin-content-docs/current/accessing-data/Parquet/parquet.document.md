---
title: Parquet.Document
---

# Parquet.Document


Devolve o contido do documento de Parquet como unha táboa.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Remarks

Devolve o contido do documento de Parquet en forma de táboa. Nas opcións inclúese:

-   `TypeMapping` : Valor de texto que controla a asignación do tipo predefinido ao ler e escribir ficheiros. O valor predefinido é nulo e tenta manter a máxima fidelidade posible co tipo orixinal. O valor "Sql" xerará os resultados máis compatibles con SQL Server.



## Category
Accedendo ao datos
