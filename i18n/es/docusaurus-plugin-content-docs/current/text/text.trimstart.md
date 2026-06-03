---
title: Text.TrimStart
---

# Text.TrimStart


Quita todos los caracteres iniciales especificados.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devuelve el resultado de quitar todos los caracteres iniciales del objeto especificado `text`. De forma predeterminada, se quitan todos los caracteres de espacio en blanco iniciales.

-   `text`: texto del que se van a quitar los caracteres iniciales.
-   `trim`: invalida los caracteres de espacio en blanco que se recortan de forma predeterminada. Este parámetro puede ser un solo carácter o una lista de caracteres individuales. Cada operación de recorte inicial se detiene cuando se encuentra un carácter no recortado.


## Examples

### Example #1
Quitar los espacios en blanco iniciales " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Quite los ceros iniciales de la representación de texto de un número.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Quite los caracteres de relleno iniciales de un nombre de cuenta de ancho fijo.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
