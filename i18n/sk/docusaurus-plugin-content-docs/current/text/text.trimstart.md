---
title: Text.TrimStart
---

# Text.TrimStart


Odstráni všetky zadané začiatočné znaky.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Vráti výsledok odstránenia všetkých začiatočných znakov zo zadanej hodnoty `text`. Predvolene sa odstránia všetky začiatočné prázdne znaky.

-   `text`: Text, z ktorého sa majú odstrániť začiatočné znaky.
-   `trim`: Prepíše prázdne znaky, ktoré sú predvolene orezané. Tento parameter môže obsahovať buď jeden znak, alebo zoznam jednotlivých znakov. Každá operácia orezania na začiatku sa zastaví, keď sa vyskytne neorezaný znak.


## Examples

### Example #1
Odstráňte úvodný prázdny znak z textu " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Odstráňte začiatočné nuly z textového vyjadrenia čísla.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Odstráňte začiatočné znaky odsadenia z názvu konta s pevnou šírkou.
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
