---
title: Text.PositionOf
---

# Text.PositionOf


Vraća prvi položaj vrednosti (ako se ne pronađe, vraća se -1).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Vraća položaj navedenog pojavljivanja tekstualne vrednosti `substring` pronađene u `text`. Moguće je koristiti opcionalni parametar `occurrence` kako bi se navelo koji položaj pojavljivanja treba vratiti (podrazumevano je to prvo pojavljivanje). Vraća -1 ako se ne pronađe `substring`.

`comparer` predstavlja `Comparer` koji se koristi za kontrolu poređenja. Upoređivači mogu da se koriste za obezbeđivanje poređenja koja ne razlikuju mala i velika slova ili onih koja su usklađena sa kulturom i lokalnim standardom.

Sledeći ugrađeni upoređivači su dostupni na jeziku formule:

-   `Comparer.Ordinal`: Koristi se za izvršavanje tačnog poređenja zasnovanog na redosledu znakova
-   `Comparer.OrdinalIgnoreCase`: Koristi se za izvršavanje tačnog poređenja zasnovanog na redosledu znakova koje ne razlikuje mala i velika slova
-   `Comparer.FromCulture`: Koristi se za izvršavanje poređenja usklađenog sa kulturom


## Examples

### Example #1
Preuzimanje položaja prvog pojavljivanja niske „World“ u tekstu „Hello, World! Hello, World!“.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Preuzmite položaj poslednjeg pojavljivanja niske „World“ u tekstu „Hello, World! Hello, World!“.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
