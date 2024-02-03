---
title: Number.ToText
---

# Number.ToText


## Description

Konverterer det angivne tal til tekst.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Konverterer den numeriske værdi <code>number</code> til en tekstværdi i overensstemmelse med det format, der er angivet af <code>format</code>.<br />    <br />    Formatet er en tekstværdi, der angiver, hvordan tallet skal konverteres. Du kan få flere oplysninger om de understøttede formatværdier på https://go.microsoft.com/fwlink/?linkid=2241210 and https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Der kan også angives en valgfri <code>culture</code> (f.eks. "da-DK") for at styre den kulturafhængige adfærd af  <code>format</code>.


## Examples

### Example #1 
Konvertér et tal til tekst uden at angive et format.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Konvertér et tal til eksponentielt format.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Konvertér et tal til procentformat med kun én decimalplads.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
