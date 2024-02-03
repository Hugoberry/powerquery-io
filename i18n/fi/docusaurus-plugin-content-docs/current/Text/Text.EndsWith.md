---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Ilmaisee, päättyykö teksti määritettyyn arvoon.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Ilmaisee, päättyykö annettu teksti <code>text</code> määritettyyn arvoon <code>substring</code>. Ilmaisin on kirjainkoon huomioiva.      <div>        <code>comparer</code> on <code> Vertailutoiminto</code>, jota käytetään vertailun hallintaan. Vertailutoiminnoilla voidaan tarjota kirjainkoon ohittavia tai maa- ja aluekohtaiset asetukset huomioivia vertailuja.      </div>      <div>        Seuraavat sisäiset vertailutoiminnot ovat saatavilla kaavan kielellä:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Käytetään tarkan järjestyslukuvertailun suorittamiseen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Käytetään tarkan kirjainkoon ohittavan järjestyslukuvertailun suorittamiseen</li>        <li> <code>Comparer.FromCulture</code>: Käytetään maa-asetukset huomioivan vertailun suorittamiseen</li>      </ul>


## Examples

### Example #1 
Tarkista, päättyykö teksti &#34;Hello, World&#34; tekstiin &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Tarkista, päättyykö teksti &#34;Hello, World&#34; tekstiin &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
