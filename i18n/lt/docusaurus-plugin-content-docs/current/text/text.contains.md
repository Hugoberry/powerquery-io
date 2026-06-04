---
title: Text.Contains
---

# Text.Contains


Nurodoma, ar tekste yra dalinė eilutė.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Aptinka, ar `text` yra reikšmė `substring`. Jei randama reikšmė, pateikiama reikšmė „true“. Ši funkcija nepalaiko pakaitos simbolių arba paprastųjų išraiškų.  
  
Pasirinktinis argumentas `comparer` gali būti naudojamas norint pateikti palyginimus, kuriuose neskiriamos didžiosios ir mažosios raidės, arba atsižvelgiama į kultūrą ir lokalę. Formulių kalba pateiktos toliau nurodytos įtaisytosios lyginimo funkcijos:

-   `Comparer.Ordinal`: naudojama atliekant palyginimą eilės tvarka, kai skiriamos didžiosios ir mažosios raidės
-   `Comparer.OrdinalIgnoreCase`: naudojama atliekant palyginimą eilės tvarka, kai neskiriamos didžiosios ir mažosios raidės
-   `Comparer.FromCulture`: naudojama palyginimui atsižvelgiant į kultūrą atlikti

Jei pirmasis argumentas yra „null“, ši funkcija pateikia „null“.  
  
Visi simboliai yra apdorojami tiesiogiai. Pvz., „avarinis atkūrimas“, „avarinis atkūrimas“, „avarinis atkūrimas“ ir „avarinis atkūrimas“ nėra laikomi lygiais vieni kitiems.


## Examples

### Example #1
Sužinokite, ar tekste „Hello World“ yra tekstas „Hello“.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Sužinokite, ar tekste „Hello World“ yra tekstas „hello“.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Naudodami lyginimo priemonę, neskiriančią didžiųjų ir mažųjų raidžių, sužinokite, ar tekste „Hello World“ yra žodis „hello“.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Lentelėje raskite eilutes, kurių paskyros kode yra „A-“ arba „7“.
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
