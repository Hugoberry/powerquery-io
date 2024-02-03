---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Vraća funkciju upoređivača koja koristi pravila rednih brojeva za poređenje vrednosti.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Vraća funkciju poređenja koja koristi redna pravila za poređenje navedenih vrednosti <code>x</code> i <code>y</code>.<br /> <br /> Funkcija poređenja prihvata dva argumenta i vraća -1, 0 ili 1 na osnovu toga da li je prva vrednost manja od, jednaka ili veća od druge.    


## Examples

### Example #1 
Pomoću pravila rednih brojeva uporedite da li su stavke „encyclopædia“ i „encyclopaedia“ iste. Obratite pažnju na to da su ove stavke iste ako se koristi funkcija &lt;code&gt;Comparer.FromCulture(&#34;sr-Latn-RS&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
