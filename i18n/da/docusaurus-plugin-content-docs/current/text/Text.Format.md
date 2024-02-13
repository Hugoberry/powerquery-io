---
title: Text.Format
---

# Text.Format


Returnerer formateret tekst fra en formatstreng og argumenter.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Remarks

Returnerer formateret tekst, der er oprettet ved at anvende <code>arguments</code> fra en liste eller post på formatstreng <code>formatString</code>. Der kan også gives angives en valgfri <code>culture</code> (f.eks. "en-US").


## Examples

### Example #1 
Formatér en liste med tal.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formatér forskellige datatyper fra en post i henhold til engelsk kultur i USA.
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
