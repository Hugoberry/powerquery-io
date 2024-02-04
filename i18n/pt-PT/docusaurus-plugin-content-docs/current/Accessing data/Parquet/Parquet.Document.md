---
title: Parquet.Document
---

# Parquet.Document


## Description

Devolve o conteúdo do documento Parquet como uma tabela.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Devolve os conteúdos do documento Parquet como uma tabela. As opções incluem:    <ul>    <li> <code>TypeMapping</code>: um valor de texto que controla o mapeamento de tipo predefinido ao ler e escrever ficheiros. O valor predefinido é nulo e tenta preservar o máximo de fidelidade possível para o tipo original. Um valor de "Sql" produz resultados mais compatíveis com o Sql Server.</li>    </ul>



## Category
A aceder aos dados
