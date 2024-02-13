---
title: Table.View
---

# Table.View


Crea o estende una tabella con gestori definiti dall&#39;utente per operazioni di query e azione.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Restituisce una vista di <code>table</code> in cui vengono usate le funzioni specificate in<code>handlers</code> anziché il comportamento predefinito di un'operazione quando l'operazione è applicata alla vista.<br />Se<code>table</code> viene specificato, tutte le funzioni del gestore sono facoltative. Se <code>table</code> non viene specificato, sono richieste le funzioni di gestore <code>GetType</code> e <code>GetRows</code>. Se una funzione di gestore non è specificata per un'operazione, a <code>table</code> viene applicato il comportamento predefinito dell'operazione (tranne nel caso di <code>GetExpression</code>). <br />Le funzioni del gestore devono restituire un valore equivalente a livello semantico al risultato dell'applicazione dell'operazione su <code>table</code> (o della vista risultante nel caso di <code>GetExpression</code>).<br />Se una funzione del gestore genera un errore, alla vista viene applicato il comportamento predefinito dell'operazione.<br />È possibile usare <code>Table.View</code> per implementare la riduzione per un'origine dati, ovvero la conversione di query M in query specifiche dell'origine (ad esempio, per creare istruzioni T-SQL da query M).<br />Per una descrizione completa di <code>Table.View</code>, vedere la documentazione pubblicata.<br />


## Examples

### Example #1 
Creare una visualizzazione di base che non richieda l&#39;accesso alle righe per determinare il tipo o il numero di righe.
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
