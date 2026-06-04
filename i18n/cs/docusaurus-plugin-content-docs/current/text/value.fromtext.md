---
title: Value.FromText
---

# Value.FromText


Vytvoří z textové reprezentace hodnotu silného typu.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Dekóduje hodnotu z textové reprezentace a interpretuje ji jako hodnotu s příslušným typem.

-   `text`: Text, který se má interpretovat
-   `culture`: (Volitelné) Konkrétní jazyková verze použitá k interpretaci textu (například en-US)

Tato funkce přebírá textovou hodnotu a vrací hodnotu typu `number` `logical`, `null`, `datetime`, `duration` nebo `text`. Prázdná textová hodnota je interpretována jako hodnota `null`.


## Examples

### Example #1
Převede text představující číslo na odpovídající číselnou hodnotu.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Převede text představující procento na odpovídající číselnou hodnotu.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Převede text představující francouzskou hodnotu euro na odpovídající číselnou hodnotu.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Převede text představující německé datum a čas na odpovídající hodnotu data a času.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
