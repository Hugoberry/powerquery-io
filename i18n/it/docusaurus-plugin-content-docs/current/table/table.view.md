---
title: Table.View
---

# Table.View


Crea o estende una tabella con gestori definiti dall'utente per operazioni di query e azione.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Restituisce una vista di `table` in cui vengono usate le funzioni specificate in`handlers` anziché il comportamento predefinito di un'operazione quando l'operazione è applicata alla vista.

Se`table` viene specificato, tutte le funzioni del gestore sono facoltative. Se `table` non viene specificato, sono richieste le funzioni di gestore `GetType` e `GetRows`. Se una funzione di gestore non è specificata per un'operazione, a `table` viene applicato il comportamento predefinito dell'operazione (tranne nel caso di `GetExpression`).

Le funzioni del gestore devono restituire un valore equivalente a livello semantico al risultato dell'applicazione dell'operazione su `table` (o della vista risultante nel caso di `GetExpression`).

Se una funzione del gestore genera un errore, alla vista viene applicato il comportamento predefinito dell'operazione.

È possibile usare `Table.View` per implementare la riduzione per un'origine dati, ovvero la conversione di query M in query specifiche dell'origine (ad esempio, per creare istruzioni T-SQL da query M).

Per una descrizione completa di `Table.View`, vedere la documentazione pubblicata.


## Examples

### Example #1
Creare una visualizzazione di base che non richieda l'accesso alle righe per determinare il tipo o il numero di righe.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
