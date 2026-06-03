---
title: Text.Trim
---

# Text.Trim


Quita todos los caracteres iniciales y finales especificados.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devuelve el resultado de quitar todos los caracteres iniciales y finales del especificado `text`. De forma predeterminada, se quitan todos los caracteres de espacio en blanco iniciales y finales.

-   `text`: texto del que se van a quitar los caracteres inicial y final.
-   `trim`: invalida los caracteres de espacio en blanco que se recortan de forma predeterminada. Este parámetro puede ser un solo carácter o una lista de caracteres individuales. Cada operación de recorte inicial y final se detiene cuando se encuentra un carácter no recortado.


## Examples

### Example #1
Quitar los espacios en blanco iniciales y finales de " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Quite los ceros iniciales y finales de la representación de texto de un número.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Quite los corchetes inicial y final de una etiqueta HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Quite los caracteres especiales usados en torno al estado de ventas pendientes.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
