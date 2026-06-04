---
title: Text.TrimEnd
---

# Text.TrimEnd


Elimina todos os caracteres finais que se especificaron.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devolve o resultado de eliminar todos os caracteres finais do `text` que se especificou. Por defecto, elimínanse todos os espazos en branco ao final.

-   `text`: O texto do que se deben eliminar os caracteres finais.
-   `trim`: Anula os espazos en branco que se recortan por defecto. Este parámetro pode ser un só carácter ou unha lista de caracteres únicos. Cada operación de recorte ao final detense cando se atopa un carácter non sen recortar.


## Examples

### Example #1
Eliminar os espazos en branco á dereita de " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Eliminar os ceros ao final dunha representación de texto dun número de coma flotante acolchado.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Eliminar os caracteres de recheo ao final dun nome de conta de ancho fixo.
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
