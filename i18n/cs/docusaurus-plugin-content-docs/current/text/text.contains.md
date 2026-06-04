---
title: Text.Contains
---

# Text.Contains


Vrátí, zda text obsahuje dílčí řetězec.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Zjistí, jestli `text` obsahuje hodnotu `substring`. Pokud je nalezena hodnota, vrátí hodnotu true. Tato funkce nepodporuje zástupné znaky ani regulární výrazy.  
  
Nepovinný argument `comparer` lze použít k určení porovnání bez rozlišování malých a velkých písmen nebo s rozlišováním jazykové verze a národního prostředí. V jazyce vzorců jsou k dispozici následující integrované porovnávače:

 -   `Comparer.Ordinal`: Používá se k provádění řadového porovnání s rozlišováním malých a velkých písmen.
-   `Comparer.OrdinalIgnoreCase`: Používá se k provádění řadového porovnání bez rozlišování malých a velkých písmen.
-   `Comparer.FromCulture`: Používá se k provádění porovnání s rozlišením jazykové verze.

Pokud je první argument null, funkce vrátí hodnotu null.  
  
Všechny znaky jsou zpracovávány doslovně. Například zadání "DR", " DR", "DR " a " DR " se nepovažují za rovnocenná.


## Examples

### Example #1
Zjistí, zda text „Hello, World“ obsahuje text „Hello“.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Zjistí, zda text „Hello, World“ obsahuje text „hello“.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Zjistěte, jestli text „Hello World“ obsahuje „hello“, pomocí porovnávače, který nerozlišuje velká a malá písmena.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Najděte v tabulce řádky, které obsahují v kódu účtu text "A-" nebo "7".
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
