---
title: Text.EndsWith
---

# Text.EndsWith


Pokazuje da li se tekst završava navedenom vrednošću.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Pokazuje da li se dati tekst, `text`, završava navedenom vrednošću, `substring`. Indikacija razlikuje mala i velika slova.

`comparer`predstavlja `Comparer` koji se koristi za kontrolisanje poređenja. Upoređivači mogu da se koriste za obezbeđivanje poređenja koja ne razlikuju mala i velika slova ili nisu usklađena sa kulturom odnosno lokalnim standardom.

Sledeći ugrađeni upoređivači dostupni su na jeziku formule:

-   `Comparer.Ordinal`: Koristi se za izvršavanje tačnog poređenja zasnovanog na redosledu znakova
-   `Comparer.OrdinalIgnoreCase`: Koristi se za izvršavanje tačnog poređenja zasnovanog na redosledu znakova, koje ne razlikuje mala i velika slova
-   `Comparer.FromCulture`: Koristi se za izvršavanje poređenja usklađenog sa kulturom


## Examples

### Example #1
Provera da li se „Hello, World“ završava sa „world“.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Provera da li se „Hello, World“ završava sa „World“.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
