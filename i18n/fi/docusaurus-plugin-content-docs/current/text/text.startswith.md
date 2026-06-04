---
title: Text.StartsWith
---

# Text.StartsWith


Ilmaisee, alkaako teksti määritetyllä arvolla.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Palauttaa arvon tosi, jos tekstiarvo `text` alkaa tekstiarvolla `substring`.

-   `text`: Haettava `text`\-arvo.
-   `substring`: `text` -arvo, joka on alimerkkijono, jota haetaan kohteesta `text`.
-   `comparer`: *(Valinnainen)* Vertailun hallintaan käytettävä `Comparer`. Esimerkiksi `Comparer.OrdinalIgnoreCase`\-funktiota voidaan käyttää hakuun, jossa kirjainkoko ei ole merkitsevä.

`comparer` on `Comparer`, jota käytetään vertailun hallintaan. Vertailufunktioilla voidaan suorittaa vertailuja, joissa kirjainkoko ei ole merkitsevä tai joka käyttää maa-asetusta.

Seuraavat sisäiset vertailufunktiot ovat käytettävissä kaavakielellä:

-   `Comparer.Ordinal`: Käytetään tarkan järjestyslukuvertailun suorittamiseen.
-   `Comparer.OrdinalIgnoreCase`: Käytetään suorittamaan tarkka järjestyslukuvertailu, jossa kirjainkoko ei ole merkitsevä.
-   `Comparer.FromCulture`: Käytetään maa-asetusta käyttävän vertailun suorittamiseen.


## Examples

### Example #1
Tarkista, alkaako teksti "Hello, World" tekstillä "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Tarkista, alkaako teksti "Hello, World" tekstillä "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Ohita kirjainkoko ja tarkista, alkaako teksti "Hello, World" tekstillä "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
