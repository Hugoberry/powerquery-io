---
title: Number.FromText
---

# Number.FromText


Vytvoří čísla z běžných textových formátů (15, 3 423,10, 5,0E-10).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Vrátí hodnotu `čísla` z dané textové hodnoty `text`.

-   `text`: Textová reprezentace číselné hodnoty. Reprezentace musí být v běžném číselném formátu, třeba 15, 5,0E-10 nebo 3423,10.
-   `culture`: Nepovinná jazyková verze, která určuje, jak se `text` interpretuje (např. en-US)


## Examples

### Example #1
Získá hodnotu number hodnoty `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Získá číselnou hodnotu hodnoty `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
