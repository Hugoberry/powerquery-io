---
title: Text.Contains
---

# Text.Contains


## Description

Pokazuje da li tekst sadrži podnisku.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Otkriva da li <code>text</code> sadrži vrednost <code>substring</code>. Vraća vrednost „true“ ako se pronađe vrednost. Ova funkcija ne podržava džoker znakove ili regularne izraze.      <br />      <br />      Opcionalni argument <code>comparer</code> može da se koristi za navođenje poređenja koja ne razlikuju mala i velika slova ili poređenja koja se razlikuju od kulture i lokalnih standarda.      Sledeći ugrađeni upoređivači su dostupni na jeziku formule:      <ul>        <li><code>Comparer.Ordinal</code>: Koristi se za izvršavanje rednih poređenja koja razlikuju velika i mala slova</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Koristi se za izvršavanje rednih poređenja koja razlikuju velika i mala slova</li>        <li> <code>Comparer.FromCulture</code>: Koristi se za izvršavanje poređenja usklađeno sa kulturom</li>      </ul>


## Examples

### Example #1 
Otkrivanje da li tekst „Hello World“ sadrži „Hello“.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Otkrivanje da li tekst „Hello World“ sadrži „hello“.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Pronađite da li tekst „Zdravo, svete“ sadrži „zdravo“, koristeći upoređivač koji ne razlikuje mala i velika slova.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
