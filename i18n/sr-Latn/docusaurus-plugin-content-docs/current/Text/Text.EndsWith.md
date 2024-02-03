---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Pokazuje da li se tekst završava navedenom vrednošću.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Pokazuje da li se dati tekst, <code>text</code>, završava navedenom vrednošću, <code>substring</code>. Indikacija razlikuje mala i velika slova.      <div>        <code>comparer</code>predstavlja <code>Comparer</code> koji se koristi za kontrolisanje poređenja. Upoređivači mogu da se koriste za obezbeđivanje poređenja koja ne razlikuju mala i velika slova ili nisu usklađena sa kulturom odnosno lokalnim standardom.      </div>      <div>        Sledeći ugrađeni upoređivači dostupni su na jeziku formule:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Koristi se za izvršavanje tačnog poređenja zasnovanog na redosledu znakova</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Koristi se za izvršavanje tačnog poređenja zasnovanog na redosledu znakova, koje ne razlikuje mala i velika slova</li>        <li> <code>Comparer.FromCulture</code>: Koristi se za izvršavanje poređenja usklađenog sa kulturom</li>      </ul>


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
