---
title: Text.Trim
---

# Text.Trim


Suprimeix tots els caràcters inicials i finals especificats.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retorna el resultat de suprimir tots els caràcters inicials i finals del conjunt de `text`. Per defecte, se suprimiran tots els caràcters inicials i finals d’espais en blanc a.

-   `text`: text del qual se suprimiran els caràcters inicials i finals.
-   `trim`: substitueix els caràcters d'espai en blanc retallats per defecte. Aquest paràmetre pot ser un únic caràcter o una llista de caràcters individuals. Cada operació de retallada de caràcters inicials i finals s'atura quan es troba un caràcter no retallat.


## Examples

### Example #1
Suprimeix els espais en blanc inicials i finals de " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Suprimeix els zeros inicials i finals de la representació de text d'un nombre.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Suprimeix els claudàtors inicials i final d'una etiqueta HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Suprimeix els caràcters especials que s'utilitzen en l'estat de vendes pendents.
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
