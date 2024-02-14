---
title: Time.ToText
---

# Time.ToText


Devuelve una representación de texto del valor de hora.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devuelve una representación textual de <code>time</code>. Un parámetro opcional <code>record</code>, <code>options</code>, puede ser proporcionado para especificar propiedades adicionales. <code>culture</code> sólo se utiliza para los flujos de trabajo heredados. El <code>record</code> puede contener los siguientes campos:<ul>   <li><code>Format</code>: Un valor de <code>texto</code> que indica el formato a utilizar. Para más detalles, consulte https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona <code>nulo</code> la fecha será formateada utilizando el valor predeterminado definido por <code>Cultura</code>.</li>   <li><code>Cultura</code>: Cuando <code>Formato</code> no es nulo, <code>Cultura</code> controla algunos especificadores de formato. Por ejemplo, en <code>"en-US"</code> <code>"tt"</code> es <code>"AM" o "PM"</code>.mientras que en <code>"ar-EG"</code> <code>"tt"</code> es <code>"ص" o "م"</code>. Cuando <code>Format</code> es <code>nulo</code>, <code>Culture</code> controla el formato por defecto a utilizar. Cuando <code>Cultura</code> es <code>nulo</code> o se omite, se utiliza <code>Culture.Current</code>.</li></ul>Para soportar los flujos de trabajo heredados, <code>options</code> y <code>culture</code> también pueden ser valores de texto. Esto tiene el mismo comportamiento que si <code>options</code><code> = [Formato = <code>options</code>, Cultura = <code>culture</code>]</code>.


## Examples

### Example #1 
Convertir &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; en un valor &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;La salida del resultado puede variar en función de la referencia cultural actual. &lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Convertir con formato de hora estándar.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
