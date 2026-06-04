---
title: Text.TrimEnd
---

# Text.TrimEnd


Odstráni všetky zadané koncové znaky.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vráti výsledok odstránenia všetkých koncových znakov zo zadanej hodnoty `text`. Predvolene sa odstránia všetky koncové prázdne znaky.

-   `text`: Text, z ktorého sa majú odstrániť koncové znaky.
-   `trim`: Prepíše prázdne znaky, ktoré sú predvolene orezané. Tento parameter môže obsahovať buď jeden znak, alebo zoznam jednotlivých znakov. Každá operácia orezania na konci sa zastaví, keď sa vyskytne neorezaný znak.


## Examples

### Example #1
Odstráňte koncový prázdny znak z textu " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Odstráňte koncové nuly z textového vyjadrenia odsadeného čísla s plávajúcou desatinnou čiarkou.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Odstráňte koncové znaky odsadenia z názvu konta s pevnou šírkou.
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
