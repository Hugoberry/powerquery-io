---
title: Text.Contains
---

# Text.Contains


## Description

Palauttaa tiedon siitä, sisältääkö teksti alimerkkijonon.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Tunnistaa, sisältääkö <code>text</code> arvon <code>substring</code>. Palauttaa tosi-arvon, jos arvo löytyy. Tämä funktio ei tue yleismerkkejä tai säännönmukaisia lausekkeita.      <br />     <br />      Valinnaista argumenttia <code>comparer</code> voidaan käyttää määrittämään kirjainkoko tai maa-asetus ja aluekohtaiset vertailut.      Kaavan kielellä on käytettävissä seuraavat sisäiset vertailutoiminnot:      <ul>       <li><code>Comparer.Ordinal</code>: Käytetään kirjainkoon huomioivan järjestyslukuvertailun suorittamiseen</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Käytetään kirjainkoosta riippumattoman järjestyslukuvertailun suorittamiseen</li>        <li> <code>Comparer.FromCulture</code>: Käytetään maa-asetukset huomioivan vertailun suorittamiseen</li>      </ul>


## Examples

### Example #1 
Selvitä, sisältääkö teksti &#34;Hello World&#34; tekstin &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, sisältääkö teksti &#34;Hello World&#34; tekstin &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Selvitä, sisältääkö teksti &#34;Hei maailma&#34; sanan &#34;hei&#34;, käyttämällä kirjainkokoa merkitsevää vertailutoimintoa.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
