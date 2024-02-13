---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Crea una funzione che può essere intercettata da un gestore definito in una vista (tramite Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Crea una funzione di visualizzazione basata su<code>function</code>che può essere gestita in una vista creata da <code>Binary.View</code>.<br />È possibile usare il gestore <code>OnInvoke</code> di <code>Binary.View</code> per definire un gestore per la funzione di visualizzazione.<br />Come per i gestori di operazioni predefinite, se non viene specificato un gestore <code>OnInvoke</code> o se questo non gestisce la funzione di visualizzazione, oppure se il gestore genera un errore,<code>function</code>viene applicato sopra la vista.<br />Per una descrizione più dettagliata di <code>Binary.View</code> e delle funzioni di visualizzazione personalizzate, vedere la documentazione pubblicata.<br />



## Category
Binary
