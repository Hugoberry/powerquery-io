---
title: Text.Contains
---

# Text.Contains


Visszaadja, hogy a szöveg tartalmazza-e a sztringrészletet.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Annak észlelése, hogy `text` tartalmazza-e a(z) `substring` értéket. Igaz értéket ad vissza, ha az érték megtalálható. Ez a függvény nem támogatja a helyettesítő karaktereket és a reguláris kifejezéseket.  
  
A(z) `comparer` nem kötelező argumentum a kis- és nagybetűk megkülönböztetése, a kulturális környezet és a területi beállítások figyelembe ható összehasonlításának megadására használható. A képletnyelvben a következő beépített összehasonlítók érhetők el:

-   `Comparer.Ordinal`: Kis- és nagybetűket megkülönböztető sorszámok összehasonlítására használható
-   `Comparer.OrdinalIgnoreCase`: A kis- és nagybetűk megkülönböztetése nélküli sorszám-összehasonlításra használható
-   `Comparer.FromCulture`: Kultúratudatos összehasonlításra használható

Ha az első argumentum értéke null, a függvény null értéket ad vissza.  
  
Az összes karaktert szó szerint kezeli a rendszer. A „DR”, „DR”, „DR” és „DR” például nem tekinthető egymással egyenlőnek.


## Examples

### Example #1
Megállapítja, hogy a „Hello World” szöveg tartalmazza-e a „Hello” szövegrészt.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Megállapítja, hogy a „Hello World” szöveg tartalmazza-e a „hello” szövegrészt.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Annak megkeresése, hogy a szöveg „Hello World” tartalmaz-e „hello” kifejezést, a kis- és nagybetűket nem megkülönböztető összehasonlító használatával.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Keresse meg azokat a sorokat egy táblában, amelyek a fiókkódban az „A-” vagy a „7” értéket tartalmazzák.
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
