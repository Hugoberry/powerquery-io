---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Vrne funkcijo primerjalnika, ki za primerjavo vrednosti uporablja pravila vrstilnih števnikov.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Vrne funkcijo primerjalnika, ki ne razlikuje med velikimi in malimi črkami, in ki uporablja pravila vrstilnega števnika za primerjavo podanih vrednosti <code>x</code> in <code>y</code>.<br />      <br />      Funkcija primerjalnika sprejme dva argumenta in vrne –1, 0 ali 1 glede na to, ali je prva vrednost manjša od, enaka,  ali večje od druge.    


## Examples

### Example #1 
S pravili vrstilnih števnikov primerjajte, ali sta izraza &#34;encyclopædia&#34; in &#34;encyclopaedia&#34; enaka. Gre za ekvivalenta, ki uporabljata &lt;code&gt;Comparer.FromCulture(&#34;en-us&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
