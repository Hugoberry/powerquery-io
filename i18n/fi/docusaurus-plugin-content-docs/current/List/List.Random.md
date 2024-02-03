---
title: List.Random
---

# List.Random


## Description

Palauttaa satunnaislukujen luettelon.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Palauttaa välillä 0 ja 1 olevien satunnaislukujen luettelon, kun annetaan muodostettavien arvojen määrä ja valinnainen alkuarvo.<ul>   <li><code>count</code>: muodostettavien satunnaisten arvojen määrä.</li>   <li><code>seed</code>: <i>(valinnainen)</i> lukuarvo jota käytetään alkuarvona satunnaislukugeneraattorille. Jos tämä jätetään pois, muodostetaan satunnaislukujen luettelo aina, kun kutsut funktiota. Jos määrität alkuarvoksi luvun, jokainen funktion kutsu muodostaa saman satunnaislukujen luettelon.</li></ul>


## Examples

### Example #1 
Luo kolmen satunnaisluvun luettelo.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Luo kolmen satunnaisluvun luettelo määrittäen alkuarvo.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
