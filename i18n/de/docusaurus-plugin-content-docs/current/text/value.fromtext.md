---
title: Value.FromText
---

# Value.FromText


Erstellt einen stark typisierten Wert auf der Grundlage einer Textdarstellung.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodiert einen Wert aus einer Textdarstellung und interpretiert ihn als Wert mit einem geeigneten Typ.

-   `text`: Der zu interpretierende Text.
-   `culture`: (Optional) Eine bestimmte Kultur, die zum Interpretieren des Texts verwendet wird (z. B. „en-US“).

Diese Funktion akzeptiert einen Textwert und gibt einen Wert vom Typ `number`, `logical`, `null`, `datetime`, `duration` oder `text`zurück. Ein leerer Textwert wird als `null`\-Wert interpretiert.


## Examples

### Example #1
Konvertiert Text, der eine Zahl darstellt, in den entsprechenden Zahlenwert.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Konvertiert Text, der einen Prozentsatz darstellt, in den entsprechenden Zahlenwert.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Konvertiert Text, der einen französischen Euro-Wert darstellt, in den entsprechenden Zahlenwert.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Konvertiert Text, der einen deutschen Datums- und Uhrzeitwert darstellt, in den entsprechenden Datums- und Uhrzeitwert.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
