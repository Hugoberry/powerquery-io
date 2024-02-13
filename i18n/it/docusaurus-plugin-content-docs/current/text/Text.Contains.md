---
title: Text.Contains
---

# Text.Contains


Restituisce un valore che indica se il testo contiene la sottostringa.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Rileva se <code>text</code> contiene il valore <code>substring</code>. Restituisce true se il valore viene trovato. Questa funzione non supporta caratteri jolly o espressioni regolari. <br /> <br /> L'argomento facoltativo <code>comparer</code> può essere utilizzato per specificare confronti con distinzione tra maiuscole e minuscole o con distinzione tra impostazioni cultura e impostazioni locali. Nel linguaggio delle formule sono disponibili gli operatori di confronto predefiniti seguenti: <ul> <li><code>Comparer.Ordinal</code>: consente di eseguire un confronto ordinale con distinzione tra maiuscole e minuscole</li> <li><code>Comparer.OrdinalIgnoreCase</code>:  utilizzato per eseguire un confronto ordinale senza distinzione tra maiuscole e minuscole</li> <li><code>Comparer.FromCulture</code>: utilizzato per eseguire un confronto in grado di riconoscere le impostazioni cultura</li></ul>


## Examples

### Example #1 
Trovare se il testo &#34;Hello World&#34; contiene &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Trovare se il testo &#34;Hello World&#34; contiene &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Verificare se il testo &#34;Hello World&#34; contiene &#34;hello&#34;, usando un operatore di confronto senza distinzione tra maiuscole e minuscole.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
