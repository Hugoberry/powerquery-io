---
title: Value.FromText
---

# Value.FromText


Maakt een sterk getypeerde waarde van een tekstweergave.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodeert een waarde uit een tekstweergave en interpreteert deze als een waarde met een geschikt type.

-   `text`: de te interpreteren tekst.
-   `culture`: (optioneel) een specifieke cultuur die wordt gebruikt om de tekst te interpreteren (bijvoorbeeld 'en-US').

Deze functie neemt een tekstwaarde en retourneert een waarde van het type `getal`, `logisch`, `null`, `datum`, `duur` of `tekst`. Een lege tekstwaarde wordt geïnterpreteerd als een `null` waarde.


## Examples

### Example #1
Converteer tekst die een getal vertegenwoordigt naar de bijbehorende getalwaarde.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Converteer tekst die een percentage vertegenwoordigt naar de bijbehorende getalwaarde.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Converteer tekst die een Franse eurowaarde vertegenwoordigt naar de bijbehorende getalwaarde.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Converteer tekst die een Duitse datum en tijd vertegenwoordigt naar de bijbehorende datum- en tijdwaarde.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
