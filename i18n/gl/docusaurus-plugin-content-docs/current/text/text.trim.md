---
title: Text.Trim
---

# Text.Trim


Elimina todos os caracteres iniciais e finais que se especificaron.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devolve o resultado de eliminar todos os caracteres iniciais e finais do `text` que se especificou. Por defecto, elimínanse todos os espazos en branco inicial e final.

-   `text`: O texto do que se deben eliminar os caracteres principais e finais.
-   `trim`: Anula os espazos en branco que se recortan por defecto. Este parámetro pode ser un só carácter ou unha lista de caracteres únicos. Cada operación de recorte inicial e posterior detense cando se atopa un carácter sen recortar.


## Examples

### Example #1
Elimine os espazos en branco á esquerda e á dereita de " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Eliminar os ceros ao principio e ao final da representación de texto dun número.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Eliminar os corchetes inicial e final dunha etiqueta HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Eliminar os caracteres especiais que se utilizan ao redor do estado de vendas pendentes.
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
