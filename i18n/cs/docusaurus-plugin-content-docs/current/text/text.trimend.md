---
title: Text.TrimEnd
---

# Text.TrimEnd


Odebere všechny zadané koncové znaky.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vrátí výsledek odebrání všech koncových znaků ze zadaného `text`. Ve výchozím nastavení se odeberou všechny koncové prázdné znaky.

-   `text`: Text, ze kterého mají být odebrány koncové znaky.
-   `trim`: Přepíše prázdné znaky, které jsou ve výchozím nastavení oříznuty. Tento parametr může být buď jeden znak, nebo seznam jednotlivých znaků. Každá operace oříznutí koncových znaků se zastaví, když je zjištěn neoříznutý znak.


## Examples

### Example #1
Odebere koncové mezery z hodnoty „ a b c d “.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Odebere koncové nuly z textového vyjádření čísla s plovoucí desetinnou čárkou doplněného nulami.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Odebere koncové znaky doplněné do názvu účtu s pevnou šířkou.
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
