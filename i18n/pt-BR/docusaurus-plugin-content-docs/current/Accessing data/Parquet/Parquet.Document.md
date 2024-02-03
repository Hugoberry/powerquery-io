---
title: Parquet.Document
---

# Parquet.Document


## Description

Retorna o conteúdo do documento Parquet como uma tabela.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Retorna o conteúdo do documento Parquet como uma tabela. Opções incluem:
    <ul>
    <li> <code>TypeMapping</code>: um valor de texto que controla o mapeamento de tipo padrão ao ler e gravar arquivos. O valor padrão é nulo e tenta preservar o máximo de fidelidade possível ao tipo original. Um valor de "Sql" produzirá resultados mais compatíveis com o Sql Server.</li>
    </ul>



## Category
Acessando dados
