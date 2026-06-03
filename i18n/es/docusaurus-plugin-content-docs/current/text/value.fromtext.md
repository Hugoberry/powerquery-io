---
title: Value.FromText
---

# Value.FromText


Crea un valor con establecimiento inflexible de tipos a partir de una representación de texto.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Descodifica un valor de una representación textual y lo interpreta como un valor con un tipo adecuado.

-   `text`: texto que se va a interpretar.
-   `culture`: (Opcional) Una referencia cultural específica que se usa para interpretar el texto (por ejemplo, "en-US").

Esta función toma un valor de texto y devuelve un valor de tipo `number`, `logical`, `null`, `datetime`, `duration`, o `text`. Un valor de texto vacío se interpreta como un valor `null`.


## Examples

### Example #1
Convertir texto que representa un número en su valor numérico correspondiente.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Convertir texto que representa un porcentaje en su valor numérico correspondiente.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Convertir texto que representa un valor euro francés en su valor numérico correspondiente.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Convierte el texto que representa una fecha y hora alemana en su valor de fecha y hora correspondiente.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
