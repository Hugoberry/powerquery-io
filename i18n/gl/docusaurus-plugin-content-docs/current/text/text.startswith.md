---
title: Text.StartsWith
---

# Text.StartsWith


Indica se o texto comeza cun valor especificado.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Devolve verdadeiro se o valor de texto `text` comeza co valor de texto `substring`.

-   `text` : Un valor de `text` que se vai buscar.
-   `substring` : Un valor de `text` que é a subcadea que se buscará en `text`.
-   `comparer` : *(Opcional)* Un `Comparer` usado para controlar a comparación. Por exemplo, pódese usar `Comparer.OrdinalIgnoreCase` para realizar buscas que non distingan entre maiúsculas e minúsculas.

`comparer` é un `Comparer` que se usa para controlar a comparación. Os comparadores pódense usar para proporcionar comparacións que non distingan entre maiúsculas e minúsculas ou que teñan en conta a cultura e a configuración rexional.

Os seguintes comparadores integrados están dispoñibles na linguaxe de fórmulas:

-   `Comparer.Ordinal`: Úsase para realizar unha comparación ordinal exacta.
-   `Comparer.OrdinalIgnoreCase`: Úsase para realizar unha comparación ordinal exacta sen distinción entre maiúsculas e minúsculas.
-   `Comparer.FromCulture`: Úsase para realizar unha comparación cultural.


## Examples

### Example #1
Comprobar se o texto "Ola, mundo" comeza co texto "ola".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Comprobe se o texto "Ola, mundo" comeza co texto "Ola".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Sen distinguir entre maiúsculas e minúsculas, comproba se o texto "Hello, World" comeza co texto "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
