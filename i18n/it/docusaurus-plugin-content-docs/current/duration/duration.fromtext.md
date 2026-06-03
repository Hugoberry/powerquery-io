---
title: Duration.FromText
---

# Duration.FromText


Restituisce un valore della durata da rappresentazioni testuali in formato di tempo trascorso (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Restituisce un valore di durata dal testo specificato, `text`. Questa funzione può analizzare i formati seguenti:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(tutti gli intervalli sono inclusivi)

-   ggg: numero di giorni.
-   hh: numero di ore, compreso tra 0 e 23.
-   mm: numero di minuti compreso tra 0 e 59.
-   ss: numero di secondi compreso tra 0 e 59.
-   ff: frazione di secondi, compresa tra 0 e 9999999.


## Examples

### Example #1
Converte `"2.05:55:20"` in un valore `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
