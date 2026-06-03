---
title: Table.ViewFunction
---

# Table.ViewFunction


Crea una funzione che può essere intercettata da un gestore definito in una vista (tramite Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Crea una funzione di visualizzazione basata su`function`che può essere gestita in una vista creata da `Table.View`.

È possibile usare il gestore `OnInvoke` di `Table.View` per definire un gestore per la funzione di visualizzazione.

Come per i gestori di operazioni predefinite, se non viene specificato un gestore `OnInvoke` o se questo non gestisce la funzione di visualizzazione, oppure se il gestore genera un errore,`function`viene applicato sopra la vista.

Per una descrizione più dettagliata di `Table.View` e delle funzioni di visualizzazione personalizzate, vedere la documentazione pubblicata.



## Category
Table.Table construction
