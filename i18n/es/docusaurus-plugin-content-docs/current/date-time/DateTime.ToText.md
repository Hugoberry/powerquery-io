---
title: DateTime.ToText
---

# DateTime.ToText


Devuelve una representación de texto del valor datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devuelve una representación textual de <code>dateTime</code>. Un parámetro opcional <code>record</code>, <code>options</code>, puede ser proporcionado para especificar propiedades adicionales. <code>culture</code>solo se utiliza para los flujos de trabajo heredados. El <code>registro</code> puede contener los siguientes campos:<ul>   <li><code>Formato</code>: Un valor de <code>texto</code> que indica el formato a utilizar. Para más detalles, consulte https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona <code>nulo</code> la fecha será formateada utilizando el valor predeterminado definido por <code>Cultura</code>.</li>   <li><code>Cultura</code>: Cuando <code>Formato</code> no es nulo, <code>Cultura</code> controla algunos especificadores de formato. Por ejemplo, en <code>"es-US"</code> <code>"MMM"</code> es <code>"Ene", "Feb", "Mar", ...</code>, mientras que en <code>"ru-RU"</code> <code>"MMM"</code> es <code>"янв", "фев", "мар", ...</code>. Cuando <code>Formato</code> es <code>nulo</code>, <code>Cultura</code> controla el formato por defecto a utilizar. Cuando <code>Cultura</code> es <code>nulo</code> o se omite, se utiliza <code>Cultura.Actual</code>.</li></ul> Para soportar los flujos de trabajo heredados, <code>options</code> y <code>culture</code> también pueden ser valores de texto. Esto tiene el mismo comportamiento que si <code>options</code><code> = [Formato = <code>options</code>, Cultura = <code>culture</code>]</code>.


## Examples

### Example #1 
Convertir &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25) &lt;/code&gt; en un valor &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;La salida del resultado puede variar en función de la referencia cultural actual.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Convertir con el patrón ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
