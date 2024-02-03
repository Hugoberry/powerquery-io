---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Palauttaa arvon ensimmäisen sijainnin (-1, jos sitä ei löydy).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

Palauttaa tekstiarvon <code>substring</code> määritetyn esiintymän sijainnin, joka löytyy kohdasta <code>text</code>.    Valinnaista parametriä <code>occurrence</code>, voidaan käyttää määrittämään palautettava esiintymäsijainti (oletusarvoisesti ensimmäinen esiintymä).    Palauttaa arvon -1, jos arvoa <code>substring</code> ei löydy.      <div>        <code>comparer</code> on <code>vertailutoiminto</code>, jota käytetään vertailun hallintaan. Vertailutoiminnoilla voidaan tarjota kirjainkoon ohittavia tai maa- ja aluekohtaiset asetukset huomioivia vertailuja.      </div>      <div>        Seuraavat sisäiset vertailutoiminnot on saatavilla kaavan kielellä:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Käytetään tarkan järjestyslukuvertailun suorittamiseen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Käytetään tarkan kirjainkoon ohittavan järjestyslukuvertailun suorittamiseen</li>        <li> <code>Comparer.FromCulture</code>: Käytetään maa-asetukset huomioivan vertailun suorittamiseen</li>      </ul>


## Examples

### Example #1 
Hae tekstin &#34;World&#34; ensimmäisen esiintymän sijainti tekstissä &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Hae tekstin &#34;World&#34; viimeisen esiintymän sijainti tekstissä &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
