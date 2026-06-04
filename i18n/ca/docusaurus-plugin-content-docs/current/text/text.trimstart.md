---
title: Text.TrimStart
---

# Text.TrimStart


Suprimeix tots els caràcters inicials especificats.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retorna el resultat de suprimir tots els caràcters inicials del conjunt de `text`. Per defecte, se suprimiran tots els caràcters inicials d’espais en blanc.

-   `text`: text del qual se suprimiran els caràcters inicials.
-   `trim`: substitueix els caràcters d'espai en blanc retallats per defecte. Aquest paràmetre pot ser un únic caràcter o una llista de caràcters individuals. Cada operació de retallada de caràcters inicials s'atura quan es troba un caràcter no retallat.


## Examples

### Example #1
Suprimeix els espais en blanc de " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Suprimeix els zeros inicials de la representació de text d'un nombre.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Suprimeix els caràcters d'emplenament inicial d'un nom de compte d'amplada fixa.
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
