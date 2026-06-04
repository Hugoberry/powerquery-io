---
title: Text.Contains
---

# Text.Contains


Palauttaa tiedon siitä, sisältääkö teksti alimerkkijonon.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Tunnistaa, sisältääkö `text` arvon `substring`. Palauttaa tosiarvon, jos arvo löytyy. Tämä funktio ei tue yleismerkkejä tai säännönmukaisia lausekkeita.  
  
Valinnaisen argumentin `comparer` avulla voidaan määrittää kirjainkoolla ei ole merkitystä tai maa-asetusta ja aluekohtaisia vertailuja. Seuraavat sisäiset vertailutoiminnot ovat käytettävissä kaavakielellä:

-   `Comparer.Ordinal`: Käytetään kirjainkoon huomioon ottavan järjestyslukuvertailun suorittamiseen
-   `Comparer.OrdinalIgnoreCase`: Käytetään kirjainkoolla merkitsemättömän järjestyslukuvertailun suorittamiseen
-   `Comparer.FromCulture`: Käytetään maa-asetusta käyttävän vertailun suorittamiseen

Jos ensimmäinen argumentti on tyhjäarvo, tämä funktio palauttaa tyhjäarvon.  
  
Kaikkia merkkejä käsitellään kirjaimellisesti. Esimerkiksi DR, DR, DR, ja DR ei katsota yhtä suuriksi kuin toisiaan.


## Examples

### Example #1
Selvitä, sisältääkö teksti "Hello World" tekstin "Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Selvitä, sisältääkö teksti "Hello World" tekstin "hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Selvitä, sisältääkö teksti "Hei maailma" sanan "hei", käyttämällä kirjainkokoa merkitsevää vertailutoimintoa.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Etsi taulukon rivit, jotka sisältävät joko A-kirjaimen tai 7-merkin tilikoodissa.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
