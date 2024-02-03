---
title: Text.Format
---

# Text.Format


## Description

Devuelve texto formateado a partir de una cadena de formato y argumentos.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Devuelve texto con formato que se crea por la aplicación de <code>arguments</code> de una lista o registro a una cadena de formato <code>formatString</code>. También se puede proporcionar un parámetro <code>culture</code> opcional (por ejemplo, "es-ES").


## Examples

### Example #1 
Formatea una lista de números.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formatea diferentes tipos de datos de un registro según la referencia cultural del inglés de Estados Unidos.
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
