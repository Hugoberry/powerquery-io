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


## Remarks

Obtenha as tabelas incorporadas expostas pelo conector do SparkPost com dados agregados durante um número de dias especificado pelo utilizador. Ao atualizar estas tabelas ou ao fazer chamadas à API do SparkPost com este conector, tenha em atenção que a API do SparkPost tem um limite de velocidade de API restrito. Se vir um código de estado 429 devolvido pelo servidor do SparkPost, isso significa que atingiu o limite de velocidade e que terá de aguardar até poder fazer mais chamadas. Ao escolher um valor para o parâmetro "Número de dias", não se esqueça de que a API apenas armazena 6 meses de dados.


