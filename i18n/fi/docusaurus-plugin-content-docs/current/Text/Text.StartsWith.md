---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Ilmaisee, alkaako teksti määritetyllä arvolla.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Palauttaa tosi-arvon, jos tekstiarvo <code>text</code> alkaa tekstiarvolla <code>substring</code>.      <ul>       <li><code>text</code>: <i></i> A <code>tekstiarvo</code>, josta haetaan</li>        <li><code>substring</code>: <i></i> A <code>tekstiarvo</code>, jota haetaan kohteesta <code>substring</code></li>        <li><code>comparer</code>: <i>[Valinnainen]</i> <code>Vertailutoimintoa</code> käytetään vertailun hallintaan. Esimerkiksi, <code>Comparer.OrdinalIgnoreCase</code>-toimintoa voidaan käyttää kirjainkoon huomioon ottavien hakujen tekemiseen</li>      </ul>      <div>        <code>comparer</code> on <code>Vertailutoiminto</code>, jota käytetään vertailun hallintaan. Vertailutoiminnoilla voidaan tarjota kirjainkokoon ohittavia tai maa- ja aluekohtaiset asetukset huomioivia vertailuja.      </div>      <div>        Seuraavat sisäiset vertailutoiminnot ovat saatavilla kaavan kielellä:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Käytetään tarkan järjestyslukuvertailun suorittamiseen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Käytetään tarkan kirjainkoon ohittavan järjestyslukuvertailun suorittamiseen</li>        <li> <code>Comparer.FromCulture</code>: Käytetään maa-asetukset huomioivan vertailun suorittamiseen</li>      </ul>


## Examples

### Example #1 
Tarkista, alkaako teksti &#34;Hello, World&#34; tekstillä &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Tarkista, alkaako teksti &#34;Hello, World&#34; tekstillä &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
