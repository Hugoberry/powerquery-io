---
title: Binary.View
---

# Binary.View


Crea o estende un binario con gestori definiti dall'utente per operazioni di query e azione.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Restituisce una vista di `binary` in cui vengono usate le funzioni specificate in`handlers` anziché il comportamento predefinito di un'operazione quando l'operazione è applicata alla vista.

Se`binary` viene specificato, tutte le funzioni del gestore sono facoltative. Se `binary` non viene specificato, è richiesta la funzione di gestore `GetStream`. Se una funzione di gestore non è specificata per un'operazione, a `binary` viene applicato il comportamento predefinito dell'operazione (tranne nel caso di `GetExpression`).

Le funzioni del gestore devono restituire un valore equivalente a livello semantico al risultato dell'applicazione dell'operazione su `binary` (o della vista risultante nel caso di `GetExpression`).

Se una funzione del gestore genera un errore, alla vista viene applicato il comportamento predefinito dell'operazione.

È possibile usare `Binary.View` per implementare la riduzione per un'origine dati, ovvero la conversione di query M in operazioni specifiche dell'origine (ad esempio, per scaricare una sezione di un file).

Per una descrizione completa di `Binary.View`, vedere la documentazione pubblicata.


## Examples

### Example #1
Creare una visualizzazione di base che non richieda l'accesso ai dati per determinare la lunghezza.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
