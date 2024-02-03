---
title: Json.FromValue
---

# Json.FromValue


## Description

Ustvari predstavitev zapisa JSON za navedeno vrednost.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Ustvari obliko zapisa JSON navedene vrednosti <code>value</code> s kodiranjem besedila, ki je določeno s parametrom <code>encoding</code>. Če parameter <code>encoding</code> izpustite, je uporabljena oblika UTF8. Vrednosti so predstavljene tako:<br /> <ul>        <li>Ničelne, besedilne in logične vrednosti so predstavljene ko ustrezne vrste oblike zapisa JSON.</li>        <li>Števila so predstavljena kot števila v obliki zapisa JSON, le da so <code>#infinity</code>, <code>-#infinity</code> in <code>#nan</code> pretvorjene v ničelne vrednosti.</li>        <li>Seznami so predstavljeni kot polja strežnikov JSON.</li>        <li>Zapisi so predstavljeni kot predmeti JSON.</li>        <li>Tabele so predstavljene kot polja strežnikov predmetov</li>        <li>Datumi, ure, vrednosti "datetime", vrednosti "datetimezone" in trajanja so predstavljeni kot besedilo ISO-8601.</li>        <li>Dvojiške vrednosti so predstavljene kot besedilo, kodirano s shemo base-64</li>        <li>Vrste in funkcije ustvarijo napako.</li> </ul>    


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
