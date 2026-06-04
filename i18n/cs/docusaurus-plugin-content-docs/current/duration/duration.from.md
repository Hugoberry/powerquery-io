---
title: Duration.From
---

# Duration.From


Vytvoří hodnotu duration z předané hodnoty.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Vrátí hodnotu doby trvání z dané hodnoty.

-   `value`: Hodnota, ze které je odvozena doba trvání. Pokud má daná `value` hodnotu `null`, vrátí tato funkce hodnotu `null`. Pokud má daná `value` hodnotu `duration`, vrátí se `value`. Na hodnotu data `duration` lze převést hodnoty následujících typů:
    -   `text`: Hodnota `duration` z textového formátu uplynulého času (d.h:m:s). Další informace naleznete v popisu funkce `Duration.FromText`.
    -   `number`: Hodnota `duration` ekvivalentní k počtu celých dnů a zlomků dnů vyjádřených hodnotou `value`.

Pokud je hodnota `value` jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1
Převede hodnotu `2.525` na hodnotu `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Převod textové hodnoty `"2.05:55:20.34567"` na hodnotu `duration`
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
