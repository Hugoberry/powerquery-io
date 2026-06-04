---
title: Text.StartsWith
---

# Text.StartsWith


Pokazuje da li tekst počinje navedenom vrednošću.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Vraća vrednost „true“ ako tekstualna vrednost `text` počinje tekstualnom vrednošću `substring`.

-   `text`: `text` vrednost koja će se pretražiti.
-   `substring`: `text` vrednost koja predstavlja podnisku za pretraživanje u `text`.
-   `comparer`: *(opcionalno)* `Comparer` koji se koristi za kontrolisanje poređenja. Kao na primer `Comparer.OrdinalIgnoreCase`: Koristi se za izvršavanje pretraga koje ne razlikuju mala i velika slova.

`comparer` is a `Comparer` koji se koristi za kontrolisanje poređenja. Upoređivači mogu da se koriste za pružanje poređenja koja ne razlikuju mala i velika slova ili kulturu i lokalne standarde.

Sledeći ugrađeni upoređivači su dostupni na jeziku formule:

-   `Comparer.Ordinal`: Koristi se za izvršavanje potpunog rednog poređenja.
-   `Comparer.OrdinalIgnoreCase`: Koristi se za izvršavanje potpunog rednog poređenja koje ne razlikuje mala i velika slova.
-   `Comparer.FromCulture`: Koristi se za izvršavanje poređenja koja su svesna kulturološkog konteksta.


## Examples

### Example #1
Provera da li tekst „Hello, World“ počinje tekstom „hello“.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Provera da li tekst „Hello, World“ počinje tekstom „Hello“.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Zanemarite mala i velika slova, proverite da li tekst "Zdravo, svet" počinje tekstom "zdravo".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
