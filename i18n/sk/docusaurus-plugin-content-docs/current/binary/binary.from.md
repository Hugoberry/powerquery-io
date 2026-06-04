---
title: Binary.From
---

# Binary.From


Vytvorí binárny údaj z danej hodnoty


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Vráti hodnotu `binary` zo zadanej hodnoty `value`. Ak je zadaná hodnota `value` `null`, `Binary.From` vráti hodnotu `null`. Ak zadaná hodnota `value` je `binary`, vráti sa hodnota `value`. Hodnoty nasledujúcich typov možno konvertovať na hodnotu `binary`:

-   `text`: Hodnota `binary` z textového vyjadrenia. Podrobnosti nájdete v časti `Binary.FromText`.

Ak je hodnota `value` akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1
Získajte hodnotu `binary` čísla `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
