---
title: Text.TrimStart
---

# Text.TrimStart


Elimina todos os caracteres principais que se especificaron.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devolve o resultado de eliminar todos os caracteres principais de `text` que se especificaron. Por defecto, elimínanse todos os espazos en branco principais.

-   `text`: O texto do que se deben eliminar os caracteres principais.
-   `trim`: Anula os espazos en branco que se recortan por defecto. Este parámetro pode ser un só carácter ou unha lista de caracteres únicos. Cada operación de recorte inicial detense cando se atopa un carácter sen recortar.


## Examples

### Example #1
Eliminar os espazos en branco á esquerda de " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Eliminar ceros ao principio da representación textual dun número.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Eliminar os principais caracteres de recheo dun nome de conta de ancho fixo.
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
