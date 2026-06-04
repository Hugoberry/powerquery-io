---
title: Json.FromValue
---

# Json.FromValue


Vytvoří reprezentaci JSON dané hodnoty.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Vytvoří reprezentaci JSON dané hodnoty `value` s kódováním textu zadaným pomocí `encoding`. Při vynechání `encoding` se použije kódování UTF8. Hodnoty se reprezentují takto:

-   Hodnoty null, textové a logické hodnoty se reprezentují jako odpovídající typy JSON.
-   Čísla se reprezentují jako čísla v JSON s tou výjimkou, že `#infinity`, `-#infinity` a `#nan` se převedou na hodnotu null.
-   Seznamy se reprezentují jako pole JSON.
-   Záznamy jsou reprezentovány jako objekty JSON.
-   Tabulky se reprezentují jako pole objektů.
-   Data, časy, data a časy, časová pásma a doby trvání se reprezentují jako text ISO-8601.
-   Binární hodnoty se reprezentují jako text s kódováním base-64.
-   Typy a funkce způsobí chybu.


## Examples

### Example #1
Převod komplexní hodnoty na JSON
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
