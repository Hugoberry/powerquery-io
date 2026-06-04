---
title: Text.TrimEnd
---

# Text.TrimEnd


Suprimeix tots els caràcters finals especificats.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retorna el resultat de suprimir tots els caràcters finals del conjunt de`text`. Per defecte, se suprimiran tots els caràcters finals d’espais en blanc a.

-   `text`: text del qual se suprimiran els caràcters finals.
-   `trim`: substitueix els caràcters d'espai en blanc retallats per defecte. Aquest paràmetre pot ser un únic caràcter o una llista de caràcters individuals. Cada operació de retallada de caràcters finals s'atura quan es troba un caràcter no retallat.


## Examples

### Example #1
Suprimeix els espais en blanc de " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Suprimeix els zeros finals d'una representació de text d'un nombre de coma flotant emplenat.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Suprimeix els caràcters d'emplenament final d'un nom de compte d'amplada fixa.
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
