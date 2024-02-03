---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Restituisce una funzione che combina un elenco di testo utilizzando le lunghezze specificate.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Restituisce una funzione che combina un elenco di valori di testo in un singolo valore di testo utilizzando le lunghezze specificate.


## Examples

### Example #1 
Combina un elenco di valori di testo estraendo i numeri di caratteri specificati da ogni valore di input.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Combina un elenco di valori di testo estraendo i numeri di caratteri specificati, dopo aver pre-compilato il risultato con il testo del modello.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
