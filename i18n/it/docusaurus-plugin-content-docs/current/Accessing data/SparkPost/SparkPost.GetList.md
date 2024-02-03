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

È possibile usare questa funzione per chiamare uno qualsiasi degli endpoint "Lists" offerti dall'API SparkPost v1. Quando si effettuano chiamate all'API SparkPost con questa funzione, tenere presente che l'API SparkPost prevede un rigido limite di velocità dell'API. Se il server SparkPost restituisce un codice di stato 429, il limite di velocità è stato raggiunto ed è necessario attendere qualche istante prima di effettuare altre chiamate.


## Examples

### Example #1 
Restituisce una tabella con una singola colonna popolata con i dati di uno degli endpoint &#34;Lists&#34; dell&#39;API SparkPost v1. Per dettagli, vedere la documentazione di SparkPost.
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



