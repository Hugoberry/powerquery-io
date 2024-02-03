---
title: Json.FromValue
---

# Json.FromValue


## Description

Vytvoří reprezentaci JSON dané hodnoty.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Vytvoří reprezentaci JSON dané hodnoty <code>value</code> s kódováním textu zadaným pomocí <code>encoding</code>. Při vynechání <code>encoding</code> se použije kódování UTF8. Hodnoty se reprezentují takto:<br /> <ul>        <li>Hodnoty null, textové a logické hodnoty se reprezentují jako odpovídající typy JSON.</li>        <li>Čísla se reprezentují jako čísla v JSON s tou výjimkou, že <code>#infinity</code>, <code>-#infinity</code> a <code>#nan</code> se převedou na hodnotu null.</li>        <li>Seznamy se reprezentují jako pole JSON.</li>        <li>Záznamy se reprezentují jako objekty JSON.</li>        <li>Tabulky se reprezentují jako pole objektů.</li>        <li>Data, časy, data a časy, časová pásma a doby trvání se reprezentují jako text ISO-8601.</li>        <li>Binární hodnoty se reprezentují jako text s kódováním base-64.</li>        <li>Typy a funkce způsobí chybu.</li> </ul>    


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
