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

Indica se il testo specificato, <code>text</code>, termina con il valore specificato <code>substring</code>. L'indicazione fa distinzione tra maiuscole e minuscole. <div><code>comparer</code> è un <code>Operatore di confronto</code> usato per controllare il confronto. Gli operatori di confronto possono essere usati per fornire confronti con distinzione tra maiuscole e minuscole oppure confronti in grado di riconosce le impostazioni cultura e locali. </div> <div> Nel linguaggio delle formule sono disponibili gli strumenti di confronto predefiniti seguenti: </div> <ul> <li><code>Comparer.Ordinal</code>:  usato per eseguire un confronto ordinale esatto</li> <li><code>Comparer.OrdinalIgnoreCase</code>: usato per eseguire un confronto ordinale esatto senza distinzione tra maiuscole e minuscole</li> <li><code>Comparer.FromCulture</code>: usato per eseguire un confronto in grado di riconoscere le impostazioni cultura</li></ul>


## Examples

### Example #1 
Verificare se &#34;Hello, World&#34; termina con &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Verificare se &#34;Hello, World&#34; termina con &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
