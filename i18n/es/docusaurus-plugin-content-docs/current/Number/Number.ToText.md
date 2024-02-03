---
title: Number.ToText
---

# Number.ToText


## Description

Convierte el número dado en texto.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Convierte el valor numérico <code>number</code> en un valor de texto según el formato especificado por <code>format</code>.<br />    <br />    El formato es un valor de texto que indica cómo se debe convertir el número. Para ver más detalles acerca de los valores de formato admitidos, vaya a https://go.microsoft.com/fwlink/?linkid=2241210 y https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Un <code>culture</code> opcional también se puede proporcionar (por ejemplo, "es-ES") para controlar el comportamiento cultural de <code>format</code>.


## Examples

### Example #1 
Convierte un número en texto sin especificar un formato.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Convierte un número en formato exponencial.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Convierte un número en formato de porcentaje con una sola posición decimal.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
