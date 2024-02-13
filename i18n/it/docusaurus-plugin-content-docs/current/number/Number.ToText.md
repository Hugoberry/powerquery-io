---
title: Number.ToText
---

# Number.ToText


Convertire il numero specificato in testo.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Remarks

Converte il valore numerico <code>number</code> in un valore di testo in base al formato specificato da <code>format</code>.<br />    <br />    Il formato è un valore di testo che indica come convertire il numero. Per ulteriori informazioni sui valori di formato supportati, passare a https://go.microsoft.com/fwlink/?linkid=2241210 e https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    È anche possibile specificare un <code>culture</code> facoltativo, ad esempio "it-IT", per controllare il comportamento di <code>format</code> dipendente dalle impostazioni cultura.


## Examples

### Example #1 
Convertire un numero in testo senza specificare un formato.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Convertire un numero in formato esponenziale.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Convertire un numero in formato percentuale con una sola posizione decimale.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
