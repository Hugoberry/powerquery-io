---
title: MailChimp.Collection
---

# MailChimp.Collection


Restituisce una tabella di dati da un endpoint MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Remarks

Effettua una chiamata all'API MailChimp e restituisce il set di dati risultante come tabella. Esegue il paging automatico di tutti i risultati. È possibile usare un parametro di query entityName facoltativo per gli endpoint API in cui l'endpoint radice e il parametro entityName principale nella risposta JSON non corrispondono.


## Examples

### Example #1 
Effettua il pull di una tabella di dati dall&#39;endpoint elenchi dell&#39;API MailChimp.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Tabella con dati elenco.
```


### Example #2 
Effettua il pull di una tabella di dati dall&#39;endpoint cartelle delle campagne dell&#39;API MailChimp.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Tabella con i dati delle cartelle delle campagne.
```



