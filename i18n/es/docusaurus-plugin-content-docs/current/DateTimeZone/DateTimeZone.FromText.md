---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Crea una datetimezone a partir de formatos datetimezone locales, universales y personalizados.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Crea un valor <code>datetimezone</code> a partir de una representación textual, <code>text</code>. Un parámetro opcional <code>registro</code>, <code>options</code>,  puede ser proporcionado para especificar propiedades adicionales. El <code>registro</code> puede contener los siguientes campos:<ul>   <li><code>Formato</code>: Un valor de <code>texto</code> que indica el formato a utilizar. Para más detalles, consulte https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona <code>nulo</code>, la fecha será analizada utilizando el mayor esfuerzo.</li>   <li><code>Cultura</code>: Cuando <code>Formato</code> no es nulo, <code>Cultura</code> controla algunos especificadores de formato. Por ejemplo, en <code>"es-US"</code> <code>"MMM"</code> es <code>"Ene", "Feb", "Mar", ...</code>, mientras que en <code>"ru-RU"</code> <code>"MMM"</code> es <code>"янв", "фев", "мар", ...</code>. Cuando <code>Formato</code> es <code>nulo</code>, <code>Cultura</code> controla el formato a utilizar por defecto. Cuando <code>Cultura</code> es <code>nulo</code> o se omite, se utiliza <code>Culture.Current</code>.</li></ul> Para admitir los flujos de trabajo heredados, <code>options</code> también puede ser un valor de texto. Esto tiene el mismo comportamiento que si <code>options</code><code> = [Formato = nulo, Cultura = <code>options</code>]</code>.


## Examples

### Example #1 
Convertir &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; en un valor &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Convertir con ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
