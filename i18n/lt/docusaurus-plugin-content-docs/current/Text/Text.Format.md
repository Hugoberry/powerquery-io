---
title: Text.Format
---

# Text.Format


## Description

Pateikiamas suformatuotas tekstas pagal formatavimo eilutę ir argumentus.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Pateikiamas suformatuotas tekstas, sukuriamas taikant <code>arguments</code> iš sąrašo arba įrašo į formato eilutę <code>formatString</code>. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Suformatuokite skaičių sąrašą.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Suformatuokite skirtingus duomenų tipus pagal įrašą, atsižvelgdami į Jungtinių Amerikos Valstijų anglišką kultūrą.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
