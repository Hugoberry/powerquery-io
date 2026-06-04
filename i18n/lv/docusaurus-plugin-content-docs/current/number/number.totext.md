---
title: Number.ToText
---

# Number.ToText


Konvertē norādīto skaitli par tekstu.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Konvertē skaitlisko vērtību `number` par teksta vērtību atbilstoši formātam, ko norāda `format`.  
  
Formāts ir teksta vērtība, kas norāda, kā skaitlis ir jākonvertē. Lai iegūtu papildinformāciju par atbalstītajām formāta vērtībām, dodieties uz https://go.microsoft.com/fwlink/?linkid=2241210 un https://go.microsoft.com/fwlink/?linkid=2240884.  
  
Var norādīt arī neobligātu `culture` (piemēram, "lv-LV"), lai kontrolētu no kultūras atkarīgo `format` reakciju.


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
