---
title: Text.PositionOf
---

# Text.PositionOf


Devolve a primeira posición do valor (-1 se non se localiza).


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

Devolve a posición da ocorrencia especificada do valor de texto `substring` localizado en `text`. O parámetro opcional `occurrence` pódese usar para especificar que posición da ocorrencia se vai devolver (por defecto, a primeira ocorrencia). Devolve -1 se non se atopou `substring`.

`comparer` é un `Comparer` que se usa para controlar a comparación. Os comparadores pódense usar para comparacións que non diferencian maiúsculas de minúsculas ou que recoñecen referencias culturais e a configuración rexional.

Os seguintes comparadores incorporados están dispoñibles na linguaxe da fórmula:

-   `Comparer.Ordinal`: úsase para realizar unha comparación ordinal exacta
-   `Comparer.OrdinalIgnoreCase`: úsase para realizar unha comparación ordinal exacta que non diferencie maiúsculas de minúsculas
-   `Comparer.FromCulture`: úsase para realizar unha comparación de recoñecemento de referencias culturais


## Examples

### Example #1
Obter a posición da primeira ocorrencia de "Mundo" no texto "Ola, Mundo!". "Ola, Mundo!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Obtén a posición da última aparición de "Mundo" en "Ola, Mundo!". Ola, Mundo!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
