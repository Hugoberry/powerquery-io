---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Vrne funkcijo primerjalnika, ki ne razlikuje med velikimi ter malimi črkami in ki za primerjavo vrednosti uporablja pravila vrstilnih števnikov.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Vrne funkcijo primerjalnika, ki ne razlikuje med velikimi in malimi črkami, in ki uporablja pravila vrstilnega števnika za primerjavo podanih vrednosti <code>x</code> in <code>y</code>.<br />        <br />        Funkcija primerjalnika sprejme dva argumenta in vrne –1, 0 ali 1 glede na to, ali je prva vrednost manjša od, enaka,  ali večje od druge.    


## Examples

### Example #1 
S pravili vrstilnih števnikov, ki ne razlikujejo med velikimi in malimi črkami, primerjajte &#34;Abc&#34; z &#34;abc&#34;. Upoštevajte, da je &#34;Abc&#34; manjše kot &#34;abc&#34;, če uporabljate primerjalnik &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
