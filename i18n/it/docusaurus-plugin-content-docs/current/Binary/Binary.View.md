---
title: Binary.View
---

# Binary.View


## Description

Crea o estende un binario con gestori definiti dall&#39;utente per operazioni di query e azione.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Restituisce una vista di <code>binary</code> in cui vengono usate le funzioni specificate in<code>handlers</code> anziché il comportamento predefinito di un'operazione quando l'operazione è applicata alla vista.<br />Se<code>binary</code> viene specificato, tutte le funzioni del gestore sono facoltative. Se <code>binary</code> non viene specificato, è richiesta la funzione di gestore <code>GetStream</code>. Se una funzione di gestore non è specificata per un'operazione, a <code>binary</code> viene applicato il comportamento predefinito dell'operazione (tranne nel caso di <code>GetExpression</code>). <br />Le funzioni del gestore devono restituire un valore equivalente a livello semantico al risultato dell'applicazione dell'operazione su <code>binary</code> (o della vista risultante nel caso di <code>GetExpression</code>).<br />Se una funzione del gestore genera un errore, alla vista viene applicato il comportamento predefinito dell'operazione.<br />È possibile usare <code>Binary.View</code> per implementare la riduzione per un'origine dati, ovvero la conversione di query M in operazioni specifiche dell'origine (ad esempio, per scaricare una sezione di un file).<br />Per una descrizione completa di <code>Binary.View</code>, vedere la documentazione pubblicata.<br />


## Examples

### Example #1 
Creare una visualizzazione di base che non richieda l&#39;accesso ai dati per determinare la lunghezza.
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
