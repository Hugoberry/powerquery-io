---
title: Stripe.Contents
---

# Stripe.Contents


Effettua una chiamata all&#39;API Stripe con l&#39;opzione per limitare il numero di chiamate API effettuate.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

Effettua una chiamata all'API Stripe all'indirizzo https://api.stripe.com/v1/<code>method</code>, con il record facoltativo <code>query</code> passato come parametri aggiuntivi e l'opzione facoltativa <code>pageLimit</code> come limite per il numero di richieste API. I dati più recenti vengono restituiti per primi. Se l'opzione <code>pageLimit</code> non è specificata, vengono restituiti tutti i dati. Versione di Stripe usata: 2015-10-16.


## Examples

### Example #1 
Restituisce tutti i dati relativi agli addebiti
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Tabella contenente tutti i dati relativi agli addebiti per l'account Stripe corrente
```


### Example #2 
Restituisce una pagina di dati relativi agli addebiti
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Tabella contenente i dati più recenti relativi agli addebiti per l'account Stripe corrente
```



