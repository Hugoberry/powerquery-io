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

Restituisce true se il valore di testo `text` inizia con il valore di testo `substring`.

-   `text`: valore di tipo `text` da cercare.
-   `substring`: valore di tipo `text` corrispondente alla substring da cercare in `text`
.-   `comparer`: *(facoltativo)* elemento `Comparer` usato per controllare il confronto. Ad esempio, è possibile usare `Comparer.OrdinalIgnoreCase` per eseguire ricerche senza distinzione tra maiuscole e minuscole.

`comparer` è un elemento `Comparer` usato per controllare il confronto. Gli elementi Comparer possono essere usati per specificare confronti senza distinzione tra maiuscole e minuscole o sensibili alle impostazioni cultura e alle impostazioni locali.

Nel linguaggio delle formule sono disponibili gli elementi Comparer predefiniti seguenti:

-   `Comparer.Ordinal`: consente di eseguire un confronto ordinale esatto.
-   `Comparer.OrdinalIgnoreCase`: consente di eseguire un confronto ordinale esatto senza distinzione tra maiuscole e minuscole.
-   `Comparer.FromCulture`: consente di eseguire un confronto sensibile alle impostazioni cultura.


## Examples

### Example #1
Controllare se il testo "Hello, World" inizia con il testo "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Controllare se il testo "Hello, World" inizia con il testo "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Senza distinzione tra maiuscole e minuscole, controllare se il testo "Hello, World" inizia con il testo "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
