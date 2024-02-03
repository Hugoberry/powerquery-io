---
title: Number.ToText
---

# Number.ToText


## Description

Konvertē norādīto skaitli par tekstu.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Konvertē skaitlisko vērtību <code>number</code> par teksta vērtību atbilstoši formātam, ko norāda <code>format</code>.<br />     <br />     Formāts ir teksta vērtība, kas norāda, kā skaitlis ir jākonvertē. Lai iegūtu papildinformāciju par atbalstītajām formāta vērtībām, dodieties uz https://go.microsoft.com/fwlink/?linkid=2241210 un https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Var norādīt arī neobligātu <code>culture</code> (piemēram, "lv-LV"), lai kontrolētu no kultūras atkarīgo <code>format</code> reakciju.


## Examples

### Example #1 
Konvertējiet skaitli par tekstu, nenorādot formātu.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Konvertējiet skaitli eksponenciālā formātā.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Konvertējiet skaitli procentu formātā, izmantojot tikai vienu skaitli aiz komata.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
