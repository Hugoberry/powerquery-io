---
title: Text.Format
---

# Text.Format


Vráti formátovaný text z reťazca formátu a argumentov.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Remarks

Vráti formátovaný text, ktorý je vytvorený použitím `arguments` zo zoznamu alebo záznamu na reťazec formátu `formatString`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US).


## Examples

### Example #1
Formátuje zoznam čísiel.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2
Formátuje rôzne typy údajov zo záznamu v súlade s anglickou jazykovou verziou (USA).
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
