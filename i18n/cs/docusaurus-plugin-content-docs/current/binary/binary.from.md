---
title: Binary.From
---

# Binary.From


Vytvoří binární hodnotu z předané hodnoty.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Vrátí hodnotu `binary` z předané hodnoty `value`. Pokud je předaná hodnota `value` `null`, funkce `Binary.From` vrátí hodnotu `null`. Pokud je předaná hodnota `value` typu `binary`, vrátí se hodnota `value`. Na hodnoty `binary` lze převést hodnoty následujících typů:

-   `text`: Hodnota `binary` z textové reprezentace. Další informace naleznete v popisu funkce `Binary.FromText`.

Pokud je hodnota `value` jakéhokoli jiného typu, je vrácena chyba.


## Examples

### Example #1
Získat hodnotu `binary` hodnoty `"1011"`
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
