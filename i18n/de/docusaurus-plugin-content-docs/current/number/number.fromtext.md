---
title: Number.FromText
---

# Number.FromText


Erstellt Zahlen auf der Grundlage allgemeiner Textformate ("15", "3.423,10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Gibt einen `number`\-Wert auf der Grundlage des angegebenen Textwerts (`text`) zurück.

-   `text`: Die Textdarstellung eines Zahlenwerts. Die Darstellung muss ein allgemeines Zahlenformat wie "15", "3.423,10" oder "5.0E-10" aufweisen.
-   `culture`: Eine optionale Kultur, die steuert, wie "`text`" interpretiert wird (Beispiel: "de-DE").


## Examples

### Example #1
Ermittelt den Zahlenwert von `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Ermittelt den Zahlenwert von `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
