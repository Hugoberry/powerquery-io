---
title: Text.Format
---

# Text.Format


## Description

Formázott szöveget ad vissza egy formázó sztringből és argumentumokból.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Olyan formázott szöveget ad vissza, amelynek létrehozása <code>arguments</code> alkalmazásával történt egy listából vagy rekordból egy <code>formatString</code> formázó karakterláncra. Egy nem kötelező <code>culture</code> is megadható (például „en-US”).


## Examples

### Example #1 
Számlista formázása.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Különböző adattípusok formázása rekordokból az Egyesült Államok angol kulturális környezetének megfelelően.
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
