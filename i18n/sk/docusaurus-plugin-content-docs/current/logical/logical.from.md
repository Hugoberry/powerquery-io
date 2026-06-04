---
title: Logical.From
---

# Logical.From


Vytvorí logickú hodnotu z danej hodnoty.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Vráti hodnotu `logical` zo zadanej hodnoty `value`. Ak zadaná hodnota `value` je `null`, `Logical.From` vráti hodnotu `null`. Ak zadaná hodnota `value` je `logical`, vráti sa hodnota `value`. Hodnoty nasledujúcich typov možno konvertovať na hodnotu `logical`:

-   `text`: Hodnota `logical` z textovej hodnoty, buď `"true"`, alebo `"false"`. Podrobnosti nájdete v časti `Logical.FromText`.
-   `number`: `false`, ak sa `value` rovná hodnote `0`, v opačnom prípade `true`.

Ak je hodnota `value` akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1
Konvertujte hodnotu `2` na hodnotu `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
