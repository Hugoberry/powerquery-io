---
title: Value.FromText
---

# Value.FromText


Skapar ett starkt typifierat värde från en textrepresentation.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Avkodar ett värde från en textrepresentation och tolkar det som ett värde med lämplig typ.

-   `text`: Texten som ska tolkas.
-   `culture`: (Valfritt) En specifik kultur som används för att tolka texten (t.ex. "en-US").

Den här funktionen tar ett textvärde och returnerar ett värde av typen `nummer`, `logisk`, `null`, `datum och tid`, `varaktighet` eller `text`. Ett tomt textvärde tolkas som ett `null` värde.


## Examples

### Example #1
Konvertera text som representerar ett tal till motsvarande talvärde.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Konvertera text som representerar ett procentvärde till motsvarande talvärde.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Konvertera text som representerar ett franskt eurovärde till motsvarande talvärde.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Konvertera text som representerar ett tyskt datum och tid till motsvarande datum- och tidsvärde.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
