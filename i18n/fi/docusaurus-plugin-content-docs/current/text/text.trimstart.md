---
title: Text.TrimStart
---

# Text.TrimStart


Poistaa kaikki määritetyt alussa olevat merkit.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Palauttaa kaikkien alussa olevien merkkien poistamisen tuloksen määritetystä kohteesta `text`. Kaikki alussa olevat välilyönnit poistetaan oletusarvoisesti.

-   `text`: teksti, josta alussa olevat merkit poistetaan.
-   `trim`: ohittaa välilyönnit, jotka on rajattu pois oletusarvoisesti. Tämä parametri voi olla yksittäinen merkki tai yksittäisten merkkien luettelo. Jokainen alun rajaustoiminto pysäytetään, kun rajaamaton merkki havaitaan.


## Examples

### Example #1
Poistaa alussa olevat välilyönnit kohteesta " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Poista alkunollat luvun tekstimuodosta.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Poista alussa olevat täyttömerkit kiinteäleveyksisestä tilin nimestä.
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
