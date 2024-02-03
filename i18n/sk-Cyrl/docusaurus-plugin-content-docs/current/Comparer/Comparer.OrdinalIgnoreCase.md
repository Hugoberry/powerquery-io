---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Vráti funkciu porovnávača bez rozlíšenia malých a veľkých písmen, ktorá používa pravidlá poradia na porovnanie hodnôt.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Vráti funkciu porovnávača bez rozlíšenia malých a veľkých písmen, ktorá používa pravidlá poradia na porovnanie zadaných hodnôt <code>x</code> a <code>y</code>.<br />        <br />        Funkcia porovnávača akceptuje dva argumenty a vráti hodnotu -1, 0 alebo 1 na základe toho, či je prvá hodnota menšia, rovná alebo väčšia ako druhá hodnota.    


## Examples

### Example #1 
S použitím pravidiel poradia bez rozlíšenia malých a veľkých písmen porovnajte hodnoty &#34;Abc&#34; a &#34;abc&#34;. Všimnite si, že hodnota &#34;Abc&#34; je menej než &#34;abc&#34; s použitím porovnávača &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
