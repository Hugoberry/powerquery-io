---
title: Number.FromText
---

# Number.FromText


## Description

Erstellt Zahlen auf der Grundlage allgemeiner Textformate (&#34;15&#34;, &#34;3.423,10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Gibt einen <code>number</code>-Wert auf der Grundlage des angegebenen Textwerts (<code>text</code>) zurück. <ul>  <li><code>text</code>: Die Textdarstellung eines Zahlenwerts. Die Darstellung muss ein allgemeines Zahlenformat wie "15", "3.423,10" oder "5.0E-10" aufweisen.</li>  <li><code>culture</code>: Eine optionale Kultur, die steuert, wie "<code>text</code>" interpretiert wird (Beispiel: "de-DE").</li> </ul>


## Examples

### Example #1 
Ermittelt den Zahlenwert von &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Ermittelt den Zahlenwert von &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
