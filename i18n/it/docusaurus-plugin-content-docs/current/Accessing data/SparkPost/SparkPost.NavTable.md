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

Recupera le tabelle predefinite esposte dal connettore SparkPost con i dati aggregati in un numero di giorni specificato dall'utente. Quando si aggiornano queste tabelle o si effettuano chiamate all'API SparkPost con questo connettore, tenere presente che l'API SparkPost prevede un rigido limite di velocità dell'API. Se il server SparkPost restituisce un codice di stato 429, il limite di velocità è stato raggiunto ed è necessario attendere qualche istante prima di effettuare altre chiamate. Quando si sceglie un valore per il parametro relativo al numero di giorni, tenere presente che l'API archivia solo i dati degli ultimi sei mesi.


