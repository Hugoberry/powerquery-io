---
title: Text.EndsWith
---

# Text.EndsWith


Indica se o texto finaliza no valor especificado.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indica se o texto indicado, `text`, finaliza co valor especificado, `substring`. A indicación diferencia maiúsculas de minúsculas.

`comparer` é un `Comparer` que se usa para controlar a comparación. Os comparadores pódense usar para comparacións que non diferencian maiúsculas de minúsculas ou que recoñecen referencias culturais e a configuración rexional.

Os seguintes comparadores incorporados están dispoñibles na linguaxe da fórmula:

-   `Comparer.Ordinal`: úsase para realizar unha comparación ordinal exacta
-   `Comparer.OrdinalIgnoreCase`: úsase para realizar unha comparación ordinal exacta que non diferencie maiúsculas de minúsculas
-   `Comparer.FromCulture`: úsase para realizar unha comparación ordinal exacta que non diferencie maiúsculas de minúsculas


## Examples

### Example #1
Comprobar se "Ola, mundo" finaliza con "mundo".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Comprobe se "Ola, mundo" finaliza con "Mundo".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
