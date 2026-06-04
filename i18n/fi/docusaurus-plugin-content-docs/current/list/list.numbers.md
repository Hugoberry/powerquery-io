---
title: List.Numbers
---

# List.Numbers


Palauttaa lukuluettelon, kun annetaan alkuarvo, määrä ja valinnainen lisäysarvo.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Palauttaa lukuluettelon, kun annetaan alkuarvo, määrä ja valinnainen lisäysarvo. Oletuslisäysarvo on 1.

-   `start`: Luettelon alkuarvo.
-   `count`: Luotavien arvojen määrä.
-   `increment`: *(Valinnainen)* Arvo, jonka mukaan lisätään. Jos jätetään pois, arvoja lisätään yhdellä.


## Examples

### Example #1
Muodosta kymmenen peräkkäisen luvun luettelo luvusta 1 alkaen.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
Muodosta kymmenen luvun luettelo alkaen luvusta 1 ja käyttäen kahden lisäystä kullekin seuraavalle luvulle.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
