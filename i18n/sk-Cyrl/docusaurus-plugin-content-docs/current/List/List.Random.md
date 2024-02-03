---
title: List.Random
---

# List.Random


## Description

Vráti zoznam náhodných čísel.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Vráti zoznam náhodných čísel v rozsahu 0 až 1 s daným počtom hodnôt, ktoré sa majú vygenerovať, a s voliteľnou počiatočnou hodnotou.<ul>   <li><code>count</code>: Počet náhodných hodnôt, ktoré sa majú vygenerovať.</li>   <li><code>seed</code>: <i>[Voliteľné]</i> Číselná hodnota na použitie generátora náhodných čísel. Ak je táto hodnota vynechaná, pri každom volaní príslušnej funkcie sa vygeneruje jedinečný zoznam náhodných čísel. Ak zadáte počiatočnú hodnotu spolu s číslom, každým volaním funkcie sa vygeneruje rovnaký zoznam náhodných čísel.</li></ul>


## Examples

### Example #1 
Vytvorte zoznam 3 náhodných čísel.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Vytvorte zoznam 3 náhodných čísel, pričom zadajte počiatočnú hodnotu.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
