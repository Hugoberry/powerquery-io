---
title: Text.PositionOf
---

# Text.PositionOf


Restituisce la prima posizione del valore (-1 se non trovata).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Restituisce la posizione dell'occorrenza specificata del valore di testo `substring` trovato in `text`. È possibile utilizzare un parametro facoltativo `occurrence` per specificare la posizione dell'occorrenza da restituire (prima occorrenza per impostazione predefinita). Restituisce -1 se `substring` non è stato trovato.

`comparer` è un `Operatore di confronto` usato per controllare il confronto. Gli operatori di confronto possono essere usati per fornire confronti con distinzione tra maiuscole e minuscole oppure confronti in grado di riconoscere le impostazioni cultura e locali.

Nel linguaggio delle formule sono disponibili gli strumenti di confronto predefiniti seguenti:

-   `Comparer.Ordinal`: usato per eseguire un confronto ordinale esatto
-   `Comparer.OrdinalIgnoreCase`: usato per eseguire un confronto ordinale esatto senza distinzione tra maiuscole e minuscole
-   `Comparer.FromCulture`: usato per eseguire un confronto in grado di riconoscere le impostazioni cultura


## Examples

### Example #1
Ottenere la posizione della prima occorrenza di "World" nel testo "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Ottenere la posizione dell'ultima occorrenza di "World" nel testo "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
