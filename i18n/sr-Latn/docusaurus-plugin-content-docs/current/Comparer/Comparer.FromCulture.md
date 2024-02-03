---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Vraća funkciju upoređivanja na osnovu navedene kulture i osetljivosti na mala i velika slova.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Vraća funkciju upoređivanja koja koristi <code>culture</code> i osetljivost na mala i velika slova koju navodi <code>ignoreCase</code> za izvršavanje poređenja.<br /> <br /> Funkcija upoređivanja prihvata dva argumenta i vraća -1, 0 ili 1 na osnovu toga da li je prva vrednost manja od, jednaka, ili veća od druge.<br /> <br /> Podrazumevana vrednost za <code>ignoreCase</code> je netačna. <code>culture</code> treba da bude jedan od lokalnih standarda koje podržava .NET framework (na primer, „en-US“).    


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
