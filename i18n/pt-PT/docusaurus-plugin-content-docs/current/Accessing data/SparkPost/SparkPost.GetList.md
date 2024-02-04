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


## Details

Esta função pode ser utilizada para chamar qualquer um dos pontos finais "Listas" oferecidos pela API do SparkPost v1. Ao fazer chamadas à API do SparkPost com esta função, tenha em atenção que a API do SparkPost tem um limite de velocidade de API restrito. Se vir um código de estado 429 devolvido pelo servidor do SparkPost, isso significa que atingiu o limite de velocidade e que terá de aguardar até poder fazer mais chamadas.


## Examples

### Example #1 
Devolve uma tabela com uma única coluna povoada com dados de um dos pontos finais &#34;Listas&#34; da API do SparkPost v1 (para obter mais detalhes, veja a documentação do SparkPost).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



