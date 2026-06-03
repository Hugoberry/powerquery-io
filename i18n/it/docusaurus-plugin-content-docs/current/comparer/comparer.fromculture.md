---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Restituisce una funzione dell'operatore di confronto in base alle impostazioni cultura specificate e alla distinzione tra maiuscole e minuscole.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Restituisce una funzione dell'operatore di confronto che utilizza la `culture` e la distinzione tra maiuscole e minuscole specificata da `ignoreCase` per eseguire i confronti.  
  
Una funzione di confronto accetta due argomenti e restituisce -1, 0 o 1 a seconda che il primo valore sia minore, uguale o maggiore del secondo.  
  
Il valore predefinito per `ignoreCase` è false. Il `culture` deve essere una delle impostazioni locali supportate da .NET Framework, ad esempio "it-IT".


## Examples

### Example #1
Confronta "a" e "A" tramite le impostazioni locali "en-US" per stabilire se i valori sono uguali.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Confronta "a" e "A" tramite le impostazioni locali "en-US" ignorando la distinzione maiuscole/minuscole per stabilire se i valori sono uguali.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
