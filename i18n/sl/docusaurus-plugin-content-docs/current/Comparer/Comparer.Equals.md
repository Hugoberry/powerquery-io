---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Vrne logično vrednost na osnovi preverjanja enakosti dveh danih vrednosti.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Vrne vrednost <code>logical</code> na podlagi preverjanja enakosti dveh danih vrednosti, <code>x</code> in <code>y</code>, z uporabo podanega<code>comparer</code>.      <div>        <code>comparer</code> je <code>Comparer</code>, ki se uporablja za nadzor primerjave.        Primerjalnik je funkcija, ki sprejme dva argumenta in vrne –1, 0 ali 1 glede na to, ali je prva vrednost manjša od, enaka, ali večje od druge.        S primerjalniki je mogoče določiti primerjave, ki ne razlikujejo med velikimi in malimi črkami ali kulturo in območnimi nastavitvami.      </div>      <div>        Ti vgrajeni primerjalniki so na voljo v jeziku formule:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Used to perform an exact ordinal comparison</li>        <li><code>Comparer.OrdinalIgnoreCase</code>:  uporablja se za natančno primerjavo vrstilnih števnikov, ki ne razlikuje med velikimi in malimi črkami</li>        <li> <code>Comparer.FromCulture</code>: uporablja se za primerjavo, ki upošteva kulturo</li>      </ul>


## Examples

### Example #1 
Primerjajte &#34;1&#34; in &#34;A&#34; s področnimi nastavitvami &#34;en-US&#34; in določite, ali so vrednosti enake.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
