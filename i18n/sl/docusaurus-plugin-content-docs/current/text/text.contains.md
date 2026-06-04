---
title: Text.Contains
---

# Text.Contains


Vrne podatek, ali besedilo vsebuje podniz.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Zazna, ali `text` vsebuje vrednost `substring`. Vrne"true", če je vrednost najdena. Ta funkcija ne podpira nadomestnih znakov ali regularnih izrazov.  
  
Izbirni argument `comparer` lahko uporabite za določanje primerjav, ki ne razlikujejo med velikimi in malimi črkami, ali primerjav, ki upoštevajo kulturo in območne nastavitve. Ti vgrajeni primerjalniki so na voljo v jeziku formule:

-   `Comparer.Ordinal`: Uporablja se za izvajanje vrstilne primerjave, ki razlikuje med velikimi in malimi črkami
-   `Comparer.OrdinalIgnoreCase`: Uporablja se za izvajanje vrstilne primerjave, ki ne razlikuje med velikimi in malimi črkami
-   `Comparer.FromCulture`: Uporablja se za izvajanje primerjave, ki upošteva kulturo

Če je prvi argument ničeln, ta funkcija vrne ničelno vrednost.  
  
Vsi znaki so obravnavani dobesedno. Na primer"DR","DR","DR"in"DR"se ne upoštevajo kot enaki eden drugemu.


## Examples

### Example #1
Ugotovite, ali besedilo"Hello World"vsebuje"Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Ugotovite, ali besedilo"Hello World"vsebuje"hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Ugotovite, ali besedilo"Pozdravljen, svet"vsebuje"pozdravljen", pri tem pa uporabite primerjalnik, ki ne razlikuje med velikimi in malimi črkami.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Poiščite vrstice v tabeli, ki v kodi računa vsebujejo"A-"ali"7".
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
