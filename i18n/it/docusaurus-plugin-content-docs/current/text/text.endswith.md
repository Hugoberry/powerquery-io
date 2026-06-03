---
title: Text.EndsWith
---

# Text.EndsWith


Indica se il testo termina con il valore specificato.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indica se il testo specificato, `text`, termina con il valore specificato `substring`. L'indicazione fa distinzione tra maiuscole e minuscole.

`comparer` è un `Operatore di confronto` usato per controllare il confronto. Gli operatori di confronto possono essere usati per fornire confronti con distinzione tra maiuscole e minuscole oppure confronti in grado di riconosce le impostazioni cultura e locali.

Nel linguaggio delle formule sono disponibili gli strumenti di confronto predefiniti seguenti:

-   `Comparer.Ordinal`: usato per eseguire un confronto ordinale esatto
-   `Comparer.OrdinalIgnoreCase`: usato per eseguire un confronto ordinale esatto senza distinzione tra maiuscole e minuscole
-   `Comparer.FromCulture`: usato per eseguire un confronto in grado di riconoscere le impostazioni cultura


## Examples

### Example #1
Verificare se "Hello, World" termina con "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Verificare se "Hello, World" termina con "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
