---
title: DateTime.FromText
---

# DateTime.FromText


Crea un datetimezone a partir de formatos de fecha y hora local y universal.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Crea un valor <code>datetime</code> a partir de una representación textual, <code>text</code>. Un parámetro opcional <code>registro</code>, <code>options</code>, puede ser proporcionado para especificar propiedades adicionales. El <code>registro</code> puede contener los siguientes campos:<ul>   <li><code>Format</code>: Un valor de <code>texto</code> que indica el formato a utilizar. Para más detalles, consulte https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona <code>nulo</code>, se analizará la fecha utilizando el mejor esfuerzo.</li>   <li><code>Cultura</code>: Cuando <code>Formato</code> no es nulo, <code>Cultura</code> controla algunos especificadores de formato. Por ejemplo, en <code>"es-US"</code> <code>"MMM"</code> es <code>"Ene", "Feb", "Mar", ...</code>, mientras que en <code>"ru-RU"</code> <code>"MMM"</code> es <code>"янв", "фев", "мар", ...</code>. Cuando <code>Formato</code> es <code>nulo</code>, <code>Cultura</code> controla el formato por defecto a utilizar. Cuando <code>Cultura</code> es <code>null</code> o se omite, se utiliza <code>Cultura.Actual</code>.</li></ul>Para soportar los flujos de trabajo heredados, también <code>options</code> puede ser un valor de texto. Esto tiene el mismo comportamiento que si <code>options</code><code> = [Formato = nulo, Cultura = <code>options</code>]</code>.


## Examples

### Example #1 
Convierta &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; en un valor datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Convertir &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; en un valor datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Convierta &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; en un valor datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Convertir &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; en un valor datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
