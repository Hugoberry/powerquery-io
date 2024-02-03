---
title: Number.ToText
---

# Number.ToText


## Description

Skonvertuje dané číslo na text.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Skonvertuje číselnú hodnotu <code>number</code> na textovú hodnotu podľa formátu určeného <code>format</code>.<br />    <br />    Formát je textová hodnota označujúca spôsob konverzie čísla. Ďalšie podrobnosti o podporovaných hodnotách formátu nájdete v téme https://go.microsoft.com/fwlink/?linkid=2241210 a https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Môžete tiež zadať voliteľné <code>culture</code> (napríklad sk-SK) na ovládanie správania <code>format</code> závislého od kultúry.


## Examples

### Example #1 
Skonvertuje číslo na text bez zadania formátu.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Skonvertuje číslo na exponenciálny formát.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Skonvertuje číslo na percentuálny formát iba s jedným desatinným miestom.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
