---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Pokazuje da li tekst počinje navedenom vrednošću.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Vraća „true“ ako tekstualna vrednost <code>text</code> počinje tekstualnom vrednošću <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> <code>text</code> vrednost koju treba tražiti</li>        <li><code>substring</code>: <i></i> <code>text</code> vrednost koja predstavlja podnisku koju treba tražiti u <code>substring</code></li>        <li><code>comparer</code>: <i>[Optional]</i> <code>Comparer.OrdinalIgnoreCase</code> koji se koristi za kontrolu poređenja. Na primer, <code>Comparer.IgnoreCase</code> se može koristiti za obavljanje pretraga kod kojih se ne razlikuju mala i velika slova</li>      </ul>      <div>         <code>comparer</code> predstavlja <code>Comparer</code> koji se koristi za kontrolu poređenja. Upoređivači se mogu koristiti za poređenja kod kojih se ne razlikuju mala i velika slova ili poređenja usklađena sa kulturom i lokalnim standardom.      </div>      <div>        Sledeći ugrađeni upoređivači dostupni su na jeziku formule:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Koristi se za izvršavanje tačnog poređenja zasnovanog na redosledu znakova</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Koristi se za izvršavanje tačnog poređenja zasnovanih na redosledu znakova, koje ne razlikuje mala i velika slova</li>        <li> <code>Comparer.FromCulture</code>: Koristi se za izvršavanje poređenja usklađenog sa kulturom</li>      </ul>


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




## Category
Text.Membership
