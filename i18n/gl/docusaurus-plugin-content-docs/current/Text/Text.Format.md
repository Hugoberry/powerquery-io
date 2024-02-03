---
title: Text.Format
---

# Text.Format


## Description

Devolve texto con formato a partir de argumentos e unha cadea de formato.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Devolve texto con formato que se crea ao aplicar <code>arguments</code> dunha lista ou rexistro a unha cadea de formato <code>formatString</code>. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").


## Examples

### Example #1 
Dea formato a unha lista de números.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Dea formato aos diferentes tipos de datos dun rexistro segundo a referencia cultural Estados Unidos (inglés).
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
