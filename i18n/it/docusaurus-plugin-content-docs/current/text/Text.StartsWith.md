---
title: Text.StartsWith
---

# Text.StartsWith


Indica se il testo inizia con il valore specificato.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Restituisce true se il valore di testo <code>text</code> inizia con il valore di testo <code>substring</code>. <ul> <li><code>text</code>: <i></i>Un valore <code>text</code> in cui eseguire la ricerca</li> <li><code>substring</code>: valore <i></i>A <code>text</code> che rappresenta la sottostringa da impostare come sottostringa ricercata in <code>substring</code></li> <li><code>comparer</code>: <i>[Facoltativo]</i> Un <code>Operatore di confronto</code> utilizzato per controllare il confronto. Ad esempio, <code>Comparer.OrdinalIgnoreCase</code> può essere usato per eseguire ricerche senza distinzione tra maiuscole e minuscole</li> </ul> <div><code>comparer</code> è un <code>Operatore di confronto</code> usato per controllare il confronto. Gli operatori di confronto possono essere usati per fornire confronti con distinzione tra maiuscole e minuscole oppure confronti in grado di riconoscere le impostazioni cultura o locali. </div> <div> Nel linguaggio delle formule sono disponibili gli strumenti di confronto predefiniti seguenti: </div> <ul> <li><code>Comparer.Ordinal</code>:  usato per eseguire un confronto ordinale esatto</li> <li><code>Comparer.OrdinalIgnoreCase</code>: usato per eseguire un confronto ordinale esatto senza distinzione tra maiuscole e minuscole</li> <li><code>Comparer.FromCulture</code>: usato per eseguire un confronto in grado di riconoscere le impostazioni cultura</li></ul>


## Examples

### Example #1 
Controllare se il testo &#34;Hello, World&#34; inizia con il testo &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Controllare se il testo &#34;Hello, World&#34; inizia con il testo &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
