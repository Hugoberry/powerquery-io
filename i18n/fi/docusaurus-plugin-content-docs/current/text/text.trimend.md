---
title: Text.TrimEnd
---

# Text.TrimEnd


Poistaa kaikki määritetyt lopussa olevat merkit.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Palauttaa kaikkien lopussa olevien merkkien poistamisen tuloksen määritetystä kohteesta `text`. Kaikki lopussa olevat välilyönnit poistetaan oletusarvoisesti.

-   `text`: teksti, josta lopussa olevat merkit poistetaan.
-   `trim`: ohittaa välilyönnit, jotka on rajattu pois oletusarvoisesti. Tämä parametri voi olla yksittäinen merkki tai yksittäisten merkkien luettelo. Jokainen lopun rajaustoiminto pysäytetään, kun rajaamaton merkki havaitaan.


## Examples

### Example #1
Poistaa lopussa olevat välilyönnit kohteesta " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Poista lopussa olevat nollat täyttömuotoisen liukuluvun tekstimuodosta.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Poista lopussa olevat täyttömerkit kiinteäleveyksisestä tilin nimestä.
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
