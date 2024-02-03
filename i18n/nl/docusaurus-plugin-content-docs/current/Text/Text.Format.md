---
title: Text.Format
---

# Text.Format


## Description

Retourneert opgemaakte tekst op basis van een tekenreeks en argumenten voor opmaak.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Hiermee wordt opgemaakte tekst geretourneerd waarbij <code>arguments</code> uit een lijst of record wordt toegepast op een notatietekenreeks <code>formatString</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
Een lijst met getallen opmaken.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Verschillende gegevenstypen van een record opmaken op basis van de cultuur Engels (Verenigde Staten).
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
