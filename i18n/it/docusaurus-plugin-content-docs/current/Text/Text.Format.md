---
title: Text.Format
---

# Text.Format


## Description

Restituisce testo formattato da una stringa di formato e dagli argomenti.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Restituisce testo formattato che viene creato applicando <code>arguments</code> da un elenco o record a una stringa di formato <code>formatString</code>. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".


## Examples

### Example #1 
Consente di formattare un elenco di numeri.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formatta tipi di dati diversi di un record in base alle impostazioni cultura Italiano (Italia).
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
