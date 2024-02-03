---
title: List.Alternate
---

# List.Alternate


## Description

Palauttaa luettelon, joka muodostuu kaikista luettelon parittomista siirtymäelementeistä.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Palauttaa luettelon, joka muodostuu kaikista luettelon parittomista siirtymäelementeistä. Vaihtelee luettelon <code>list</code> arvojen ottamisen ja ohittamisen välillä parametrien mukaan.    <ul>    <li><code>count</code>: määrittää kunakin kertana ohitettavien arvojen määrän.</li>    <li><code>repeatInterval</code>: valinnainen toistoväli, joka ilmaisee, montako arvoa lisätään ohitettujen arvojen väliin.</li>    <li><code>offset</code>: valinnainen siirtymäparametri arvojen ohittamisen alkamiseksi alkusiirtymässä.</li>    </ul>


## Examples

### Example #1 
Luo ensimmäisen luvun ohittava luettelo kohteesta \{1..10}.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Luo joka toisen luvun ohittava luettelo kohteesta \{1..10}.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Luo luvusta 1 ja joka toisen luvun ohittava luettelo kohteesta \{1..10}.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Luo kohteesta \{1..10} luettelo, joka alkaa luvusta 1, ohittaa yhden arvon, säilyttää kaksi arvoa ja niin edelleen.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
