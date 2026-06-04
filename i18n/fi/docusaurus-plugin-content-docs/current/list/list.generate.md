---
title: List.Generate
---

# List.Generate


Luo arvoluettelon.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Remarks

Luo arvoluettelon annettujen funktioiden avulla. Funktio `initial` luo aloitusehdotusarvon, joka testataan sitten arvoa `condition` vastaan. Jos ehdotettu arvo hyväksytään, se palautetaan tuloksena olevaan luetteloon, ja seuraava ehdotettu arvo muodostetaan välittämällä äskettäin hyväksytty arvo kohteeseen `next`. Kun ehdotettu arvo ei vastaa arvoa `condition`, luettelon luominen pysähtyy. Valinnainen parametri `selector` voidaan antaa myös tuloksena olevan luettelon kohteiden muuntamista varten.


## Examples

### Example #1
Luo luettelo aloittamalla kymmenestä ja heikentämällä sitä jatkuvasti yhdellä. Varmista, että kukin kohde on suurempi kuin nolla.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2
Muodosta luettelo tietueista, jotka sisältävät kohteet x ja y (x on arvo ja y on luettelo). Kohteen x arvon tulee olla alle 10 ja edustaa luettelossa y olevien kohteiden määrää. Kun luettelo on muodostettu, palauta vain x-arvot.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
