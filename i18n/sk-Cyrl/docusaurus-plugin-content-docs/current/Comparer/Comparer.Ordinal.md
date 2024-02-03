---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Vráti funkciu porovnávača, ktorá používa pravidlá poradia na porovnanie hodnôt.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Vráti funkciu porovnávača, ktorá používa pravidlá poradia na porovnanie zadaných hodnôt <code>x</code> a <code>y</code>.<br />      <br />      Funkcia porovnávača akceptuje dva argumenty a vráti hodnotu -1, 0 alebo 1 na základe toho, či je prvá hodnota menšia, rovná alebo väčšia ako druhá hodnota.    


## Examples

### Example #1 
S použitím pravidiel poradia porovnaj, či sú hodnoty „encyclopædia“ a „encyclopaedia“ ekvivalentné. Všimnite si, že tieto sú ekvivalentné s použitím porovnávača &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
