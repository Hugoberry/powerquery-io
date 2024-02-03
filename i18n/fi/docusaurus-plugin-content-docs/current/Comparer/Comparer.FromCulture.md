---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Palauttaa vertailufunktion määritetyn maa-asetuksen ja kirjainkokoherkkyyden perusteella.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Palauttaa vertailufunktion, joka käyttää <code>culture</code> ja <code>ignoreCase</code> määrittämää kirjainkoon luottamuksellisuutta vertailujen tekemiseen.<br />      <br />      Vertailufunktio hyväksyy kaksi argumenttia ja palauttaa arvon -1, 0 tai 1 sen perusteella, onko ensimmäinen arvo pienempi, yhtä suuri tai suurempi kuin toinen.<br />      <br />      <code>ignoreCase</code>:n oletusarvo on epätosi. <code>culture</code> on oltava yksi .NET Frameworkin tukemista aluekohtaisista asemista (esimerkiksi en-US).    


## Examples

### Example #1 
Vertaa kohteita a ja A käyttäen kieliasetusta en-US ja selvitä, ovatko arvot yhtäläiset.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Vertaa kohteita a ja A käyttäen kieliasetusta en-US kirjainkoko ohittaen ja selvitä, ovatko arvot yhtäläiset.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
