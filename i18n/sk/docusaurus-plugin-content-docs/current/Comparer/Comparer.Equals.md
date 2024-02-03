---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Vráti logickú hodnotu na základe kontroly rovnosti dvoch daných hodnôt.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Vráti <code>logickú hodnotu</code> na základe kontroly rovnosti dvoch daných hodnôt <code>x</code> a <code>y</code> pomocou uvedenej <code>comparer</code>.      <div>        <code>comparer</code> je <code>porovnávač</code>, ktorý sa používa na riadenie porovnania.        Funkcia porovnávača je funkcia, ktorá akceptuje dva argumenty a vráti hodnotu -1, 0 alebo 1 na základe toho, či je prvá hodnota menšia, rovná alebo väčšia ako druhá hodnota.        Porovnávače možno použiť na poskytovanie porovnaní bez rozlišovania malých a veľkých písmen alebo s ohľadom na jazykovú verziu a miestne nastavenie.      </div>      <div>        V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Používa sa na presné poradové porovnanie</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Používa sa na presné poradové porovnanie bez rozlišovania malých a veľkých písmen</li>        <li> <code>Comparer.FromCulture</code>: Používa sa na vykonanie porovnania s ohľadom na jazykovú verziu</li>      </ul>


## Examples

### Example #1 
Porovnaj &#34;1&#34; a &#34;A&#34; s použitím miestneho nastavenia &#34;en-US&#34; a zisti, či sa hodnoty rovnajú.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
