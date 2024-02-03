---
title: List.Generate
---

# List.Generate


## Description

Ustvari seznam vrednosti.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Ustvari seznam vrednosti z razpoložljivimi funkcijami. Funkcija <code>initial</code> ustvari začetno vrednost kandidata, ki se nato preveri glede na <code>condition</code>.  
    Če je vrednost kandidata odobrena, se vrne kot del dobljenega seznama, naslednja vrednost kandidata pa se ustvari tako, da se novo odobrena vrednost posreduje funkciji <code>next</code>.       Ko se vrednost kandidata ne ujema z vrednostjo <code>condition</code>, se postopek ustvarjanja seznama ustavi.      Za preoblikovanje elementov na dobljenem seznamu se lahko navede tudi neobvezni parameter <code>selector</code>, ki preoblikuje elemente na dobljenem seznamu.


## Examples

### Example #1 
Seznam ustvarite tako, da začnete pri desetih, nato korakoma zmanjšujete za ena, pri tem pa poskrbite, da bo vsak element večji od nič.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Generiranje seznama zapisov, ki vsebujejo x in y, kjer je x vrednost in y seznam. Pri tem mora x biti manj kot 10 in predstavljati število elementov na seznamu y. Ko je seznam ustvarjen, se vrnejo samo vrednosti x.
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
