---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

Vraća položaj navedenog pojavljivanja tekstualne vrednosti <code>substring</code> pronađene u <code>text</code>.    Moguće je koristiti opcionalni parametar <code>occurrence</code> kako bi se navelo koji položaj pojavljivanja treba vratiti (podrazumevano je to prvo pojavljivanje).    Vraća -1 ako se ne pronađe <code>substring</code>.      <div>         <code>comparer</code> predstavlja <code>Comparer</code> koji se koristi za kontrolu poređenja. Upoređivači mogu da se koriste za obezbeđivanje poređenja koja ne razlikuju mala i velika slova ili onih koja su usklađena sa kulturom i lokalnim standardom.      </div>      <div>        Sledeći ugrađeni upoređivači su dostupni na jeziku formule:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Koristi se za izvršavanje tačnog poređenja zasnovanog na redosledu znakova</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Koristi se za izvršavanje tačnog poređenja zasnovanog na redosledu znakova koje ne razlikuje mala i velika slova</li>        <li> <code>Comparer.FromCulture</code>: Koristi se za izvršavanje poređenja usklađenog sa kulturom</li>      </ul>


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
Preuzimanje položaja poslednjeg pojavljivanja niske „World“ u tekstu „Hello, World! Hello, World!“.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
