---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Remarks

Essa função pode ser usada para chamar qualquer um dos pontos de extremidade de "Listas" oferecidos pela API do SparkPost v1. Ao fazer chamadas à API do SparkPost usando essa função, lembre-se de que ela tem um limite de taxa de API estrito. Se o código de status 429 for retornado pelo servidor SparkPost você terá atingido o limite de taxa e precisará esperar um pouco para fazer mais chamadas.


## Examples

### Example #1 
Retorna uma tabela com uma única coluna populada pelos dados de um dos pontos de extremidade de &#34;Listas&#34; da API do SparkPost v1 (confira a documentação do SparkPost para obter detalhes).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



