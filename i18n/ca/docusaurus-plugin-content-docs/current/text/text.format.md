---
title: Text.Format
---

# Text.Format


Retorna text formatat d'una cadena de format i arguments.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Remarks

Retorna el text formatat que es crea en aplicar el valor `arguments` des d'una llista o registre a una cadena de format `formatString`. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Formateu una llista de nombres.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2
Formateu tipus de dades diferents d'un registre segons la referència cultural anglesa dels Estats Units.
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
