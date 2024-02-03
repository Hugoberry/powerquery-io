---
title: List.Random
---

# List.Random


## Description

Vrne seznam naključnih števil.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Vrne seznam naključnih števil med 0 in 1, če navedete število vrednosti, ki bodo ustvarjene, in izbirno vrednost semena.<ul>   <li><code>count</code>: število naključnih vrednosti, ki bodo ustvarjene.</li>   <li><code>seed</code>:  <i>[izbirno]</i> številska vrednost za dodajanje ustvarjalnika naključnih števil.  Če to vrednost izpustite, je ob vsakem klicu funkcije ustvarjen enoličen seznam naključnih števil.  Če določite vrednost semena s številom, se za vsak klic v funkcijo ustvari enak seznam naključnih števil.</li></ul>


## Examples

### Example #1 
Ustvarite seznam 3 naključnih števil.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Ustvarite seznam 3 naključnih števil, tako da določite vrednost semena.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
