---
title: Json.FromValue
---

# Json.FromValue


Ustvari predstavitev zapisa JSON za navedeno vrednost.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Ustvari obliko zapisa JSON navedene vrednosti `value` s kodiranjem besedila, ki je določeno s parametrom `encoding`. Če parameter `encoding` izpustite, je uporabljena oblika UTF8. Vrednosti so predstavljene tako:

-   Ničelne, besedilne in logične vrednosti so predstavljene kot ustrezne vrste oblike zapisa JSON.
-   Števila so predstavljena kot števila v obliki zapisa JSON, le da so `#infinity`, `-#infinity` in `#nan` pretvorjene v ničelne vrednosti
-   Seznami so predstavljeni kot polja JSON.
-   Zapisi so predstavljeni kot predmeti JSON
-   Tabele so predstavljene kot polja predmetov
-   Datumi, ure, vrednosti"datetime", vrednosti"datetimezone"in trajanja so predstavljeni kot besedilo ISO-8601
-   Dvojiške vrednosti so predstavljene kot besedilo, kodirano s shemo base-64
-   Vrste in funkcije ustvarijo napako


## Examples

### Example #1
Pretvorite zapleteno vrednost v JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
