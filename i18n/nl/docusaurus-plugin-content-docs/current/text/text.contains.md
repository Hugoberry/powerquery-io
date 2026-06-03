---
title: Text.Contains
---

# Text.Contains


Retourneert of de tekst al dan niet de subtekenreeks bevat.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Detecteert of `text` de waarde `substring` bevat. Retourneert waar als de waarde wordt gevonden. Deze functie biedt geen ondersteuning voor jokertekens of reguliere expressies.  
  
Het optionele argument `comparer` kan worden gebruikt om hoofdlettergevoelige of cultuur- en landinstellingsbewuste vergelijkingen op te geven. De volgende ingebouwde vergelijkingen zijn beschikbaar in de formuletaal:

-   `Comparer.Ordinal`: wordt gebruikt om een hoofdlettergevoelige rangtelwoordvergelijking uit te voeren
-   `Comparer.OrdinalIgnoreCase`: wordt gebruikt om een niet hoofdlettergevoelige rangtelwoordvergelijking uit te voeren
-   `Comparer.FromCulture`: wordt gebruikt om een cultuurbewuste vergelijking uit te voeren

Als het eerste argument null is, retourneert deze functie null.  
  
Alle tekens worden letterlijk behandeld. 'DR', ' DR', 'DR ' en ' DR ' worden bijvoorbeeld niet als gelijk aan elkaar beschouwd.


## Examples

### Example #1
Uitzoeken of de tekst "Hallo wereld" het woord "Hallo" bevat.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Uitzoeken of de tekst "Hallo wereld" het woord "hallo" bevat.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Zoeken of de tekst "Hallo wereld" 'hallo' bevat, met behulp van een niet-hoofdlettergevoelige vergelijkingsfunctie.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Zoek de rijen in een tabel die of 'A-' of '7' in de accountcode bevatten.
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
