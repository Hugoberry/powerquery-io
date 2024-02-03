---
title: Number.ToText
---

# Number.ToText


## Description

Konverterar det angivna talet till text.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Konverterar det numeriska värdet <code>number</code> till ett textvärde enligt det format som anges av <code>format</code>.<br />    <br />    Formatet är ett textvärde som anger hur talet ska konverteras. Mer information om formatvärden som stöds finns i https://go.microsoft.com/fwlink/?linkid=2241210 och https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    En valfri <code>culture</code> kan också anges (till exempel "en-US") för att styra det kulturberoende beteendet för <code>format</code>.


## Examples

### Example #1 
Konvertera ett tal till text utan att ange något format.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Konvertera ett tal till exponentiellt format.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Konvertera ett tal till procentformat med endast en decimal.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
