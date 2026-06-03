---
title: Comparer.Equals
---

# Comparer.Equals


Restituisce un valore logico basato sul controllo di uguaglianza sui due valori specificati.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Restituisce un valore `logico` in base al controllo di uguaglianza sui due valori specificati, `x` e `y`, utilizzando il `x` specificato.`comparer`.

`comparer` è un `operatore di confronto` usato per controllare il confronto. Un operatore di confronto è una funzione che accetta due argomenti e restituisce -1, 0 o 1 a seconda che il primo valore sia minore, uguale a o maggiore del secondo. Gli operatori di confronto possono essere usati per eseguire confronti senza distinzione tra maiuscole e minuscole oppure confronti in grado di riconoscere le impostazioni cultura e locali.

Nel linguaggio delle formule sono disponibili gli operatori di confronto predefiniti seguenti:

-   `Comparer.OrdinalIgnoreCase`: usato per eseguire un confronto ordinale esatto
-   `Comparer.OrdinalIgnoreCase`: usato per eseguire un confronto ordinale esatto senza distinzione tra maiuscole e minuscole
-   `Comparer.FromCulture`: usato per eseguire un confronto in grado di riconoscere le impostazioni cultura


## Examples

### Example #1
Confronta "1" e "A" tramite le impostazioni locali "en-US" per stabilire se i valori sono uguali.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
