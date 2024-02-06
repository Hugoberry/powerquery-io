---
title: List.Generate
---

# List.Generate


Genererar en lista med värden.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Remarks

Genererar en lista med värden med hjälp av de angivna funktionerna. Funktionen <code>initial</code> genererar ett startförslagsvärde som sedan testas mot <code>condition</code>. Om kandidatvärdet godkänns returneras det som en del av den resulterande listan och nästa kandidatvärde genereras genom att det nyligen godkända värdet skickas till <code>next</code>. När ett kandidatvärde inte matchar <code>condition</code>stoppas listgenereringsprocessen. En valfri parameter, <code>selector</code>, kan också tillhandahållas för att transformera objekten i den resulterande listan.


## Examples

### Example #1 
Skapa en lista genom att börja vid tio, minska upprepade gånger med en och se till att varje objekt är större än noll.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Generera en lista över poster som innehåller x och y, där x är värdet och y en lista. x ska vara mindre än 10 och representera antalet objekt i listan y. Returnera endast x-värdena när listan har genererats.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
