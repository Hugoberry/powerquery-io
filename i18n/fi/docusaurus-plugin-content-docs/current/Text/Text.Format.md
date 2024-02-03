---
title: Text.Format
---

# Text.Format


## Description

Palauttaa muotoillun tekstin muotoilumerkkijonosta ja argumenteista.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Palauttaa muotoillun tekstin, joka luodaan käyttämällä kohdetta <code>arguments</code> tietueluettelosta muotoilumerkkijonoon <code>formatString</code>. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Muotoile lukujen luettelo.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Muotoile eri tietotyyppejä tietueesta Yhdysvaltain englannin maa-asetuksen mukaisesti.
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
