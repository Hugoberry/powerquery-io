---
title: Text.Contains
---

# Text.Contains


Returnerar huruvida texten innehåller delsträngen.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Identifierar huruvida `text` innehåller värdet `substring`. Returnerar sant om värdet hittas. Den här funktionen stöder inte jokertecken eller reguljära uttryck.  
  
Det valfria argumentet `comparer` kan användas för att ange skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser. Följande inbyggda jämförelseverktyg är tillgängliga på formelspråket:

-   `Comparer.Ordinal`: Används för att utföra en skiftlägeskänslig jämförelse av ordningstal
-   `Comparer.OrdinalIgnoreCase`: Används för att utföra en skiftlägesokänslig jämförelse av ordningstal
-   `Comparer.FromCulture`: Används för att utföra en kulturmedveten jämförelse

Om det första argumentet är null returnerar den här funktionen null.  
  
Alla tecken behandlas bokstavligt. Till exempel behandlas inte ”DR”, ” DR”, ”DR ” och ” DR ” som lika med varandra.


## Examples

### Example #1
Kontrollera om texten "Hello World" innehåller "Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Kontrollera om texten "Hello World" innehåller "hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Ta reda på om texten "Hello World" innehåller "hello" med hjälp av en skiftlägesokänslig jämförelse.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Hitta raderna i en tabell som innehåller antingen ”A-” eller ”7” i kontokoden.
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
