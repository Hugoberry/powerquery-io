---
title: Comparer.Equals
---

# Comparer.Equals


Devolve un valor lóxico baseado na comprobación de igualdade entre os dous valores fornecidos.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Devolve un valor `lóxico` baseado na comprobación de igualdade sobre os dous valores indicados `x` e `y`, utilizando `comparer`.

`comparer` é un `Comparador` que se usa para controlar a comparación. Un comparador é unha función que acepta dous argumentos e devolve -1, 0 ou 1 en función de se o primeiro valor é menor, igual ou maior que o segundo. Os comparadores poden usarse para proporcionar comparacións que non distingan entre maiúsculas e minúsculas ou que sexan conscientes da cultura e da localización.

Os seguintes comparadores integrados están dispoñibles no idioma da fórmula:

-   `Comparer.Ordinal`: úsase para realizar unha comparación ordinal exacta
-   `Comparer.OrdinalIgnoreCase`: úsase para realizar unha comparación ordinal exacta que non distingue entre maiúsculas e minúsculas
-   `Comparer.FromCulture`: Úsase para realizar unha comparación que teña en conta a cultura


## Examples

### Example #1
Compare "1" e "A" utilizando a configuración rexional "gl-ES" para determinar se os valores son iguais.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
