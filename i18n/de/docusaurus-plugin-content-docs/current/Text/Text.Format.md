---
title: Text.Format
---

# Text.Format


## Description

Gibt formatierten Text aus einer Formatzeichenfolge und Argumenten zurück.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Gibt formatierten Text zurück, der durch das Anwenden von <code>arguments</code> aus einer Liste oder einem Datensatz auf eine Formatzeichenfolge <code>formatString</code> angewendet wird. Optional kann auch ein Element vom Typ "<code>culture</code>" angegeben werden (Beispiel: "de-DE").


## Examples

### Example #1 
Formatieren Sie eine Liste mit Zahlen.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formatieren Sie unterschiedliche Datentypen aus einem Datensatz entsprechend der Kultur &#34;Vereinigte Staaten (Englisch)&#34;.
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
