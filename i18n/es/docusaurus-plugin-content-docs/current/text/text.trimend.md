---
title: Text.TrimEnd
---

# Text.TrimEnd


Quita todos los caracteres finales especificados.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devuelve el resultado de quitar todos los caracteres finales del objeto especificado `text`. De forma predeterminada, se quitan todos los caracteres de espacio en blanco finales.

-   `text`: texto del que se van a quitar los caracteres finales.
-   `trim`: invalida los caracteres de espacio en blanco que se recortan de forma predeterminada. Este parámetro puede ser un solo carácter o una lista de caracteres individuales. Cada operación de recorte final se detiene cuando se encuentra un carácter no recortado.


## Examples

### Example #1
Quitar los espacios en blanco finales de " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Quite los ceros finales de una representación de texto de un número de punto flotante rellenado.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Quite los caracteres de relleno finales de un nombre de cuenta de ancho fijo.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
