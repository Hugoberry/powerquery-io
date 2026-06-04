---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Vrne funkcijo primerjalnika na podlagi določene kulture in razlikovanju med velikimi in malimi črkami.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Vrne funkcijo primerjalnika, ki uporablja `culture` in razlikovanje med velikimi in malimi črkami, ki jo določa `ignoreCase`, za izvajanje primerjav.  
  
Funkcija primerjalnika sprejme dva argumenta in vrne –1, 0 ali 1 glede na to, ali je prva vrednost manjša od, enaka ali večja od druge.  
  
Privzeta vrednost za `ignoreCase` je"false". Polje `culture` mora biti ena od območnih nastavitev, ki jih podpira ogrodje .NET framework (na primer"sl-SI").


## Examples

### Example #1
Primerjajte"a"in"A"s področnimi nastavitvami"en-US"in določite, ali so vrednosti enake.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Primerjajte"a"in"A"s področnimi nastavitvami"en-US"in ne razlikujte med malimi in velikimi črkami ter nato določite, ali so vrednosti enake.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
