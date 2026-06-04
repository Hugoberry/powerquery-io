---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Vraća funkciju upoređivanja na osnovu navedene kulture i osetljivosti na mala i velika slova.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Vraća funkciju upoređivanja koja koristi `culture` i osetljivost na mala i velika slova koju navodi `ignoreCase` za izvršavanje poređenja.  
  
Funkcija upoređivanja prihvata dva argumenta i vraća -1, 0 ili 1 na osnovu toga da li je prva vrednost manja od, jednaka, ili veća od druge.  
  
Podrazumevana vrednost za `ignoreCase` je netačna. `culture` treba da bude jedan od lokalnih standarda koje podržava .NET framework (na primer, „en-US“).


## Examples

### Example #1
Uporedite stavke „a“ i „A“ pomoću lokalnog standarda „en-US“ da biste odredili da li su vrednosti jednake.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Uporedite stavke „a“ i „A“ pomoću lokalnog standarda „en-US“ zanemarujući mala i velika slova da biste odredili da li su vrednosti jednake.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
