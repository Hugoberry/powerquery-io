---
title: Comparer.Equals
---

# Comparer.Equals


Vrne logično vrednost na osnovi preverjanja enakosti dveh danih vrednosti.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Vrne vrednost `logical` na podlagi preverjanja enakosti dveh danih vrednosti, `x` in `y`, z uporabo podanega`comparer`.

`comparer` je `Comparer`, ki se uporablja za nadzor primerjave. Primerjalnik je funkcija, ki sprejme dva argumenta in vrne –1, 0 ali 1 glede na to, ali je prva vrednost manjša od, enaka, ali večje od druge. S primerjalniki je mogoče določiti primerjave, ki ne razlikujejo med velikimi in malimi črkami ali kulturo in območnimi nastavitvami.

Ti vgrajeni primerjalniki so na voljo v jeziku formule:

-   `Comparer.Ordinal`: Used to perform an exact ordinal comparison
-   `Comparer.OrdinalIgnoreCase`: uporablja se za natančno primerjavo vrstilnih števnikov, ki ne razlikuje med velikimi in malimi črkami
-   `Comparer.FromCulture`: uporablja se za primerjavo, ki upošteva kulturo


## Examples

### Example #1
Primerjajte"1"in"A"s področnimi nastavitvami"en-US"in določite, ali so vrednosti enake.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
