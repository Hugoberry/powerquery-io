---
title: Number.From
---

# Number.From


Vytvoří číslo z předané hodnoty.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vrátí hodnotu `number` z předané hodnoty `value`. Volitelně je možné zadat i `culture` (např. en-US). d je předaná hodnota `value` `null`, funkce `Number.From` vrátí hodnotu `null`. Pokud je předaná hodnota `value` typu `number`, vrátí se hodnota `value`. Na hodnoty `number` lze převést hodnoty následujících typů:

-   `text`: Hodnota `number` z textové reprezentace. Lze zpracovat běžné textové formáty („15“, „3423,10“, „5,0E-10“). Další informace naleznete v popisu funkce `Number.FromText`.
-   `logical`: 1 pro hodnotu `true`, 0 pro hodnotu `false`.
-   `datetime`: Číslo s plovoucí desetinnou čárkou obsahující ekvivalent data OLE Automation.
-   `datetimezone`: Číslo s plovoucí desetinnou čárkou obsahující ekvivalent data a času OLE Automation `value`.
-   `date`: Číslo s plovoucí desetinnou čárkou obsahující ekvivalent data OLE Automation.
-   `time`: Vyjádřeno ve zlomcích dnů.
-   `duration`: Vyjádřeno v celých dnech a zlomcích dnů.

Pokud je hodnota `value` jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1
Získá hodnotu `number` hodnoty `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Získá hodnotu `number` hodnoty `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Získá hodnotu typu `number` pro `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
