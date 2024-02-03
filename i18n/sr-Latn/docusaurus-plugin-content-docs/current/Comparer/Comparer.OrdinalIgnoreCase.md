---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Vraća funkciju upoređivača koja ne razlikuje mala i velika slova i koja koristi pravila zasnovana na redosledu znakova da bi uporedila vrednosti.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Vraća funkciju poređenja koja ne razlikuje mala i velika slova, koja koristi redna pravila za poređenje navedenih vrednosti <code>x</code> i <code>y</code>.<br /> <br /> Funkcija upoređivanja prihvata dva argumenta i vraća -1, 0 ili 1 na osnovu toga da li je prva vrednost manja od, jednaka, ili veće od druge.    


## Examples

### Example #1 
Pomoću pravila zasnovanih na redosledu znakova, koja ne razlikuju mala i velika slova, uporedite „Abc“ sa „abc“. Imajte u vidu da je „Abc“ manje od „abc“ pomoću upoređivača &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
