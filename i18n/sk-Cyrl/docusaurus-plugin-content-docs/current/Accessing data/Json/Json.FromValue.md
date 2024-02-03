---
title: Json.FromValue
---

# Json.FromValue


## Description

Vytvorí vyjadrenie JSON danej hodnoty.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Vytvorí zápis JSON zadanej hodnoty <code>value</code> s textovým kódovaním, ktoré určuje parameter <code>encoding</code>. Ak nie je parameter <code>encoding</code> zadaný, použije sa kódovanie UTF8. Hodnoty sú zapísané nasledovným spôsobom:<br /> <ul>        <li>Hodnoty null, textové a logické hodnoty sa zobrazujú ako príslušné typy JSON</li>        <li>Čísla sa zobrazujú ako čísla vo formáte JSON, platí ale, že <code>#infinity</code>, <code>-#infinity</code> a <code>#nan</code> sa konvertujú na hodnoty null</li>        <li>Zoznamy sa zobrazujú ako polia JSON</li>        <li>Záznamy sa zobrazujú ako objekty JSON</li>        <li>Tabuľky sa zobrazujú ako polia objektov</li>        <li>Dátumy, časy, časové pásma a trvania sa zobrazujú ako text zodpovedajúci norme ISO-8601</li>        <li>Binárne hodnoty sa zobrazujú ako text s kódovaním base-64</li>        <li>Typy a funkcie generujú chybu</li> </ul>    


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
