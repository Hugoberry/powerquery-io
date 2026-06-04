---
title: Text.TrimStart
---

# Text.TrimStart


Odebere všechny zadané úvodní znaky.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vrátí výsledek odebrání všech úvodních znaků ze zadaného `text`. Ve výchozím nastavení se odeberou všechny úvodní prázdné znaky.

-   `text`: Text, ze kterého mají být odebrány úvodní znaky.
-   `trim`: Přepíše prázdné znaky, které jsou ve výchozím nastavení oříznuty. Tento parametr může být buď jeden znak, nebo seznam jednotlivých znaků. Každá operace oříznutí úvodních znaků se zastaví, když je zjištěn neoříznutý znak.


## Examples

### Example #1
Odebere úvodní mezery z hodnoty „ a b c d “.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Odebere úvodní nuly z textového vyjádření čísla.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Odebere úvodní znaky doplněné do názvu účtu s pevnou šířkou.
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
