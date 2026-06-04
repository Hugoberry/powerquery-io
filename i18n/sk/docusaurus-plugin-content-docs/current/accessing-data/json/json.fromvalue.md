---
title: Json.FromValue
---

# Json.FromValue


Vytvorí vyjadrenie JSON danej hodnoty.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Vytvorí zápis JSON zadanej hodnoty `value` s textovým kódovaním, ktoré určuje parameter `encoding`. Ak nie je parameter `encoding` zadaný, použije sa kódovanie UTF8. Hodnoty sú zapísané nasledovným spôsobom:

-   Hodnoty null, textové a logické hodnoty sa zobrazujú ako príslušné typy JSON
-   Čísla sa zobrazujú ako čísla vo formáte JSON, platí ale, že `#infinity`, `-#infinity` a `#nan` sa konvertujú na hodnoty null
-   Zoznamy sa zobrazujú ako polia JSON
-   záznamy sa zobrazujú ako objekty JSON
-   Tabuľky sa zobrazujú ako polia objektov
-   Dátumy, časy, časové pásma a trvania sa zobrazujú ako text zodpovedajúci norme ISO-8601
-   Binárne hodnoty sa zobrazujú ako text s kódovaním base-64
-   Typy a funkcie generujú chybu


## Examples

### Example #1
Skonvertujte komplexnú hodnotu na formát JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
