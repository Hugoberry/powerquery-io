---
title: Text.Contains
---

# Text.Contains


Tiek atgriezts, vai tekstā ir ietverta apakšvirkne.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Nosaka, vai `text` ir ietverta vērtība `substring`. Ja vērtība tiek atrasta, tiek atgriezta vērtība True. Šī funkcija neatbalsta aizstājējzīmes vai regulāras izteiksmes.  
  
Neobligāto argumentu `comparer` var izmantot, lai norādītu reģistrnejutīgus vai uz kultūru un lokalizāciju balstītus salīdzinājumus. Formulas valodā ir pieejami šādi iebūvētie salīdzinātāji:

-   `Comparer.Ordinal`: izmanto, lai veiktu reģistrjutīgu kārtas skaitļu salīdzinājumu
-   `Comparer.OrdinalIgnoreCase`: izmanto, lai veiktu reģistrnejutīgu kārtas skaitļu salīdzinājumu
-   `Comparer.FromCulture`: izmanto, lai veiktu uz kultūru balstītu salīdzinājumu

Ja pirmais arguments ir Null, šī funkcija atgriež vērtību Null.  
  
Visas rakstzīmes tiek apstrādātas burtiski. Piemēram, elementi “DR”, “ DR”, “DR ” un “ DR ” netiek uzskatīti par vienādiem.


## Examples

### Example #1
Uzziniet, vai tekstā Hello World ir ietverts Hello.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Uzziniet, vai tekstā Hello World ir ietverts hello.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Uzziniet, vai tekstā “Sveika, pasaule” ir ietverts vārds “sveiki”, izmantojot salīdzināšanas līdzekli, kas nav reģistrjutīgs.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Atrodiet tabulas rindas, kas konta kodā satur “A-” vai “7”.
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
