---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

Recupere as tabelas internas expostas pelo conector SparkPost com os dados agregados em um número de dias especificado pelo usuário. Ao atualizar essas tabelas ou fazer chamadas à API do SparkPost usando esse conector, lembre-se de que a API do SparkPost tem um limite de taxa de API estrito. Se um código de status 429 for retornado do servidor SparkPost, você terá atingido o limite de taxa e precisará aguardar alguns minutos para fazer mais chamadas. Ao escolher um valor para o parâmetro de Número de dias, observe que a API armazena apenas 6 meses de dados válidos.


