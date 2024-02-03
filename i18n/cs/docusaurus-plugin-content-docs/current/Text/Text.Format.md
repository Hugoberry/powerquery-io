---
title: Text.Format
---

# Text.Format


## Description

Vrátí formátovaný text z formátovacího řetězce a argumentů.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Vrátí formátovaný text, který se vytvoří, když se použije <code>arguments</code> ze seznamu nebo záznamu na formátovací řetězec <code>formatString</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Naformátování seznamu čísel
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Naformátování různých typů dat ze záznamu podle jazykové verze Angličtina (Spojené státy)
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
