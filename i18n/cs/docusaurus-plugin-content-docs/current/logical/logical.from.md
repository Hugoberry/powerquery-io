---
title: Logical.From
---

# Logical.From


Vytvoří logickou hodnotu z předané hodnoty.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Vrátí hodnotu `logical` z předané hodnoty `value`. Pokud je předaná hodnota `value` `null`, funkce `Logical.From` vrátí hodnotu `null`. Pokud je předaná hodnota `value` typu `logical`, vrátí se hodnota `value`. Na hodnoty `logical` lze převést hodnoty následujících typů:

-   `text`: Hodnota `logical` z textové hodnoty, buď `"true"`, nebo `"false"`. Další informace naleznete v popisu funkce `Logical.FromText`.
-   `number`: `false`, pokud se hodnota `value` rovná `0`, jinak `true`.

Pokud je hodnota `value` jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1
Převede hodnotu `2` na hodnotu `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
