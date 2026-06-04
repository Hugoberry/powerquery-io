---
title: Number.ToText
---

# Number.ToText


Převede dané číslo na text.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Převede číselnou hodnotu `number` na textovou hodnotu ve formátu určeném `format`.  
  
Formát je textová hodnota určující, jak má být číslo převedeno. Další podrobnosti o podporovaných hodnotách formátu najdete: na https://go.microsoft.com/fwlink/?linkid=2241210 a https://go.microsoft.com/fwlink/?linkid=2240884.  
  
Může se zadat i nepovinný `culture` (například en-US), který řídí chování `format` závislé na jazykové verzi.


## Examples

### Example #1
Umožňuje převést číslo na text bez zadání formátu.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2
Převede číslo na exponenciální formát.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3
Umožňuje převést číslo na procentuální formát pouze s jedním desetinným místem.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
