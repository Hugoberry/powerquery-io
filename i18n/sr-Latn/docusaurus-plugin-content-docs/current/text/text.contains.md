---
title: Text.Contains
---

# Text.Contains


Pokazuje da li tekst sadrži podnisku.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Otkriva da li `text` sadrži vrednost `substring`. Vraća vrednost „True“ ako se pronađe vrednost. Ova funkcija ne podržava džoker znakove ili regularne izraze.  
  
Opcionalni argument `comparer` može da se koristi za navođenje poređenja koja ne razlikuju mala i velika slova ili kulture i standarda. Sledeći ugrađeni komparatori su dostupni na jeziku formule:

-   `Comparer.Ordinal`: Koristi se za izvršavanje rednog poređenja koje razlikuje mala i velika slova
-   `Comparer.OrdinalIgnoreCase`: Koristi se za izvršavanje rednog poređenja koje razlikuje mala i velika slova
-   `Comparer.FromCulture`: Koristi se za izvršavanje poređenja svesne kulture

Ako je prvi argument bez vrednosti, ova funkcija vraća rezultat bez vrednosti.  
  
Svi znakovi se tretiraju doslovno. Na primer, „DR“, „DR“, „DR“ i „DR“ se ne smatraju jednakim jedni drugima.


## Examples

### Example #1
Otkrivanje da li tekst „Hello World“ sadrži „Hello“.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Otkrivanje da li tekst „Hello World“ sadrži „hello“.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Pronađite da li tekst „Zdravo, svete“ sadrži „zdravo“, koristeći upoređivač koji ne razlikuje mala i velika slova.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Pronađi redove u tabeli koji sadrže „A-“ ili „7“ u kôdu naloga.
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
