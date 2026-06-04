---
title: Text.Contains
---

# Text.Contains


Vráti informácie o tom, či text obsahuje podreťazec.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Zisťuje, či `text` obsahuje hodnotu `substring`. Ak sa nájde hodnota, vráti hodnotu true. Táto funkcia nepodporuje zástupné znaky ani regulárne výrazy.  
  
Voliteľný argument `comparer` možno použiť na určenie rozlišovania malých a veľkých písmen alebo s ohľadom na jazykovú verziu a miestne nastavenie. V jazyku vzorcov sú k dispozícii tieto vstavané porovnávače:

-   `Comparer.Ordinal`: Používa sa na vykonanie poradového porovnania s rozlišovaním malých a veľkých písmen
-   `Comparer.OrdinalIgnoreCase`: Používa sa na vykonanie poradového porovnania bez rozlišovania malých a veľkých písmen
-   `Comparer.FromCulture`: Používa sa na vykonanie porovnania s ohľadom na kultúru

Ak je prvý argument null, táto funkcia vráti null.  
  
Všetky znaky sú spracované doslovne. Napríklad „DR“, „ DR“, „DR „ a „ DR “ sa nepovažujú za rovnaké.


## Examples

### Example #1
Zistite, či text "Hello World" obsahuje text "Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Zistite, či text "Hello World" obsahuje text "hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Zistite, či text „Hello World“ obsahuje „hello“ pomocou porovnávača, ktorý nerozlišuje malé a veľké písmená.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Nájdite v kóde konta riadky v tabuľke, ktoré obsahujú hodnoty „A-“ alebo „7“.
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
